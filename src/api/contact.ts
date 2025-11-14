import type { ContactFormData } from '@/components/contact-form/index'

export async function submitContactForm(data: ContactFormData) {
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('message', data.message)

  // TODO: Replace with your Formspree form ID
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to send message')
  }

  return response.json()
}
