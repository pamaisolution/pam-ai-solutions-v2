import LegalLayout from '@/components/common/LegalLayout'
import { SITE } from '@/data/site'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" path="/terms" updated="July 2026">
      <section>
        <h2>1. Agreement to terms</h2>
        <p>
          By engaging {SITE.name} for services or using this website, you agree to the terms
          outlined below. If you do not agree, please discontinue use of our website and services.
        </p>
      </section>

      <section>
        <h2>2. Services</h2>
        <p>
          Project scope, timelines and deliverables for any engagement are defined in a separate
          proposal or statement of work agreed upon before work begins. These terms govern general
          use of our website and public-facing content.
        </p>
      </section>

      <section>
        <h2>3. Payments</h2>
        <p>
          Unless otherwise agreed in writing, projects require a deposit before work begins, with
          the remaining balance due upon delivery or per an agreed milestone schedule.
        </p>
      </section>

      <section>
        <h2>4. Intellectual property</h2>
        <p>
          Upon full payment, clients receive ownership of custom deliverables created specifically
          for their project. Reusable internal tools, frameworks, and pre-existing code libraries
          remain the property of {SITE.name}.
        </p>
      </section>

      <section>
        <h2>5. Limitation of liability</h2>
        <p>
          {SITE.name} is not liable for indirect, incidental, or consequential damages arising from
          the use of delivered software, to the extent permitted by law.
        </p>
      </section>

      <section>
        <h2>6. Changes to these terms</h2>
        <p>
          We may update these terms periodically. Continued use of our website after changes
          constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>Reach us at {SITE.email} or {SITE.phone} with any questions about these terms.</p>
      </section>
    </LegalLayout>
  )
}
