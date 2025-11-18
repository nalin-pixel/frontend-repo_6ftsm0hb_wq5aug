import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#AE8625]" />
          <span className="font-semibold text-white tracking-tight">Thrive Online</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#packages" className="hover:text-white">Packages</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#enquire" className="hover:text-white">Enquire</a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold text-black bg-[#AE8625] hover:brightness-110 transition">Get Started</a>
        </nav>
        <button className="md:hidden text-white/80">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
