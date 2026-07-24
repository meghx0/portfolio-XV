import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink-900 bg-cream-200 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="font-display text-base font-bold text-ink-900">
            0xMEGH<span className="text-coral-500">.</span>
          </span>
          <span className="font-mono text-[11px] font-bold text-ink-500">— Software Developer</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: 'https://github.com/meghx0', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/meghx0', label: 'LinkedIn' },
            //{ Icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center border-2 border-ink-900 bg-cream-50 text-ink-900 shadow-[2px_2px_0_0_#0a0a0a] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#0a0a0a]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <a
          href="#intro"
          className="group flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-700 transition-colors hover:text-ink-900"
        >
          Back to top
          <span className="flex h-7 w-7 items-center justify-center border-2 border-ink-900 bg-lime-400 shadow-[2px_2px_0_0_#0a0a0a] transition-transform group-hover:-translate-y-0.5">
            <ArrowUp className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>

      <p className="mt-6 text-center font-mono text-[11px] font-bold text-ink-500">
        © {new Date().getFullYear()} 0xMEGH. Built with React & Tailwind.
      </p>
    </footer>
  );
}
