import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <>
      <SEOHead
        title="Certifications"
        description="Industry certifications and recognitions earned by Omsai Dagwar across DFIR, SOC, and cybersecurity domains."
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4 font-mono">
                // credentials
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Certifications
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Industry-recognized credentials & honors
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              (() => {
                const isMinistryFinanceLogo = cert.logoUrl?.includes('Ministry_of_Finance_India.svg');

                return (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-sm border border-border bg-card p-6 flex flex-col gap-5"
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-16 -right-16 size-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: cert.brandColor }}
                />

                {/* Logo */}
                <div className="flex items-start justify-between relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 + 0.15, type: 'spring', stiffness: 180 }}
                    className={`size-14 rounded-sm flex items-center justify-center border border-border overflow-hidden ${isMinistryFinanceLogo ? 'bg-white' : 'bg-background'}`}
                    style={{ boxShadow: `0 0 0 1px ${cert.brandColor}22 inset` }}
                  >
                    {cert.logoUrl ? (
                      <img
                        src={cert.logoUrl}
                        alt={`${cert.issuer} logo`}
                        className={`size-9 object-contain transition-transform duration-500 group-hover:scale-110 md:size-10 ${isMinistryFinanceLogo ? 'dark:invert-0' : ''}`}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span
                      className="font-mono text-xs font-semibold tracking-wider items-center justify-center w-full h-full hidden"
                      style={{
                        color: cert.brandColor,
                        display: cert.logoUrl ? 'none' : 'flex',
                      }}
                    >
                      {cert.initials}
                    </span>
                  </motion.div>

                  <Award
                    className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden
                  />
                </div>

                {/* Text */}
                <div className="space-y-2 relative z-10">
                  <h2 className="text-base md:text-lg font-light leading-snug">{cert.name}</h2>
                  <p
                    className="text-xs uppercase tracking-widest font-mono"
                    style={{ color: cert.brandColor }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px"
                  style={{ background: cert.brandColor }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.07 + 0.3 }}
                />
              </motion.article>
                );
              })()
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
