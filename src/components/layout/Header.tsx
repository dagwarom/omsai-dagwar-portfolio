import { Link, useLocation } from 'react-router-dom';
import { Menu, FileDown } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className={cn(
              'text-lg font-light tracking-widest transition-all duration-300',
              isTransparent ? 'text-white hover:text-white/80' : 'text-foreground hover:text-foreground/80'
            )}
          >
            <span>{photographerInfo.name.toUpperCase()}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative text-sm leading-7 font-light tracking-wide transition-colors duration-300',
                  isTransparent ? 'text-white hover:text-white/80' : 'text-foreground hover:text-foreground/70'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={cn(
                      'absolute -bottom-1 left-0 right-0 h-px',
                      isTransparent ? 'bg-white' : 'bg-foreground'
                    )}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {photographerInfo.resumeUrl && (
              <a
                href={photographerInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-sm border text-sm font-light tracking-wide transition-colors',
                  isTransparent
                    ? 'border-white/60 text-white hover:bg-white/10'
                    : 'border-border text-foreground hover:bg-accent'
                )}
              >
                <FileDown className="size-4" />
                Resume
              </a>
            )}

            <ThemeToggle />
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('size-9', isTransparent && 'text-white hover:bg-white/10')}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg leading-7 font-light tracking-wide text-foreground hover:text-foreground/80"
                    >
                      {link.name}
                    </Link>
                  ))}
                  {photographerInfo.resumeUrl && (
                    <a
                      href={photographerInfo.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground"
                    >
                      <FileDown className="size-5" />
                      Resume
                    </a>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
