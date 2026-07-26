import { Calendar, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const perks = [
  'Free 30-minute discovery call',
  'Project scope + timeline in 48 hours',
  'Fixed-price or hourly — your call',
  'Direct communication, no middlemen',
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-lime-400/30 dark:bg-lime-400/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 bg-coral-500/20 dark:bg-coral-500/15 blur-[100px]" />

      <div ref={ref} className="relative mx-auto max-w-4xl px-5">
        <div
          className={`reveal ${visible ? 'is-visible' : ''} border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 p-8 text-center shadow-[6px_6px_0_0_#0a0a0a] dark:shadow-[6px_6px_0_0_#fbf8f0] sm:p-12`}
        >
          <span className="inline-flex items-center gap-2 border-2 border-ink-900 dark:border-cream-100 bg-lime-400 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-900 shadow-[3px_3px_0_0_#0a0a0a] dark:shadow-[3px_3px_0_0_#fbf8f0]">
            Let us build something
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-cream-100 sm:text-5xl">
            Ready to ship your
            <br />
            next product?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-ink-600 dark:text-cream-300">
            Book a free intro call and we will talk through your project, timeline, and whether
            I am the right fit. No pressure, no sales pitch.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://cal.com/meghm/quick-meet"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://cal.com/meghm/quick-meet', '_blank', 'noopener,noreferrer');
              }}
              className="group inline-flex w-full items-center justify-center gap-2 border-2 border-ink-900 dark:border-cream-100 bg-coral-500 px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-cream-50 dark:text-ink-900 shadow-[4px_4px_0_0_#0a0a0a] dark:shadow-[4px_4px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a] dark:hover:shadow-[6px_6px_0_0_#fbf8f0] sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              Book a call on Cal.com
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:business.megh.me@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:business.megh.me@gmail.com';
              }}
              className="inline-flex w-full items-center justify-center gap-2 border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-ink-900 dark:text-cream-100 shadow-[4px_4px_0_0_#0a0a0a] dark:shadow-[4px_4px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a] dark:hover:shadow-[6px_6px_0_0_#fbf8f0] sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </div>

          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
            {perks.map((p) => (
              <li key={p} className="flex items-center justify-center gap-2 font-mono text-[11px] font-bold text-ink-600 dark:text-cream-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-coral-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
