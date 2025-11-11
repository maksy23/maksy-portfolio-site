import type { Skill } from '@/config/skills-config'
import { skillsData } from '@/config/skills-config'

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className='bg-card border-border hover:border-primary inline-flex cursor-default items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors'>
      <span className='text-foreground font-medium'>{skill.name}</span>
      <span className='text-muted-foreground'>|</span>
      <span className='text-muted-foreground'>{skill.level}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <>
      {/* Languages */}
      <div className='border-border space-y-4 rounded-lg border p-6'>
        <h3 className='text-foreground text-xl font-semibold'>Languages</h3>
        <div className='flex flex-wrap gap-3'>
          {skillsData.languages.map((skill) => (
            <SkillPill
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className='border-border space-y-4 rounded-lg border p-6'>
        <h3 className='text-foreground text-xl font-semibold'>Technologies</h3>
        <div className='flex flex-wrap gap-3'>
          {skillsData.technologies.map((skill) => (
            <SkillPill
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </>
  )
}
