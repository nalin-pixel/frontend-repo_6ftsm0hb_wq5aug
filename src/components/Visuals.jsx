import { motion } from 'framer-motion'

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h4 className="text-white/90 font-semibold mb-3">{title}</h4>
      <div className="rounded-xl bg-black/40 border border-white/10 p-4 min-h-[140px] flex items-center justify-center text-white/70 text-sm">
        {children}
      </div>
    </div>
  )
}

function Visuals() {
  return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">How it looks in action</h2>
          <p className="mt-3 text-white/70">Modern UI with AI chat, dashboards, bookings, and flows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="AI Chat Bubbles">
            <div className="space-y-2 w-full max-w-xs">
              <div className="bg-white/10 rounded-2xl px-3 py-2 w-4/5 ml-auto">Hi! Need a quote?</div>
              <div className="bg-[#AE8625]/20 text-[#AE8625] rounded-2xl px-3 py-2 w-5/6">Yes – for a roof repair.</div>
              <div className="bg-white/10 rounded-2xl px-3 py-2 w-4/6 ml-auto">Great! What date suits you?</div>
            </div>
          </Card>
          <Card title="Dashboard Snapshot">
            <div className="w-full">
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <div className="text-white/60">Leads</div>
                  <div className="text-white text-xl font-bold">124</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <div className="text-white/60">Bookings</div>
                  <div className="text-white text-xl font-bold">76</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <div className="text-white/60">Reviews</div>
                  <div className="text-white text-xl font-bold">4.9★</div>
                </div>
              </div>
            </div>
          </Card>
          <Card title="Booking Calendar">
            <div className="grid grid-cols-7 gap-2 text-center text-xs w-full">
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={i} className={`rounded-lg p-2 ${i % 7 === 0 ? 'bg-[#AE8625]/30 text-[#AE8625]' : 'bg-white/10 text-white/70'}`}>{i + 1}</div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card title="Automation Flow">
            <div className="flex items-center justify-between w-full gap-3">
              <div className="rounded-lg bg-white/10 px-3 py-2">Lead Created</div>
              <div className="w-10 h-1 bg-[#AE8625]/50 rounded-full" />
              <div className="rounded-lg bg-white/10 px-3 py-2">Send SMS</div>
              <div className="w-10 h-1 bg-[#AE8625]/50 rounded-full" />
              <div className="rounded-lg bg-white/10 px-3 py-2">Create Task</div>
            </div>
          </Card>
          <Card title="Funnel Preview">
            <div className="w-full space-y-2">
              <div className="h-4 bg-white/10 rounded" />
              <div className="h-8 bg-[#AE8625]/30 rounded" />
              <div className="h-3 bg-white/10 rounded" />
              <div className="h-3 bg-white/10 rounded w-2/3" />
              <div className="h-10 bg-black/60 rounded border border-white/10" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Visuals
