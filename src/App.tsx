import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Benefits } from './components/Benefits'
import { Testimonials } from './components/Testimonials'
import { CTASection } from './components/CTASection'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Process />
        <Benefits />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
