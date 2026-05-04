import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card component with image, hover overlay, and smooth animations
 * Used in homepage featured projects and portfolio grid
 */
export function ProjectCard({ 
  project, 
  aspectRatio, 
  showCategory = true,
  index = 0 
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';
  
  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-1"
      >
        <div className={cn('relative overflow-hidden bg-muted', aspectRatioClasses[ratio])}>
          {!isLoaded && <div className="absolute inset-0 animate-pulse bg-muted" />}

          <motion.img
            src={project.coverImage}
            alt={project.title}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-transform duration-700',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-[1.04]'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/0 transition-colors duration-500 group-hover:ring-white/10" />
        </div>

        <div className="space-y-4 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">{project.year}</p>
              <h3 className="text-lg md:text-xl font-semibold leading-snug text-foreground">{project.title}</h3>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {project.category}
            </span>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tools?.slice(0, 4).map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
