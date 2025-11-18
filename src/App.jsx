import Hero from './components/Hero'
import FeaturesBar from './components/FeaturesBar'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FinancialControlProcess from './components/FinancialControlProcess'
import AdvisorSection from './components/AdvisorSection'


function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <FeaturesBar />
      <About />
      <WhyChooseUs />
      <Services />
      <Features />
      <FinancialControlProcess />
      <AdvisorSection />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
      
    </div>
  )
}

export default App
