import ProfilePicture from '@/assets/profile_picture.jpg'
import Skills from '@/components/skills/Skills'
import GitHub from '@/icons/GitHub'
import LinkedIn from '@/icons/LinkedIn'

export default function Home() {
  const gitHubUrl = 'https://github.com/maksy23'
  const linkedInUrl = 'https://www.linkedin.com/in/maksym-yakovenko'

  return (
    <div className='space-y-18 py-8 md:py-12 lg:space-y-24'>
      {/* Hero Section */}
      <section className='gap-8 md:flex md:flex-row md:justify-between md:gap-12'>
        <div className='space-y-6 md:w-2/3'>
          <h1 className='text-foreground text-4xl leading-tight font-bold md:text-5xl lg:text-6xl'>
            From competitive athlete to passionate builder
          </h1>
          <p className='text-muted-foreground text-lg leading-relaxed md:text-xl'>
            Former youth and college soccer player turned software engineer, bringing the same
            dedication from the pitch to code. Crafting software that solves real problems.
          </p>
          <div className='flex items-center gap-4'>
            <a
              href={gitHubUrl}
              className='text-primary hover:text-foreground transition-colors'
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
              className='text-primary hover:text-foreground transition-colors'
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
        <div className='mt-8 flex justify-center md:mt-0 md:w-1/3 md:items-center'>
          <img
            src={ProfilePicture}
            alt='Maksym Yakovenko'
            className='border-border h-48 w-48 rounded-full border-2 object-cover md:h-52 md:w-52 lg:h-80 lg:w-80'
            style={{ objectPosition: 'center 25%' }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className='space-y-6'>
        <h2 className='text-foreground text-3xl font-bold md:text-4xl'>About me</h2>
        <div className='space-y-4'>
          <p className='text-muted-foreground text-base leading-relaxed md:text-lg'>
            A former competitive athlete who brings the same discipline and work ethic to software
            engineering. After working in IT for three years, I discovered my passion for building
            software and completed Red Ventures' Internal Tech Academy bootcamp in 2021, launching
            my career as a software engineer.
          </p>
          <p className='text-muted-foreground text-base leading-relaxed md:text-lg'>
            Since launching my career in 2021, I've worked across diverse industries—from financial
            services and travel to energy marketplaces—building products that serve millions of
            users. I've led frontend migrations from legacy systems to modern tech stacks, developed
            AI-powered features, and delivered solutions across the full stack. Each project has
            expanded my technical toolkit and deepened my understanding of what it takes to ship
            quality software.
          </p>
          <p className='text-muted-foreground text-base leading-relaxed md:text-lg'>
            I have strong expertise in frontend development with React and TypeScript, complemented
            by backend experience with Node.js, Express, and NestJS. I'm actively expanding my
            full-stack capabilities through personal projects and continuous learning. I'm driven by
            solving complex problems, building intuitive user experiences, and working with modern
            tools across the entire stack. Whether it's architecting scalable React components or
            building robust backend APIs, I'm always looking for the next challenge that helps me
            grow as an engineer.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className='space-y-6'>
        <h2 className='text-foreground text-3xl font-bold md:text-4xl'>Skills</h2>
        <Skills />
      </section>
    </div>
  )
}
