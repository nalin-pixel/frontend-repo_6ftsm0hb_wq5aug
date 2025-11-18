import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import Comparison from './components/Comparison'
import Visuals from './components/Visuals'
import CTA from './components/CTA'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section id="services"><Services /></section>
        <Packages />
        <Comparison />
        <Visuals />
        <CTA />
      </main>
      {/* Gold divider accents */}
      <div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#AE8625] to-transparent opacity-70" />
    </div>
  )
}

export default App
