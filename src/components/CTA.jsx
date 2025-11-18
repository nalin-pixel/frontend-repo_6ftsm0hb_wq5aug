function CTA() {
  return (
    <section id="enquire" className="relative bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">Ready to put your business ahead?</h2>
        <p className="mt-3 text-black/70">Tell us about your goals and we’ll recommend the perfect setup.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-black bg-[#AE8625] hover:brightness-110 transition shadow-[0_10px_30px_rgba(174,134,37,0.35)]">Book a Discovery Call</a>
          <a href="#" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-black hover:bg-black/90 transition">Get a Proposal</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
