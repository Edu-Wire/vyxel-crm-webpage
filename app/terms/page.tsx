import Navigation from '@/components/landing/Navigation'
import Footer from '@/components/landing/Footer'

export default function TermsConditionsPage() {
  return (
    <div data-scroll-container>
      <Navigation />
      <div data-scroll-section className="min-h-screen py-24" style={{ backgroundColor: '#FDFDFD' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#111827' }}>
            Terms & Conditions
          </h1>
          <div className="prose prose-lg max-w-none" style={{ color: '#4B5563' }}>
            <p className="mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <p className="mb-6 text-lg font-medium" style={{ color: '#111827' }}>
              These Terms & Conditions govern your access and use of the Vyxel CRM platform provided by DIGI WIRE.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              1. Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing or using the Vyxel CRM platform, you agree to comply with these Terms & Conditions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              2. Services
            </h2>
            <p className="mb-6">
              DIGI WIRE provides access to the Vyxel CRM platform, including its web and mobile applications, for managing leads, customer relationships, and business workflows.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              3. User Responsibilities
            </h2>
            <p className="mb-4">
              Users agree to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Provide accurate information</li>
              <li className="mb-2">Use the platform only for lawful business purposes</li>
              <li className="mb-2">Protect login credentials</li>
              <li className="mb-2">Prevent unauthorized access to the system</li>
            </ul>
            
            <p className="mb-4 font-medium">
              Users must not:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Attempt to hack or disrupt the platform</li>
              <li className="mb-2">Upload illegal or harmful content</li>
              <li className="mb-2">Use the software for fraudulent activities</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              4. Intellectual Property
            </h2>
            <p className="mb-4">
              All rights related to the Vyxel CRM platform including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Software</li>
              <li className="mb-2">Source code</li>
              <li className="mb-2">Design</li>
              <li className="mb-2">Branding</li>
              <li className="mb-2">Technology</li>
            </ul>
            <p className="mb-6">
              remain the exclusive property of DIGI WIRE.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              5. Service Availability
            </h2>
            <p className="mb-6">
              DIGI WIRE may update, maintain, or modify the platform periodically to improve performance and features.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              6. Suspension of Access
            </h2>
            <p className="mb-4">
              Access to the platform may be suspended if:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Payment obligations are not fulfilled</li>
              <li className="mb-2">Terms of use are violated</li>
              <li className="mb-2">Illegal activity is detected</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              7. Limitation of Liability
            </h2>
            <p className="mb-4">
              DIGI WIRE shall not be liable for indirect or consequential losses resulting from the use or inability to use the platform.
            </p>
            <p className="mb-6">
              Any liability related to services will be limited to the total fees paid by the client.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              8. Termination
            </h2>
            <p className="mb-6">
              Either party may terminate service with 30 days written notice.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              9. Governing Law
            </h2>
            <p className="mb-6">
              These terms shall be governed by the laws of India.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              Contact Information
            </h2>
            <p className="mb-4">
              For questions about these Terms & Conditions, please contact us at:
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
