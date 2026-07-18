import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/**
 * Sends the contact form using EmailJS.
 * Requires VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and
 * VITE_EMAILJS_PUBLIC_KEY to be set in your .env file (see .env.example).
 * @param {{name: string, email: string, phone?: string, subject: string, message: string}} formValues
 */
export async function sendContactMessage(formValues) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS is not configured. Add your credentials to a .env file — see .env.example.',
    )
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formValues.name,
      from_email: formValues.email,
      phone: formValues.phone || 'Not provided',
      subject: formValues.subject,
      message: formValues.message,
    },
    { publicKey: PUBLIC_KEY },
  )
}
