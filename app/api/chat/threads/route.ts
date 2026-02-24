import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { threadSchema } from "@/lib/validations";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const threads = await prisma.thread.findMany({
    where: {
      OR: [{ participantAId: session.user.id }, { participantBId: session.user.id }]
    },
    orderBy: { updatedAt: "desc" }
  });

  return NextResponse.json(threads);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = threadSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

  const [a, b] = [session.user.id, parsed.data.partnerId].sort();

  const thread = await prisma.thread.upsert({
    where: { participantAId_participantBId: { participantAId: a, participantBId: b } },
    create: { participantAId: a, participantBId: b },
    update: {}
  });

  return NextResponse.json(thread, { status: 201 });
}
