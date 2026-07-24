import { Star, ExternalLink, TrendingUp, Award, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type Platform = {
  name: string;
  handle: string;
  url: string;
  rating: string;
  reviews: number;
  color: string;
  badge: string;
  stats: { icon: typeof TrendingUp; label: string; value: string }[];
  description: string;
};

const platforms: Platform[] = [
  {
    name: 'Contra',
    handle: '@0xmeghdev',
    url: 'https://contra.com/0xmeghdev',
    rating: '5.0',
    reviews: 2, // Update this with your actual review count!
    color: 'bg-sky-400',
    badge: 'Featured',
    stats: [
      { icon: TrendingUp, label: 'Projects', value: '18' },
      { icon: Users, label: 'Clients', value: '15' },
      { icon: Award, label: 'Avg. Rating', value: '5.0' },
    ],
    description: 'Commission-free freelance work. Featured on Contra for high-quality frontend and product builds.',
  },
];

export default function FreelancePlatforms() {
  const { ref, visible } = useReveal();

  return (
    <section id="platforms" className="relative py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl`}>
          <p className="label-mono text-coral-500">[ Freelance Platforms ]</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            You can hire me here too
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Verified profiles across the top freelance platforms. Reviews, ratings, and track
            records — all public, all earned.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:max-w-2xl md:mx-auto">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className={`reveal ${visible ? 'is-visible' : ''} group relative block border-2 border-ink-900 bg-cream-50 p-6 shadow-[4px_4px_0_0_#0a0a0a] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a] cursor-pointer`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => window.open(p.url, '_blank', 'noopener,noreferrer')}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center border-2 border-ink-900 ${p.color} font-display text-lg font-bold text-ink-900`}>
                    {p.name.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-900">{p.name}</h3>
                    <p className="font-mono text-xs font-bold text-ink-500">{p.handle}</p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-ink-400 transition-colors group-hover:text-ink-900" />
              </div>

              {/* Rating + badge */}
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 border-2 border-ink-900 bg-cream-100 px-2.5 py-1">
                  <Star className="h-3.5 w-3.5 fill-coral-500 text-coral-500" />
                  <span className="font-mono text-xs font-bold text-ink-900">{p.rating}</span>
                  <span className="font-mono text-xs text-ink-500">({p.reviews})</span>
                </span>
                <span className={`inline-block border-2 border-ink-900 ${p.color} px-2.5 py-1 font-mono text-xs font-bold text-ink-900`}>
                  {p.badge}
                </span>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {p.stats.map((s) => (
                  <div key={s.label} className="border-2 border-ink-900 bg-cream-100 p-3 text-center">
                    <s.icon className="mx-auto h-4 w-4 text-ink-700" />
                    <div className="mt-1.5 font-display text-sm font-bold text-ink-900">{s.value}</div>
                    <div className="mt-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-ink-600">{p.description}</p>
              {/* Hire Me Button only for Contra */}
              {p.name === 'Contra' && (
                <div className="mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://contra.com/0xmeghdev', '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full flex items-center justify-center gap-2 border-2 border-ink-900 bg-coral-500 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-cream-50 shadow-[3px_3px_0_0_#0a0a0a] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#0a0a0a]"
                  >
                    Hire me on Contra
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
