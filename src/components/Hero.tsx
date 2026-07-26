import { Calendar, ArrowRight, Github, Linkedin, Twitter, Zap } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '3', label: 'Years', color: 'bg-lime-400' },
  { value: '20+', label: 'Projects', color: 'bg-sky-400' },
  { value: '12', label: 'Clients', color: 'bg-coral-500' },
  { value: '90%', label: 'On-time', color: 'bg-sun-400' },
];

export default function Hero() {
  const { ref, visible } = useReveal();

  return (
    <section id="intro" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 bg-lime-400/30 dark:bg-lime-400/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 bg-coral-500/20 dark:bg-coral-500/15 blur-[100px]" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`reveal ${visible ? 'is-visible' : ''} inline-flex items-center gap-2 border-2 border-ink-900 dark:border-cream-100 bg-sun-400 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-900 shadow-[3px_3px_0_0_#0a0a0a] dark:shadow-[3px_3px_0_0_#fbf8f0]`}
          >
            <Zap className="h-3.5 w-3.5 fill-ink-900" />
            Available for work — August 2026
          </span>

          <h1
            className={`reveal ${visible ? 'is-visible' : ''} mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 dark:text-cream-100 sm:text-7xl`}
            style={{ transitionDelay: '80ms' }}
          >
            I build fast,
            <br />
            <span className="relative z-10 inline-block mb-2">beautiful</span>
            <br />
            <span className="bg-lime-400 px-2">web products.</span>
          </h1>

          <p
            className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-cream-300`}
            style={{ transitionDelay: '160ms' }}
          >
            I'm <span className="font-bold text-ink-900 dark:text-cream-100">Megh</span> — a full-stack engineer helping startups and founders turn ideas into production-ready
            apps, from pixel-perfect UI to scalable backends.
          </p>

          <div
            className={`reveal ${visible ? 'is-visible' : ''} mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row`}
            style={{ transitionDelay: '240ms' }}
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 border-2 border-ink-900 dark:border-cream-100 bg-coral-500 px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-cream-50 dark:text-ink-900 shadow-[4px_4px_0_0_#0a0a0a] dark:shadow-[4px_4px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a] dark:hover:shadow-[6px_6px_0_0_#fbf8f0] sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              Book a free intro call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/meghx0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/meghx0', '_blank', 'noopener,noreferrer');
              }}
              className="inline-flex w-full items-center justify-center gap-2 border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-ink-900 dark:text-cream-100 shadow-[4px_4px_0_0_#0a0a0a] dark:shadow-[4px_4px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a] dark:hover:shadow-[6px_6px_0_0_#fbf8f0] sm:w-auto"
            >
              View my work
            </a>
          </div>

          <div
            className={`reveal ${visible ? 'is-visible' : ''} mt-7 flex items-center justify-center gap-3 flex-wrap`}
            style={{ transitionDelay: '320ms' }}
          >
            {[
              { Icon: Github, href: 'https://github.com/meghx0', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/0xmegh', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(href, '_blank', 'noopener,noreferrer');
                }}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 text-ink-900 dark:text-cream-100 shadow-[3px_3px_0_0_#0a0a0a] dark:shadow-[3px_3px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#0a0a0a] dark:hover:shadow-[5px_5px_0_0_#fbf8f0]"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4`}
          style={{ transitionDelay: '400ms' }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className={`${s.color} border-2 border-ink-900 dark:border-cream-100 p-5 text-center shadow-[4px_4px_0_0_#0a0a0a] dark:shadow-[4px_4px_0_0_#fbf8f0]`}
            >
              <div className="font-display text-3xl font-bold text-ink-900">{s.value}</div>
              <div className="mt-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-700">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
