import { z } from 'zod/v4'

export const profileSchema = z.object({
  title: z.string(),
  description: z.string(),
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    subtitle: z.string(),
    introduction: z.string(),
    notes: z.array(z.string()),
  }),
  practice: z.array(
    z.object({
      name: z.string(),
      summary: z.string(),
      description: z.string(),
    }),
  ),
  work: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
    }),
  ),
  skills: z.array(
    z.object({
      name: z.string(),
      items: z.array(z.string()),
    }),
  ),
  career: z.array(
    z.object({
      company: z.string(),
      roles: z.array(
        z.object({
          title: z.string(),
          dates: z.string(),
        }),
      ),
    }),
  ),
  contact: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export type ProfileContent = z.infer<typeof profileSchema>
export type HeroContent = ProfileContent['hero']
export type PracticeItem = ProfileContent['practice'][number]
export type WorkItem = ProfileContent['work'][number]
export type SkillGroup = ProfileContent['skills'][number]
export type CareerEntry = ProfileContent['career'][number]
export type ContactContent = ProfileContent['contact']
