import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import WorksShowcase from './components/WorksShowcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WorksShowcase />
        <Testimonials />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  )
}

export default App
