import { useMemo } from 'react';
import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

/**
 * Portfolio page with masonry grid
 * Features smooth animations and responsive layout
 */
export default function Portfolio() {
  const sections = useMemo(
    () => [
      { id: 'forensics', label: 'Forensics' },
      { id: 'website-designing', label: 'Website Designing' },
      { id: 'development', label: 'Development' },
    ],
    []
  );

  const groupedProjects = useMemo(
    () =>
      sections.reduce<Record<string, typeof projects>>((accumulator, section) => {
        accumulator[section.id] = projects.filter((project) => project.portfolioSection === section.id);
        return accumulator;
      }, { all: projects }),
    [sections]
  );

  return (
    <>
      <SEOHead
        title="Projects"
        description="DFIR research, automation tooling, and open-source contributions by Omsai Dagwar — covering mobile forensics, log automation, and spyware detection."
      />

      <div className="min-h-screen">
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4 font-mono">// projects</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Projects
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                DFIR research, forensic automation, and open-source security tooling
              </p>
            </motion.div>
          </div>
        </section>

      {/* Portfolio Grid - Edge to edge */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="forensics" className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <TabsList className="h-auto flex-wrap gap-2 rounded-2xl border border-border bg-background p-2">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className={cn(
                    'rounded-xl px-4 py-2 text-sm md:text-base font-medium',
                    'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
                  )}
                >
                  {section.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="forensics" className="mt-8 md:mt-10">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide">Forensics Projects</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Mobile forensics, log acquisition, spyware detection, and incident-response tooling.
                </p>
              </div>
              <PortfolioGrid projects={groupedProjects.forensics} />
            </div>
          </TabsContent>

          <TabsContent value="website-designing" className="mt-8 md:mt-10">
            <EmptySection
              title="Website Designing"
              description="Future projects will be added here soon. Stay tuned for upcoming website design work and UI/UX showcases."
              status="Stay tuned"
            />
          </TabsContent>

          <TabsContent value="development" className="mt-8 md:mt-10">
            <EmptySection
              title="Development"
              description="Future projects will be added here soon. Stay tuned for upcoming development work and product builds."
              status="Stay tuned"
            />
          </TabsContent>
        </Tabs>
      </section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </>
  );
}

function EmptySection({ title, description, status }: { title: string; description: string; status?: string }) {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-border bg-background/60 p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-light tracking-wide">{title}</h2>
      <p className="mt-3 text-sm md:text-base text-muted-foreground">{description}</p>
      {status && <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-foreground/70">{status}</p>}
    </div>
  );
}
