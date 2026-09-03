export interface HeroContent {
  eyebrow: string
  title: string
  subtitle: string
  introduction: string
  notes: string[]
}

export interface PracticeItem {
  name: string
  summary: string
  description: string
}

export interface WorkItem {
  title: string
  description: string
  tags: string[]
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface CareerRole {
  title: string
  dates: string
}

export interface CareerEntry {
  company: string
  roles: CareerRole[]
}

export interface ContactContent {
  title: string
  description: string
}

export interface ProfileContent {
  title: string
  description: string
  hero: HeroContent
  practice: PracticeItem[]
  work: WorkItem[]
  skills: SkillGroup[]
  career: CareerEntry[]
  contact: ContactContent
}
