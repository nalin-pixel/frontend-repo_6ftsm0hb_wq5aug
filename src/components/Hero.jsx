import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4">Thrive Online</span>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-white">
                  Smart Websites That Put Your Business Ahead
                </h1>
                <p className="mt-5 text-lg md:text-xl text-white/70 max-w-xl">
                  We build high-converting websites connected to AI, automation, and CRM systems so you capture more leads, respond instantly, and win more customers.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#packages" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-black bg-[#AE8625] hover:brightness-110 transition shadow-[0_10px_30px_rgba(174,134,37,0.35)]">
                    Explore Packages
                  </a>
                  <a href="#enquire" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white/90 border border-white/15 hover:bg-white/10 transition">
                    Enquire Now
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="text-white/80"><span className="text-white font-semibold">78%</span> of buyers choose the first to respond</div>
                  <div className="h-4 w-px bg-white/20" />
                  <div className="text-white/60">Be first with AI + automation</div>
                </div>
              </motion.div>
            </div>
            <div className="relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10">
              <div className="absolute inset-0">
                <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* Soft edge gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            </div>
          </div>
        </div>
      </div>
      {/* Gold glow */}
      <div className="pointer-events-none absolute -top-20 right-0 w-[60vw] h-[60vw] rounded-full bg-[#AE8625]/10 blur-3xl" />
    </section>
  )
}

export default Hero
