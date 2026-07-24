import { useEffect, useState } from 'react';
import { Menu, X, Square } from 'lucide-react';

const links = [
  { label: 'About', href: '#intro' },
  { label: 'Stack', href: '#stack' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Companies', href: '#companies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b-2 border-ink-900 bg-cream-100/95 backdrop-blur-md'
          : 'border-b-2 border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#intro" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-ink-900 bg-lime-400 shadow-[3px_3px_0_0_#0a0a0a] transition-transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[5px_5px_0_0_#0a0a0a]">
            <Square className="h-4 w-4 fill-ink-900 text-ink-900" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900">
            0x<span className="text-coral-500">Megh</span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-sm px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-700 transition-colors hover:bg-ink-900 hover:text-cream-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://cal.com/meghm/quick-meet"
            className="ml-2 border-2 border-ink-900 bg-coral-500 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-cream-50 shadow-[3px_3px_0_0_#0a0a0a] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#0a0a0a]"
          >
            Book a call
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border-2 border-ink-900 bg-cream-50 text-ink-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t-2 border-ink-900 bg-cream-100 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-700 hover:bg-ink-900 hover:text-cream-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 border-2 border-ink-900 bg-coral-500 px-4 py-2.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-cream-50"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
