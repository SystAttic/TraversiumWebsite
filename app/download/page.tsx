import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import DownloadSection from '@/components/DownloadSection'

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <DownloadSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
