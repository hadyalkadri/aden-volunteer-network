import Navbar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WhatWeDoSection from './components/WhatWeDoSection'
import ContactAndSocial from './components/ContactAndSocial'
import ProjectSection from './components/ProjectSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      <HeroSection />

      <AboutSection />


      <WhatWeDoSection />

      <ProjectSection />


      {/* <ChevronPattern /> */}

      <ContactAndSocial />


      <Footer />


    </div>
  )
}

export default App