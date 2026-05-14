import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, FileDown, ShieldCheck, Bug, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  const stats = [
    { icon: Search, label: '15+ Investigations Led' },
    { icon: Bug, label: '500+ Incidents Triaged' },
    { icon: ShieldCheck, label: '100+ ITD Operations Supported' },
  ];

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-screen w-full overflow-hidden bg-black">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
            {/* subtle grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-xs md:text-sm tracking-[0.4em] text-emerald-400/90 uppercase font-mono">
                // DFIR · Threat Hunting · Malware Analysis
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wider text-white">
                {photographerInfo.name}
              </h1>
              <p className="text-lg md:text-2xl font-light tracking-wide text-white/90">
                {photographerInfo.tagline}
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
                {photographerInfo.heroIntroduction}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition"
                >
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
                {photographerInfo.resumeUrl && (
                  <a
                    href={photographerInfo.resumeUrl}
                    download="Omsai_Dagwar_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-white/40 text-white text-sm font-light tracking-wide hover:bg-white/10 transition"
                  >
                    <FileDown className="size-4" />
                    Download CV
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 rounded-sm border border-border">
                  <Icon className="size-5" />
                </div>
                <span className="text-base md:text-lg font-light tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About snippet */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">About</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  {photographerInfo.biography.split('\n\n')[0]}
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Read Full Bio</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">Featured Projects</h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                DFIR research, automation tooling, and open-source contributions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
