import { useState } from 'react'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { validateContactForm } from '@/utils/validation'
import { sendContactMessage } from '@/services/emailService'
import { cn } from '@/utils/cn'

const initialValues = { name: '', email: '', phone: '', subject: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    try {
      await sendContactMessage(values)
      setStatus('success')
      setStatusMessage("Message sent — we'll get back to you shortly.")
      setValues(initialValues)
    } catch (error) {
      setStatus('error')
      setStatusMessage(error?.message || 'Failed to send message.')
    }
  }

  const inputClass = (name) =>
    cn(
      'w-full rounded-input border-2 bg-white/50 px-6 py-4 text-[15px] text-ink placeholder:text-ink-muted/30 focus:outline-none transition-all duration-300',
      errors[name] ? 'border-red-400 focus:border-red-500' : 'border-surface focus:border-primary',
    )

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-card p-10 lg:p-14 flex flex-col gap-8 bg-white/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="name" className="text-[13px] font-bold uppercase tracking-widest text-ink px-1">Full Name</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass('name')}
          />
          {errors.name && <p className="text-[12px] text-red-500 px-1">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="email" className="text-[13px] font-bold uppercase tracking-widest text-ink px-1">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={inputClass('email')}
          />
          {errors.email && <p className="text-[12px] text-red-500 px-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="phone" className="text-[13px] font-bold uppercase tracking-widest text-ink px-1">Phone Number</label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            className={inputClass('phone')}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="subject" className="text-[13px] font-bold uppercase tracking-widest text-ink px-1">Subject</label>
          <input
            id="subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            className={inputClass('subject')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="message" className="text-[13px] font-bold uppercase tracking-widest text-ink px-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className={cn(inputClass('message'), 'resize-none')}
        />
        {errors.message && <p className="text-[12px] text-red-500 px-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-white font-heading font-bold py-5 rounded-input shadow-premium hover:bg-primary-hover hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Sending...
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>

      {status === 'success' && (
        <p className="flex items-center gap-3 text-[14px] text-primary font-bold bg-primary/10 p-4 rounded-xl">
          <CheckCircle size={18} /> {statusMessage}
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-3 text-[14px] text-red-500 font-bold bg-red-50 p-4 rounded-xl">
          <AlertCircle size={18} /> {statusMessage}
        </p>
      )}
    </form>
  )
}
