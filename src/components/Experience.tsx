import { Briefcase, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: 'Pangea',
    title: 'Fullstack Developer',
    period: 'Mar 2025 - Present',
    location: 'US,Remote',
    summary:
      'Product and AI service firm',
    highlights: [
      'Worked on a product that helps users to learn new skills and build daily discipline.',
      'Implemented features like user authentication, profile management, and daily challenge tracking.',
      'Implemented AI model to provide personalized learning experiences.',
    ],
  },
  {
    company: 'Inside',
    title: 'Frontend Developer',
    period: 'Feb 2025 - Jan 2026',
    location: 'US,Remote',
    summary:
      'It is a Personal AI Mentor that teaches, instantly evaluates Handwritten Answers & builds Daily Discipline, and it is backed by YCombinators and google for startups.',
    highlights: [
      'Developed React frontend with Vite, integrating Golang backend for seamless functionality alongside the teamleads.',
      'Created reusable React components for scalable and efficient development.',
      'Integrated Firebase Authentication, Analytics, and Push Notifications for secure user login, real-time data syncing, and customer engagement.',
      'Implemented APIs and backend services in line with design specifications using Golang (very minimal).',
    ],
  },
  {
    company: 'Superkalam',
    title: 'Software Engineer 1',
    period: 'Jul 2024 - Jan 2025',
    location: 'Bangalore, Remote',
    summary:
      'It is a Personal AI Mentor that teaches, instantly evaluates Handwritten Answers & builds Daily Discipline, and it is backed by YCombinators and google for startups.',
    highlights: [
      'Developed React frontend with Vite, integrating Golang backend for seamless functionality alongside the teamleads.',
      'Created reusable React components for scalable and efficient development.',
      'Integrated Firebase Authentication, Analytics, and Push Notifications for secure user login, real-time data syncing, and customer engagement.',
      'Implemented APIs and backend services in line with design specifications using Golang (very minimal).',
    ],
  },
  {
    company: 'Ascend Roasters',
    title: 'Frontend Developer',
    period: 'Dec 2023 - May 2024',
    location: 'Remote',
    summary:
      'This is a US based local coffee roasting and selling site made with shopify.',
    highlights: [
      'Improved the performance and visuals of Next.js-based full-Stack website that boosted user retention of the site.',
      'Eliminated 100% manual updates in Next.js-based Full Stack app by integrating a CMS',
    ],
  },
  {
    company: 'WFP',
    title: 'Developer Member',
    period: 'Jan 2023 - Jun 2023',
    location: 'Remote',
    summary:
      'It is a popular game community with more than 200k member in discord along with they have online presence in multiple platforms.',
    highlights: [
      'Improved user experience and retention by significant amount through UI issue resolution and enhanced responsiveness using TailwindCSS.',
      'Enhanced the ticketing bot for WFP discord server of 200k+ members, with slash commands, real-time interactions, and anutomated channel creation for streamlined user support using discord.js lib.',
      'Worked on data handling and automating calculation for teams and characters of the game using Google sheet API, Javascript and GCP.',
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="relative py-20">
      <div ref={ref} className="mx-auto max-w-4xl px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl`}>
          <p className="label-mono text-coral-500">[ Experience ]</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 dark:text-cream-100 sm:text-5xl">
            A track record of shipping
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-cream-300">
            Six years across product teams and freelance engagements. Here is the path.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-5 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-ink-400 dark:border-cream-400" />

          <div className="space-y-6">
            {roles.map((r, i) => (
              <div
                key={r.company}
                className={`reveal ${visible ? 'is-visible' : ''} relative pl-16`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute left-0 top-1.5 flex h-11 w-11 items-center justify-center border-2 border-ink-900 dark:border-cream-100 bg-lime-400 shadow-[3px_3px_0_0_#0a0a0a] dark:shadow-[3px_3px_0_0_#fbf8f0]">
                  <Briefcase className="h-5 w-5 text-ink-900" />
                </div>

                <div className="border-2 border-ink-900 dark:border-cream-100 bg-cream-50 dark:bg-ink-800 p-6 shadow-[4px_4px_0_0_#0a0a0a] dark:shadow-[4px_4px_0_0_#fbf8f0] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#0a0a0a] dark:hover:shadow-[6px_6px_0_0_#fbf8f0]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-900 dark:text-cream-100">
                        {r.title}
                      </h3>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-coral-500">
                        {r.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block border-2 border-ink-900 dark:border-cream-100 bg-sun-400 px-2.5 py-1 font-mono text-xs font-bold text-ink-900">
                        {r.period}
                      </span>
                      <p className="mt-1.5 flex items-center justify-end gap-1 font-mono text-[11px] font-bold text-ink-500 dark:text-cream-400">
                        <MapPin className="h-3 w-3" />
                        {r.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-ink-600 dark:text-cream-300">{r.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-cream-200">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 border-2 border-ink-900 dark:border-cream-100 bg-coral-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
