import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-dark-textMuted max-w-3xl mx-auto">
              We're a team of developers and friends from University of Ljubljana - Slovenia, Faculty of Computer and Information Science. We want to build the future of
              travel memory management.
            </p>
          </div>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}

