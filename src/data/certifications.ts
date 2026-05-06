export interface Certification {
  name: string;
  issuer: string;
  brandColor: string; // hex
  initials: string; // shown when no logo
  logoUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Certified Ethical Hacker (CEHv13 AI)',
    issuer: 'EC-Council',
    brandColor: '#0E5A8A',
    initials: 'CEH',
    logoUrl: '/Certifications/EC-CEH.png',
  },
  {
    name: 'SC-200 — Security Operations Analyst',
    issuer: 'Microsoft',
    brandColor: '#0078D4',
    initials: 'SC',
    logoUrl: '/Certifications/SC-200.png',
  },
  {
    name: 'Digital Forensics Essentials (DFE)',
    issuer: 'EC-Council',
    brandColor: '#0E5A8A',
    initials: 'DFE',
    logoUrl: '/Certifications/DFE_logo.webp',
  },
  {
    name: 'Security Analyst Bootcamp (Splunk)',
    issuer: 'Virtual Testing Foundation',
    brandColor: '#F99D1C',
    initials: 'SPL',
    logoUrl: '/Certifications/Splunk.png',
  },
  {
    name: 'Blue Team Junior Analyst (BTJA)',
    issuer: 'Security Blue Team',
    brandColor: '#1F6FEB',
    initials: 'BT',
    logoUrl: '/Certifications/BTJA.png',
  },
  {
    name: 'Autopsy Forensics (Intro)',
    issuer: 'The Sleuth Kit',
    brandColor: '#22C55E',
    initials: 'TSK',
    logoUrl: '/Certifications/autopsy_intro.webp',
  },
  {
    name: 'aiSIEM, aiXDR, aiMSSP',
    issuer: 'Seceon Inc.',
    brandColor: '#E11D48',
    initials: 'SEC',
    logoUrl: '/Certifications/Seceon.png',
  },
  {
    name: 'Best Cybersecurity & DF Analyst',
    issuer: 'Income Tax Dept. & Enforcement Directorate, Mumbai',
    brandColor: '#A16207',
    initials: 'ITD',
    logoUrl: '/Certifications/Ministry_of_Finance_India.svg',
  },
];
