import { Linkedin, Mail, FileDown } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © {currentYear} {photographerInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${photographerInfo.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
            {photographerInfo.socialLinks.linkedin && (
              <a
                href={photographerInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}
            {photographerInfo.resumeUrl && (
              <a
                href={photographerInfo.resumeUrl}
                download="Omsai_Dagwar_Resume.pdf"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
              >
                <FileDown className="size-4" />
                Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
