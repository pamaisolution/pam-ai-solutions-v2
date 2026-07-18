import LegalLayout from '@/components/common/LegalLayout'
import { SITE } from '@/data/site'

export default function LegalPrivacy() {
  return (
    <LegalLayout title="Privacy Policy" path="/privacy-policy" updated="July 2026">
      <section>
        <h2>1. Information we collect</h2>
        <p>
          When you contact us through our website, book a consultation, or subscribe to our
          newsletter, we collect the information you provide directly — such as your name, email
          address, phone number, and any project details you share with us.
        </p>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <ul>
          <li>To respond to enquiries and provide the services you request.</li>
          <li>To send project updates, invoices, and — with consent — newsletter updates.</li>
          <li>To improve our website and understand how visitors use it.</li>
        </ul>
      </section>

      <section>
        <h2>3. How we protect your data</h2>
        <p>
          We use industry-standard safeguards to protect the information you share with us and do
          not sell your personal data to third parties. Access to client information is limited to
          team members directly involved in your project.
        </p>
      </section>

      <section>
        <h2>4. Third-party services</h2>
        <p>
          Our contact form uses EmailJS to deliver messages, and our site may embed third-party
          services such as Google Maps and WhatsApp. These services operate under their own
          privacy policies.
        </p>
      </section>

      <section>
        <h2>5. Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data at any time
          by emailing us at {SITE.email}.
        </p>
      </section>

      <section>
        <h2>6. Contact us</h2>
        <p>
          Questions about this policy can be sent to {SITE.email} or {SITE.phone}.
        </p>
      </section>
    </LegalLayout>
  )
}
