import { Mail } from 'lucide-react'

import ContactForm from '@/components/contact-form/index'
import LinkedIn from '@/icons/LinkedIn'

export default function Contact() {
  const linkedInUrl = 'https://www.linkedin.com/in/maksym-yakovenko'
  // TODO: Replace with your email
  const email = 'your.email@example.com'

  return (
    <div className='mx-auto max-w-2xl space-y-12 py-12'>
      {/* Header */}
      <section className='space-y-4'>
        <h1 className='text-foreground text-4xl font-bold md:text-5xl'>Get in touch</h1>
        <p className='text-muted-foreground text-lg'>
          Have a project in mind or want to chat? Drop me a message and I'll get back to you as soon
          as possible!
        </p>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Alternative Contact Methods */}
      <div className='border-border space-y-4 border-t pt-8'>
        <p className='text-muted-foreground text-sm'>Or reach out directly:</p>

        <div className='flex flex-col gap-3'>
          <a
            href={`mailto:${email}`}
            className='text-muted-foreground hover:text-foreground group flex items-center gap-3 transition-colors'
          >
            <Mail className='group-hover:text-primary h-5 w-5 transition-colors' />
            <span>{email}</span>
          </a>
          <a
            href={linkedInUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground group flex items-center gap-3 transition-colors'
          >
            <LinkedIn className='h-5 w-5' />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
