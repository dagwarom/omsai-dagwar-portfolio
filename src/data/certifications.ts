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
    logoUrl: 'https://www.eccouncil.org/wp-content/uploads/2020/12/ec-council-white-logo.png',
  },
  {
    name: 'SC-200 — Security Operations Analyst',
    issuer: 'Microsoft',
    brandColor: '#0078D4',
    initials: 'SC',
    logoUrl: 'https://www.microsoft.com/favicon.ico',
  },
  {
    name: 'Digital Forensics Essentials (DFE)',
    issuer: 'EC-Council',
    brandColor: '#0E5A8A',
    initials: 'DFE',
    logoUrl: 'https://www.eccouncil.org/wp-content/uploads/2020/12/ec-council-white-logo.png',
  },
  {
    name: 'Security Analyst Bootcamp (Splunk)',
    issuer: 'Virtual Testing Foundation',
    brandColor: '#F99D1C',
    initials: 'SPL',
    logoUrl: 'https://www.splunk.com/content/dam/splunk2/en_us/images/logos/splunk-logo.png',
  },
  {
    name: 'Blue Team Junior Analyst (BTJA)',
    issuer: 'Security Blue Team',
    brandColor: '#1F6FEB',
    initials: 'BT',
    logoUrl: 'https://www.securityblue.team/_ipx/f_avif/horizontal_full_logo_colour_light_rgb.png',
  },
  {
    name: 'Autopsy Forensics (Intro)',
    issuer: 'The Sleuth Kit',
    brandColor: '#22C55E',
    initials: 'TSK',
    logoUrl: 'https://www.autopsy.com/wp-content/uploads/2025/12/SKL_logo_aut3.png',
  },
  {
    name: 'aiSIEM, aiXDR, aiMSSP',
    issuer: 'Seceon Inc.',
    brandColor: '#E11D48',
    initials: 'SEC',
    logoUrl: 'https://seceon.com/wp-content/uploads/2024/07/Seceon-PNG-Security-for-Eons-3.png',
  },
  {
    name: 'Best Cybersecurity & DF Analyst',
    issuer: 'Income Tax Dept. & Enforcement Directorate, Mumbai',
    brandColor: '#A16207',
    initials: 'ITD',
  },
];
