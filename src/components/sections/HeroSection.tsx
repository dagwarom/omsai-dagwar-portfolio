import { motion } from 'framer-motion';
import { ArrowRight, FileDown, ShieldCheck, Search, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

const stats = [
  { icon: Search, label: '15+ Investigations Led' },
  { icon: Bug, label: '500+ Incidents Triaged' },
  { icon: ShieldCheck, label: '100+ ITD Operations Supported' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,hsl(225_25%_6%),hsl(225_25%_4%))]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div
          className="max-w-3xl space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-emerald-400/90">DFIR · Threat Hunting · Malware Analysis</p>
            <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              {photographerInfo.name}
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-white/85 sm:text-2xl">
              {photographerInfo.tagline}
            </p>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {photographerInfo.heroIntroduction}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="size-4" />
            </Link>
            {photographerInfo.resumeUrl && (
              <a
                href={photographerInfo.resumeUrl}
                download="Omsai_Dagwar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                <FileDown className="size-4" />
                Download CV
              </a>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <Icon className="mb-4 size-5 text-emerald-400" />
                <p className="text-sm leading-6 text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-emerald-400/10 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
              <img
                src={photographerInfo.portraitImage}
                alt={`${photographerInfo.name} portrait`}
                className="h-[420px] w-full object-cover object-top sm:h-[520px]"
              />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Availability</p>
                <p className="mt-3 text-base leading-7 text-foreground">{photographerInfo.availability}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Location</p>
                <p className="mt-3 text-base leading-7 text-foreground">{photographerInfo.location}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Open to remote and hybrid opportunities.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}