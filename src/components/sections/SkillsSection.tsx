import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';

export function SkillsSection() {
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
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Skills</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Tools, frameworks, and workflows built for real investigations.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {photographerInfo.skills?.map((group) => (
              <div key={group.category} className="rounded-2xl border border-white/10 bg-background/70 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.12)]">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}