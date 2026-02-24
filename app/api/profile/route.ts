import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { isRateLimited } from "@/lib/rate-limit";
import { sanitizeText } from "@/lib/sanitize";
import { profileSchema } from "@/lib/validations";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const profile = await prisma.profile.findUnique({ where: { userId: session.user.id } });
  return NextResponse.json(profile);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (isRateLimited(`profile:${session.user.id}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const parsed = profileSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

  const data = parsed.data;
  const profile = await prisma.profile.upsert({
    where: { userId: session.user.id },
    create: {
      ...data,
      dateOfBirth: new Date(data.dateOfBirth),
      personality: sanitizeText(data.personality),
      jobDetail: sanitizeText(data.jobDetail),
      userId: session.user.id
    },
    update: {
      ...data,
      dateOfBirth: new Date(data.dateOfBirth),
      personality: sanitizeText(data.personality),
      jobDetail: sanitizeText(data.jobDetail)
    }
  });

  await prisma.user.update({ where: { id: session.user.id }, data: { profileCompleted: true } });

  return NextResponse.json(profile, { status: 201 });
}
