import type { Profile, SurveyAnswer } from "@prisma/client";
import type { ScoreBreakdown } from "@/lib/types";

const overlapRatio = (a: string[], b: string[]): number => {
  const aa = new Set(a);
  const bb = new Set(b);
  const intersection = [...aa].filter((v) => bb.has(v)).length;
  const union = new Set([...aa, ...bb]).size || 1;
  return intersection / union;
};

export const calculateScore = (
  me: Profile,
  other: Profile,
  myAnswers: SurveyAnswer[],
  otherAnswers: SurveyAnswer[]
): ScoreBreakdown => {
  const surveyMap = new Map(myAnswers.map((a) => [a.questionId, a.answer]));
  let surveyHit = 0;

  for (const answer of otherAnswers) {
    const mine = surveyMap.get(answer.questionId);
    if (!mine) continue;
    if (JSON.stringify(mine) === JSON.stringify(answer.answer)) surveyHit += 1;
  }

  const surveySimilarity = myAnswers.length ? surveyHit / myAnswers.length : 0;
  const lifestyleCompatibility =
    (me.drinking === other.drinking ? 0.5 : 0) + (me.smoking === other.smoking ? 0.5 : 0);
  const valueAlignment = overlapRatio(me.preferences, other.preferences);
  const personalityWeight = me.mbti === other.mbti ? 1 : 0.4;

  const total =
    surveySimilarity * 0.5 +
    lifestyleCompatibility * 0.2 +
    valueAlignment * 0.2 +
    personalityWeight * 0.1;

  return { surveySimilarity, lifestyleCompatibility, valueAlignment, personalityWeight, total };
};
