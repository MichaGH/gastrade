const STATS = [
  { num: '2000', label: 'Rok založenia spoločnosti' },
  { num: '25+', label: 'Rokov skúseností v plynárenstve a\u00a0priemysle' },
  { num: '30+', label: 'Zastupovaných výrobcov a\u00a0značiek' },
  { num: '7', label: 'Špecializovaných partnerských stránok' },
]

export default function NumbersSection() {
  return (
    <section className="bg-brand text-white py-20">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="grid grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.num}
              className={[
                'pl-6',
                i === 0 ? 'pl-0 border-l-0' : 'border-l border-white/[0.18]',
              ].join(' ')}
            >
              <div className="font-semibold text-[56px] leading-none tracking-[-0.03em]">
                {stat.num}
              </div>
              <div className="text-[14px] opacity-[0.78] mt-3 max-w-[220px] leading-[1.4]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
