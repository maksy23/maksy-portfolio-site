import GitHub from '@/icons/GitHub'
import LinkedIn from '@/icons/LinkedIn'
import { cn } from '@/lib/utils'

type FooterProps = {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const gitHubUrl = 'https://github.com/maksy23'
  const linkedInUrl = 'https://www.linkedin.com/in/maksym-yakovenko'

  return (
    <footer className={cn('w-full py-6 md:flex md:justify-between', className)}>
      <div>
        <span className='py-2 text-2xl font-medium text-white md:text-3xl lg:text-4xl'>
          maksy.dev
        </span>
        <div className='flex items-center gap-2 py-2'>
          <a
            href={gitHubUrl}
            className='hover:text-muted-foreground text-white transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub
              className='h-6 w-6'
              fillColor='currentColor'
            />
          </a>
          <a
            href={linkedInUrl}
            className='hover:text-muted-foreground text-white transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedIn
              className='h-6 w-6'
              fillColor='currentColor'
            />
          </a>
        </div>
      </div>
      <div className='py-2 text-xs font-medium text-white md:self-end md:text-sm lg:text-base'>
        © 2025 Maksym Yakovenko. All rights reserved.
      </div>
    </footer>
  )
}
