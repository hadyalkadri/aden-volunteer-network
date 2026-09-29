import Navbar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactAndSocial from './components/ContactAndSocial'

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ProjectSection />



      {/* <ChevronPattern /> */}

      <ContactAndSocial />


      <Footer />


    </div>
  )
}

export default App