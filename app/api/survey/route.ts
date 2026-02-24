import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { SURVEY_QUESTIONS } from "@/lib/survey";
import { surveySubmissionSchema } from "@/lib/validations";

export async function GET() {
  return NextResponse.json({ questions: SURVEY_QUESTIONS });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = surveySubmissionSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

  const requiredIds = new Set(SURVEY_QUESTIONS.filter((q) => q.required).map((q) => q.id));
  for (const id of requiredIds) {
    if (!parsed.data.answers.find((a) => a.questionId === id)) {
      return NextResponse.json({ error: `Missing required question: ${id}` }, { status: 400 });
    }
  }

  const response = await prisma.surveyResponse.upsert({
    where: { userId: session.user.id },
    create: {
      userId: session.user.id,
      answers: {
        createMany: {
          data: parsed.data.answers.map((answer) => ({
            questionId: answer.questionId,
            answer: answer.answer
          }))
        }
      }
    },
    update: {
      answers: {
        deleteMany: {},
        createMany: {
          data: parsed.data.answers.map((answer) => ({
            questionId: answer.questionId,
            answer: answer.answer
          }))
        }
      }
    },
    include: { answers: true }
  });

  return NextResponse.json(response, { status: 201 });
}
