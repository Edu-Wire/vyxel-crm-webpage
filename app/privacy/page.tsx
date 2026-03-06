import Navigation from '@/components/landing/Navigation'
import Footer from '@/components/landing/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div data-scroll-container>
      <Navigation />
      <div data-scroll-section className="min-h-screen py-24" style={{ backgroundColor: '#FDFDFD' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#111827' }}>
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none" style={{ color: '#4B5563' }}>
            <p className="mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <p className="mb-6 text-lg font-medium" style={{ color: '#111827' }}>
              At Vyxel CRM, operated by DIGI WIRE, we respect your privacy and are committed to protecting your data. This Privacy Policy explains how we collect, use, and protect information when you use our CRM platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Personal information (name, email address, phone number)</li>
              <li className="mb-2">Business and customer data uploaded to the CRM</li>
              <li className="mb-2">Account credentials and login information</li>
              <li className="mb-2">Usage data such as system activity, analytics, and logs</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              Your information is used for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Providing and maintaining the Vyxel CRM platform</li>
              <li className="mb-2">Managing leads, sales pipelines, and customer interactions</li>
              <li className="mb-2">Technical support and troubleshooting</li>
              <li className="mb-2">Improving platform features and performance</li>
              <li className="mb-2">Compliance with applicable laws and regulations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              3. Data Ownership
            </h2>
            <p className="mb-6">
              All data uploaded or entered into the Vyxel CRM platform remains the property of the client. DIGI WIRE does not claim ownership over any customer or business data stored within the system.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              4. Data Security
            </h2>
            <p className="mb-6">
              We implement reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. However, no system can guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              5. Data Sharing
            </h2>
            <p className="mb-4">
              We do not sell or rent user data. Information may only be shared:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">To provide platform services</li>
              <li className="mb-2">If required by law or government authorities</li>
              <li className="mb-2">With authorized service providers assisting in platform operations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              6. Compliance with Laws
            </h2>
            <p className="mb-4">
              We comply with applicable data protection regulations including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Information Technology Act, 2000</li>
              <li className="mb-2">IT Rules 2011</li>
              <li className="mb-2">Digital Personal Data Protection Act, 2023 (India)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              7. Data Breach Notification
            </h2>
            <p className="mb-6">
              If a data breach occurs that affects user data, we will notify affected clients and take necessary steps to mitigate the impact.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#111827' }}>
              8. Contact Information
            </h2>
            <p className="mb-4">
              For privacy-related questions contact:
            </p>
            <div className="mb-4" style={{ color: '#4B5563' }}>
              <p className="mb-2"><strong>DIGI WIRE</strong></p>
              <p className="mb-2">R-26, G.T.B Complex, New Market</p>
              <p className="mb-2">Bhopal – 462003, Madhya Pradesh, India</p>
              <p className="mb-2">Email: info@digi-wire.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
