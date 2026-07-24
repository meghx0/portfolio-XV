import { useReveal } from '../hooks/useReveal';

const categories = [
  {
    title: 'Frontend',
    color: 'bg-lime-400',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Zustand'],
  },
  {
    title: 'Backend',
    color: 'bg-sky-400',
    items: ['Node.js', 'Express', 'Python', 'Django', 'REST', 'GraphQL'],
  },
  {
    title: 'Database',
    color: 'bg-coral-500',
    items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'Prisma', 'Drizzle'],
  },
  {
    title: 'Tooling',
    color: 'bg-sun-400',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Figma', 'Git'],
  },
];

export default function TechStack() {
  const { ref, visible } = useReveal();

  return (
    <section id="stack" className="relative py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl`}>
          <p className="label-mono text-coral-500">[ Tech Stack ]</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Tools I use to ship
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            I pick the right tool for the job. These are the ones I reach for most.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal ${visible ? 'is-visible' : ''} border-2 border-ink-900 bg-cream-50 p-6 shadow-[4px_4px_0_0_#0a0a0a] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a]`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={`${cat.color} inline-block border-2 border-ink-900 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-ink-900`}>
                {cat.title}
              </span>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="border-2 border-ink-900 bg-cream-100 px-3 py-1.5 font-mono text-xs font-bold text-ink-800 transition-colors hover:bg-lime-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
