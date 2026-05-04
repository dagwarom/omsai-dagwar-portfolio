import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="grid gap-6 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.2)] md:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Open to DFIR, incident response, and cybersecurity opportunities.</h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{photographerInfo.availability}</p>

          <div className="grid gap-3 sm:grid-cols-3">
            <a href={`mailto:${photographerInfo.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground transition-colors hover:bg-white/[0.06]">
              <Mail className="size-4 text-emerald-400" />
              {photographerInfo.email}
            </a>
            <a href={`tel:${photographerInfo.phone}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground transition-colors hover:bg-white/[0.06]">
              <Phone className="size-4 text-emerald-400" />
              {photographerInfo.phone}
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground">
              <MapPin className="size-4 text-emerald-400" />
              {photographerInfo.location}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Contact page
            <ArrowRight className="size-4" />
          </Link>
          <p className="text-center text-sm text-muted-foreground">Fast response for investigation and consulting requests.</p>
        </div>
      </motion.div>
    </section>
  );
}