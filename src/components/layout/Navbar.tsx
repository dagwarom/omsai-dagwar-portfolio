import { Link, useLocation } from 'react-router-dom';
import { FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

interface NavbarProps {
  isTransparent?: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}

export function Navbar({ isTransparent = false, mobile = false, onNavigate }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className={cn(mobile ? 'flex flex-col gap-4' : 'hidden md:flex items-center gap-6')}>
      {navLinks.map((link) => {
        const active = location.pathname === link.path;

        return (
          <Link
            key={link.path}
            to={link.path}
            onClick={onNavigate}
            className={cn(
              'relative text-sm font-medium tracking-wide transition-colors duration-300',
              mobile ? 'py-2 text-base' : 'py-1',
              isTransparent ? 'text-white/85 hover:text-white' : 'text-foreground/80 hover:text-foreground'
            )}
          >
            {link.name}
            {active && !mobile && (
              <motion.span
                layoutId="activeNav"
                className={cn('absolute -bottom-0.5 left-0 right-0 h-px', isTransparent ? 'bg-white' : 'bg-foreground')}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}

      {photographerInfo.resumeUrl && (
        <a
          href={photographerInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
          className={cn(
            'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-colors',
            mobile ? 'w-fit' : '',
            isTransparent
              ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
              : 'border-white/10 bg-white/5 text-foreground hover:bg-white/10'
          )}
        >
          <FileDown className="size-4" />
          Resume
        </a>
      )}
    </nav>
  );
}