import { Layout, Server, Smartphone, Gauge, Search, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  { Icon: Layout, title: 'Web App Development', desc: 'End-to-end product builds — from Figma to production. React, Next.js, and modern tooling.', color: 'bg-lime-400' },
  { Icon: Server, title: 'Backend & APIs', desc: 'Scalable REST/GraphQL APIs, database design, auth, and integrations with third-party services.', color: 'bg-sky-400' },
  { Icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform mobile apps with React Native and Expo — one codebase, iOS and Android.', color: 'bg-coral-500' },
  { Icon: Gauge, title: 'Performance Audits', desc: 'Find and fix what is slow. Bundle analysis, render profiling, and Core Web Vitals tuning.', color: 'bg-sun-400' },
  { Icon: Search, title: 'SEO & Analytics', desc: 'Technical SEO setup, structured data, and analytics dashboards that actually get read.', color: 'bg-lime-400' },
  { Icon: ShieldCheck, title: 'Code Reviews', desc: 'Deep-dive reviews of your codebase with actionable feedback on architecture and quality.', color: 'bg-sky-400' },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="relative py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl`}>
          <p className="label-mono text-coral-500">[ Services ]</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            How I can help
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Flexible engagements — project-based, retainer, or embedded with your team.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal ${visible ? 'is-visible' : ''} border-2 border-ink-900 bg-cream-50 p-6 shadow-[4px_4px_0_0_#0a0a0a] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a]`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className={`flex h-12 w-12 items-center justify-center border-2 border-ink-900 ${s.color} shadow-[3px_3px_0_0_#0a0a0a]`}>
                <s.Icon className="h-5 w-5 text-ink-900" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
