import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

export function ExperienceSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Hands-on roles across investigations, SOC operations, and evidence handling.</h2>
          </div>

          <div className="space-y-4">
            {photographerInfo.experience?.map((experience) => (
              <div key={experience.company} className="grid gap-4 rounded-2xl border border-white/10 bg-background/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.12)] lg:grid-cols-[0.55fr_1.45fr]">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <Briefcase className="size-3.5" />
                    {experience.period}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
                  <p className="text-sm text-muted-foreground">{experience.company}</p>
                  <p className="text-sm text-muted-foreground">{experience.location}</p>
                </div>

                <ul className="grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}