import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ProjectImage } from '@/types';
import { cn } from '@/lib/utils';

interface ImageWithLightboxProps {
  image: ProjectImage;
  onClick: () => void;
  priority?: boolean;
  className?: string;
  index?: number;
}

/**
 * Image component with lazy loading, blur placeholder, and lightbox trigger
 * Optimized for performance with progressive loading
 */
export function ImageWithLightbox({ 
  image, 
  onClick, 
  priority = false, 
  className,
  index = 0
}: ImageWithLightboxProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square'
  };

  return (
    <motion.div
      className={cn('relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_16px_50px_rgba(0,0,0,0.18)] group', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn('relative bg-muted', aspectRatioClasses[image.aspectRatio])}>
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted" />
        )}

        {/* Actual image */}
        <img
          src={image.src}
          alt={image.alt}
          className={cn('absolute inset-0 h-full w-full object-cover transition-all duration-700', isLoaded ? 'opacity-100' : 'opacity-0', isHovered && 'scale-[1.03]')}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Hover overlay */}
        <motion.div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" initial={false} animate={{ opacity: isHovered ? 1 : 0 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0.8, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
              className="flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-md"
            >
              <svg
                className="size-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent" />
      </div>
    </motion.div>
  );
}
