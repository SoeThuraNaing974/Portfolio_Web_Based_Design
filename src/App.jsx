import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Volunteering from './components/Volunteering.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

function App() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
