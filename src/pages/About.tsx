import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, FileDown, Mail, MapPin, GraduationCap, Award, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import profilePhoto from '@/assets/omsai-profile.jpeg';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0.8, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4 font-mono">// whoami</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">About</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {photographerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bio + Contact card */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
            {/* Sidebar */}
            <motion.aside
              className="space-y-6 md:sticky md:top-24"
              initial={{ opacity: 0.8, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted ring-1 ring-border"
              >
                <img
                  src={profilePhoto}
                  alt={`${photographerInfo.name} — ${photographerInfo.tagline}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </motion.div>

              <div className="space-y-3 text-sm font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 mt-0.5 text-muted-foreground" />
                  <span>{photographerInfo.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="size-4 mt-0.5 text-muted-foreground" />
                  <span>{photographerInfo.education}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="size-4 mt-0.5 text-muted-foreground" />
                  <a href={`mailto:${photographerInfo.email}`} className="hover:text-muted-foreground">
                    {photographerInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {photographerInfo.socialLinks.linkedin && (
                  <a
                    href={photographerInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {photographerInfo.resumeUrl && (
                  <a
                    href={photographerInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-border rounded-sm hover:bg-accent transition-colors text-sm font-light"
                  >
                    <FileDown className="size-4" />
                    Resume
                  </a>
                )}
              </div>
            </motion.aside>

            {/* Main */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0.8, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">{photographerInfo.name}</h2>
                <p className="text-xl text-muted-foreground font-light tracking-wide">{photographerInfo.tagline}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                {photographerInfo.biography.split('\n\n').map((p, i) => (
                  <p key={i} className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="size-5" />
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">Experience</h3>
                </div>
                <div className="space-y-8">
                  {photographerInfo.experience?.map((exp) => (
                    <div key={exp.company} className="border-l-2 border-border pl-6 space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-lg font-medium">{exp.role}</h4>
                        <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} · {exp.location}
                      </p>
                      <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base font-light text-muted-foreground">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">Technical Skills</h3>
                <div className="space-y-5">
                  {photographerInfo.skills?.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <h4 className="text-sm uppercase tracking-widest text-muted-foreground font-mono">
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 text-xs md:text-sm font-light border border-border rounded-sm bg-accent/40"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications CTA */}
              <div className="space-y-4 p-6 border border-border rounded-sm bg-accent/30">
                <div className="flex items-center gap-3">
                  <Award className="size-5" />
                  <h3 className="text-xl md:text-2xl font-light tracking-wide">Certifications & Recognition</h3>
                </div>
                <p className="text-sm md:text-base font-light text-muted-foreground">
                  {photographerInfo.certifications?.length ?? 0}+ globally recognized industry credentials including CEHv13 (EC-Council), Microsoft SC-200, and Splunk — trusted across international cybersecurity standards.
                </p>
                <Link
                  to="/certifications"
                  className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>View All Certifications</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Open to Roles */}
              {photographerInfo.openToRoles && photographerInfo.openToRoles.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="size-5" />
                    <h3 className="text-2xl md:text-3xl font-light tracking-wide">Open to Roles</h3>
                  </div>
                  <p className="text-sm md:text-base font-light text-muted-foreground">
                    Currently open to opportunities across these focused domains. This is the work I want to be
                    considered for:
                  </p>
                  <div className="space-y-4">
                    {photographerInfo.openToRoles.map((group) => (
                      <div key={group.category} className="space-y-3 rounded-sm border border-border bg-accent/20 p-4 md:p-5">
                        <h4 className="text-sm uppercase tracking-[0.28em] text-muted-foreground font-mono">
                          {group.category}
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {group.items.map((role) => (
                            <div
                              key={role}
                              className="flex items-center gap-3 rounded-sm border border-border/70 bg-background/40 px-4 py-3"
                            >
                              <span className="size-2 rounded-full bg-emerald-500" />
                              <span className="text-sm md:text-base font-light">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
