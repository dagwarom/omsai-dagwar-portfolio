import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-10">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Selected work spanning DFIR research, automation, and malware analysis.</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            <span>View all projects</span>
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} aspectRatio="landscape" showCategory index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}