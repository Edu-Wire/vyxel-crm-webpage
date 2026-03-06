import InquiryForm from '@/components/landing/InquiryForm'
import Navigation from '@/components/landing/Navigation'
import Footer from '@/components/landing/Footer'

export default function InquiryPage() {
  return (
    <div data-scroll-container>
      <Navigation />
      <div data-scroll-section>
        <InquiryForm />
      </div>
      <Footer />
    </div>
  )
}
