import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { calculateScore } from "@/lib/matching";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const me = await prisma.profile.findUnique({ where: { userId: session.user.id } });
  if (!me) return NextResponse.json({ error: "Profile required" }, { status: 400 });

  const mySurvey = await prisma.surveyResponse.findUnique({
    where: { userId: session.user.id },
    include: { answers: true }
  });

  const candidates = await prisma.profile.findMany({
    where: {
      userId: { not: session.user.id },
      stopMatching: false,
      NOT: { dislikedPartnerConditions: { hasSome: me.dislikedPartnerConditions } }
    },
    take: 30
  });

  const ranked = await Promise.all(
    candidates.map(async (candidate) => {
      const survey = await prisma.surveyResponse.findUnique({
        where: { userId: candidate.userId },
        include: { answers: true }
      });

      const score = calculateScore(me, candidate, mySurvey?.answers ?? [], survey?.answers ?? []);

      return {
        candidateUserId: candidate.userId,
        scoreBreakdown: score
      };
    })
  );

  ranked.sort((a, b) => b.scoreBreakdown.total - a.scoreBreakdown.total);

  return NextResponse.json({ results: ranked });
}
