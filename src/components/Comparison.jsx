import { motion } from 'framer-motion'

const rows = [
  { label: 'Pages', kickstart: '1', elevate: 'Up to 5', scale: 'Unlimited' },
  { label: 'AI Chat Assistant', kickstart: '✓', elevate: '✓', scale: '✓' },
  { label: 'Automations', kickstart: 'Basic', elevate: 'Standard', scale: 'Advanced' },
  { label: 'CRM & Pipeline', kickstart: '—', elevate: '✓', scale: '✓ (multi-location)' },
  { label: 'Calendar Booking', kickstart: '—', elevate: '✓', scale: '✓ + Team' },
  { label: 'Review System', kickstart: 'Embed', elevate: 'Request + Automate', scale: 'Advanced + Aggregation' },
  { label: 'Funnels/Landing Pages', kickstart: '—', elevate: '1-2', scale: 'Unlimited' },
  { label: 'Reporting', kickstart: '—', elevate: 'Basic', scale: 'Full Dashboard' },
]

function Comparison() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">Compare what you get</h2>
          <p className="mt-2 text-black/70">Clear, transparent inclusions across every stage.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-4 px-4 text-sm font-semibold">Feature</th>
                <th className="py-4 px-4 text-sm font-semibold">Kickstart</th>
                <th className="py-4 px-4 text-sm font-semibold">Elevate</th>
                <th className="py-4 px-4 text-sm font-semibold">Scale</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr key={r.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className={i % 2 === 0 ? 'bg-white' : 'bg-black/[0.02]'}>
                  <td className="py-4 px-4 text-black font-medium">{r.label}</td>
                  <td className="py-4 px-4 text-black/70">{r.kickstart}</td>
                  <td className="py-4 px-4 text-black/70">{r.elevate}</td>
                  <td className="py-4 px-4 text-black/70">{r.scale}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Comparison
