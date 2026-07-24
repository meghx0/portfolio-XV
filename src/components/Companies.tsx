import { useReveal } from '../hooks/useReveal';

const companies = [
  { name: 'Ascend Coffee', logo: '/logos/Ascendcoffee.svg', url: 'https://www.ascendroasters.com/' },
  { name: 'Superkalam', logo: '/logos/Superkalam.svg', url: 'https://superkalam.com/' },
  { name: 'Hornet', logo: '/logos/hornet.svg', url: '#' },
  { name: 'Mindweb Ventures', logo: '/logos/mindwebventures.svg', url: 'http://mindwebs.org/' },
  { name: 'Pre Dev', logo: '/logos/pre_dev.svg', url: 'https://pre.dev/' },
  { name: 'Rocket Monk', logo: '/logos/rocketmonk.svg', url: 'https://rocketmonk.io/' },
  { name: 'WFP', logo: '/logos/wfp.svg', url: 'https://wangshengfp.org/' },
];

export default function Companies() {
  const { ref, visible } = useReveal();
  const row = [...companies, ...companies];

  return (
    <section id="companies" className="relative overflow-hidden py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="label-mono text-coral-500">[ Trusted by ]</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Companies I have worked with
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600">
            From early-stage startups to established teams — fintech, SaaS, health, and creator economy.
          </p>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-cream-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-cream-100 to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {row.map((company, i) => (
            <a
              key={i}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-24 w-52 shrink-0 items-center justify-center border-2 border-ink-900 bg-cream-50 shadow-[3px_3px_0_0_#0a0a0a] p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#0a0a0a] transition-all overflow-hidden"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-h-full max-w-full object-contain group-hover:opacity-50 transition-opacity"
              />
              <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-ink-900 opacity-0 group-hover:opacity-100 transition-opacity">
                {company.name}
              </span>
            </a>
          ))}
        </div>
      </div>


    </section>
  );
}
