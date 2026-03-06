import Navigation from '@/components/landing/Navigation'
import Footer from '@/components/landing/Footer'

export default function RefundPolicyPage() {
  return (
    <div data-scroll-container>
      <Navigation />
      <div data-scroll-section className="min-h-screen py-24" style={{ backgroundColor: '#FDFDFD' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#111827' }}>
            Refund Policy
          </h1>
          <div className="prose prose-lg max-w-none" style={{ color: '#4B5563' }}>
            <p className="mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <p className="mb-6 text-lg font-medium" style={{ color: '#111827' }}>
              This Refund Policy applies to the subscription and services of Vyxel CRM provided by DIGI WIRE.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              1. Non-Refundable Payments
            </h2>
            <p className="mb-4">
              All payments made for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">CRM subscription</li>
              <li className="mb-2">Implementation</li>
              <li className="mb-2">Customization</li>
              <li className="mb-2">Setup</li>
              <li className="mb-2">Training</li>
            </ul>
            <p className="mb-6">
              are non-refundable once the service has been initiated.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              2. Early Termination
            </h2>
            <p className="mb-6">
              If the client terminates the service before the end of the subscription period, any fees already paid will not be refunded.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              3. Service Suspension
            </h2>
            <p className="mb-4">
              DIGI WIRE may suspend access to the platform if payments are delayed beyond the invoice due date.
            </p>
            <p className="mb-6">
              Service access will be restored once the outstanding payment is cleared.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              4. Additional Services
            </h2>
            <p className="mb-4">
              Custom features, integrations, or additional development work are billed separately and are not eligible for refunds once work has commenced.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              5. Exceptions
            </h2>
            <p className="mb-6">
              Refunds may only be issued if both parties mutually agree in writing.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              Contact Information
            </h2>
            <p className="mb-4">
              For refund requests or questions about this policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: info@digi-wire.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
