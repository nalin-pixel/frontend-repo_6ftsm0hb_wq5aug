import { motion } from 'framer-motion'
import { Bot, Workflow, MonitorSmartphone, Users, Star, MousePointerClick, CalendarDays } from 'lucide-react'

const services = [
  { icon: Bot, title: 'AI Chat', desc: 'Instant answers, qualify leads, capture contact details 24/7.' },
  { icon: Workflow, title: 'Automation', desc: 'Follow-ups, reminders, and tasks triggered automatically.' },
  { icon: MonitorSmartphone, title: 'Smart Websites', desc: 'Fast, conversion-focused sites built to rank and convert.' },
  { icon: Users, title: 'CRM', desc: 'Track leads, conversations, deals, and revenue in one place.' },
  { icon: Star, title: 'Reviews', desc: 'Request reviews and showcase social proof across platforms.' },
  { icon: MousePointerClick, title: 'Funnels', desc: 'Landing pages and offers that turn clicks into customers.' },
  { icon: CalendarDays, title: 'Bookings', desc: 'Calendar systems for instant appointments and confirmations.' },
]

function Services() {
  return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Everything local businesses need to win online</h2>
            <p className="mt-4 text-white/70">Systems that respond first, follow up faster, and convert more leads into bookings.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-[#AE8625]">
              <span className="w-2 h-2 rounded-full bg-[#AE8625]" />
              <span className="text-sm tracking-widest uppercase">AI • Automation • CRM</span>
            </div>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-[#AE8625]/15 text-[#AE8625]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-white font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
