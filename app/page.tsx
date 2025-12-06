import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import UserExpectations from '@/components/UserExpectations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <UserExpectations />
      <Footer />
    </main>
  )
}

