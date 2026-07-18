const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[+]?[0-9\s-]{7,15}$/

export function validateContactForm(values) {
  const errors = {}

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  if (!values.email || !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.phone && !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.subject || values.subject.trim().length < 2) {
    errors.subject = 'Please add a short subject.'
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}
