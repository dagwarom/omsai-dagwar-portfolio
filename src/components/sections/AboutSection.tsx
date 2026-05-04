import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">About</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Evidence-driven investigations with clear reporting.</h2>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {photographerInfo.biography.split('\n\n')[0]}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            <span>Read full profile</span>
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {photographerInfo.awards.slice(0, 4).map((award) => (
            <div key={award} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <CheckCircle2 className="size-5 text-emerald-400" />
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{award}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}