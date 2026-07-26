import { Star, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote:
      "Megh shipped our MVP in 5 weeks. The code quality was so clean our in-house team picked it up with zero onboarding. Genuinely the best contractor we have worked with.",
    name: 'Michael Adebiyi',
    role: 'Manager, Uniwell(pangea)',
    color: 'bg-lime-400',
  },
  {
    quote:
      "We hired Megh to fix a slow, bloated dashboard. He cut load times by 70% and left us with a component library we still use daily. Worth every penny.",
    name: 'Ammar Subhaib Tayyab',
    role: 'Maintainer, WFP',
    color: 'bg-sky-400',
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="label-mono text-coral-500">[ Testimonials ]</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 dark:text-cream-100 sm:text-5xl">
            What clients say
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:max-w-4xl md:mx-auto">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal ${visible ? 'is-visible' : ''} flex flex-col border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 p-6 shadow-[4px_4px_0_0_#0a0a0a] dark:shadow-[4px_4px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a] dark:hover:shadow-[6px_6px_0_0_#fbf8f0]`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-ink-300 dark:text-cream-400" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-coral-500 text-coral-500" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700 dark:text-cream-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t-2 border-ink-900 dark:border-cream-100 pt-4">
                <span className={`flex h-10 w-10 items-center justify-center border-2 border-ink-900 dark:border-cream-100 ${t.color} font-display text-sm font-bold text-ink-900`}>
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-ink-900 dark:text-cream-100">{t.name}</div>
                  <div className="font-mono text-[11px] font-bold text-ink-500 dark:text-cream-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
