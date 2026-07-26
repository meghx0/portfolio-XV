import { useEffect, useState } from 'react';
import { Menu, X, Square, Sun, Moon } from 'lucide-react';

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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b-2 border-ink-900 dark:border-cream-100 bg-cream-100/95 dark:bg-ink-900/95 backdrop-blur-md'
          : 'border-b-2 border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-full items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12 xl:px-16">
        <a href="#intro" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-ink-900 dark:border-cream-100 bg-lime-400 shadow-[3px_3px_0_0_#0a0a0a] dark:shadow-[3px_3px_0_0_#fbf8f0] transition-transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[5px_5px_0_0_#0a0a0a] dark:group-hover:shadow-[5px_5px_0_0_#fbf8f0]">
            <Square className="h-4 w-4 fill-ink-900 text-ink-900" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900 dark:text-cream-100">
            0x<span className="text-coral-500">Megh</span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-sm px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-700 dark:text-cream-300 transition-colors hover:bg-ink-900 hover:text-cream-50 dark:hover:bg-cream-100 dark:hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 text-ink-900 dark:text-cream-100 shadow-[3px_3px_0_0_#0a0a0a] dark:shadow-[3px_3px_0_0_#fbf8f0] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_0_#0a0a0a] dark:hover:shadow-[4px_4px_0_0_#fbf8f0]"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="https://cal.com/meghm/quick-meet"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://cal.com/meghm/quick-meet', '_blank', 'noopener,noreferrer');
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink-900 dark:border-cream-100 bg-coral-500 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-cream-50 dark:text-ink-900 shadow-[3px_3px_0_0_#0a0a0a] dark:shadow-[3px_3px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#0a0a0a] dark:hover:shadow-[5px_5px_0_0_#fbf8f0]"
          >
            Book a call
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 text-ink-900 dark:text-cream-100"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 text-ink-900 dark:text-cream-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-2 border-ink-900 dark:border-cream-100 bg-cream-100 dark:bg-ink-900 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-700 dark:text-cream-300 hover:bg-ink-900 hover:text-cream-50 dark:hover:bg-cream-100 dark:hover:text-ink-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 border-2 border-ink-900 dark:border-cream-100 bg-coral-500 px-4 py-2.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-cream-50 dark:text-ink-900"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
