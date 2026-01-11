import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SolutionSection from '@/components/SolutionSection'
import UserExpectations from '@/components/UserExpectations'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SolutionSection />
      <UserExpectations />
      <Footer />
    </main>
  )
}
