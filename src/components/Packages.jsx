import { motion } from 'framer-motion'
import { Rocket, TrendingUp, Layers } from 'lucide-react'

const tiers = [
  {
    name: 'Kickstart',
    icon: Rocket,
    price: 'For new businesses',
    features: [
      'Smart 1-page website',
      'AI chat assistant',
      'Lead capture + email alerts',
      'Basic booking form',
      'Google reviews embed',
    ],
  },
  {
    name: 'Elevate',
    icon: TrendingUp,
    price: 'Our most popular',
    features: [
      'Multi-page website',
      'AI chat + automations',
      'CRM + pipeline',
      'Calendar booking',
      'Review request system',
      'Lead nurture emails/SMS',
    ],
    highlight: true,
  },
  {
    name: 'Scale',
    icon: Layers,
    price: 'For growing teams',
    features: [
      'Sales funnels + landing pages',
      'Advanced automations',
      'Multi-location CRM',
      'Team inbox + SLA',
      'Reporting dashboard',
      'Ads + tracking setup',
    ],
  },
]

function Packages() {
  return (
    <section id="packages" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">Packages that grow with you</h2>
          <p className="mt-3 text-black/70">Choose a plan that fits your stage. Upgrade any time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon
            return (
              <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className={`rounded-3xl border p-6 md:p-8 shadow-sm ${tier.highlight ? 'bg-black text-white border-black' : 'bg-white text-black border-black/10'}`}>
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-xl ${tier.highlight ? 'bg-white/10 text-[#AE8625]' : 'bg-black/5 text-black'}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>
                <p className={`mt-2 ${tier.highlight ? 'text-white/70' : 'text-black/60'}`}>{tier.price}</p>
                <div className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className={`mt-1 w-2.5 h-2.5 rounded-full ${tier.highlight ? 'bg-[#AE8625]' : 'bg-black/20'}`} />
                      <p className="text-sm leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a href="#enquire" className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold transition ${tier.highlight ? 'bg-[#AE8625] text-black hover:brightness-110' : 'bg-black text-white hover:bg-black/90'}`}>
                    Choose {tier.name}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Packages
