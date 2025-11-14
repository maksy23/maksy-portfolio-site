export type SkillLevel = 'Proficient' | 'Intermediate' | 'Emerging'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillsConfig {
  languages: Skill[]
  technologies: Skill[]
}

export const skillsData: SkillsConfig = {
  languages: [
    { name: 'JavaScript', level: 'Proficient' },
    { name: 'TypeScript', level: 'Proficient' },
    { name: 'HTML', level: 'Proficient' },
    { name: 'CSS', level: 'Proficient' },
    { name: 'SQL', level: 'Emerging' },
  ],
  technologies: [
    { name: 'React', level: 'Proficient' },
    { name: 'Next.js', level: 'Proficient' },
    { name: 'Tailwind CSS', level: 'Proficient' },
    { name: 'Vite', level: 'Emerging' },
    { name: 'Storybook', level: 'Proficient' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'NestJS', level: 'Emerging' },
    { name: 'GraphQL', level: 'Emerging' },
    { name: 'RESTful APIs', level: 'Intermediate' },
    { name: 'Jest', level: 'Intermediate' },
    { name: 'Cypress', level: 'Intermediate' },
    { name: 'Vitest', level: 'Emerging' },
    { name: 'Easy Peasy', level: 'Proficient' },
    { name: 'Context API', level: 'Intermediate' },
    { name: 'MySQL', level: 'Emerging' },
    { name: 'PostgreSQL', level: 'Emerging' },
    { name: 'Git', level: 'Proficient' },
    { name: 'GitHub Actions', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Postman', level: 'Intermediate' },
    { name: 'Storyblok', level: 'Intermediate' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'Terraform', level: 'Emerging' },
    { name: 'LangGraph', level: 'Emerging' },
    { name: 'Mastra', level: 'Emerging' },
  ],
}
