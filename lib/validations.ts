import { BloodType, Drinking, JobCategory, MBTI, Religion, Smoking } from "@prisma/client";
import { z } from "zod";

export const profileSchema = z.object({
  dateOfBirth: z.string().datetime(),
  jobCategory: z.nativeEnum(JobCategory),
  jobDetail: z.string().min(2).max(100),
  companyProvince: z.string().min(1),
  companyDistrict: z.string().min(1),
  residenceProvince: z.string().min(1),
  residenceDistrict: z.string().min(1),
  hometownProvince: z.string().min(1),
  hometownDistrict: z.string().min(1),
  personality: z.string().min(3).max(400),
  hobbies: z.array(z.string().min(1)).min(1),
  preferences: z.array(z.string().min(1)).min(1),
  mbti: z.nativeEnum(MBTI),
  bloodType: z.nativeEnum(BloodType),
  religion: z.nativeEnum(Religion),
  drinking: z.nativeEnum(Drinking),
  smoking: z.nativeEnum(Smoking),
  dislikedPartnerConditions: z.array(z.string().min(1)),
  stopMatching: z.boolean().default(false)
});

export const surveySubmissionSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string().min(1),
      answer: z.union([z.number(), z.string(), z.array(z.string())])
    })
  )
});

export const threadSchema = z.object({
  partnerId: z.string().min(1)
});

export const messageSchema = z.object({
  threadId: z.string().min(1),
  body: z.string().min(1).max(2000)
});
