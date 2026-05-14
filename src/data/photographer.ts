import type { PhotographerInfo } from '@/types';

export const photographerInfo: PhotographerInfo = {
  name: 'Omsai Dagwar',
  tagline: 'Digital Forensics & Incident Response Analyst',
  heroIntroduction:
    'Investigating cybercrimes, hunting threats, and turning digital evidence into legally admissible insight.',
  biography: `DFIR Analyst with 3+ years of hands-on experience in digital forensics, incident response, malware analysis, and threat hunting. Proficient in forensic toolkits (FTK, Cellebrite, Autopsy, Magnet Axiom), SIEM platforms (QRadar, Microsoft Defender, Seceon), and forensic acquisition workflows.

Trusted by law enforcement and enterprise teams to investigate cybercrimes and secure digital evidence. Recognized by the Income Tax Department and Enforcement Directorate, Mumbai as "Best Cybersecurity and DF Analyst" for contributions to high-profile investigations.`,
  approach: `My work is guided by three principles: integrity of evidence, depth of investigation, and clarity of reporting. Every byte matters — from forensic acquisition to courtroom-ready documentation.

Whether responding to an active intrusion or unpacking a suspicious binary, I aim to deliver investigations that hold up under technical and legal scrutiny.`,
  awards: [
    'Best Cybersecurity and DF Analyst — Income Tax & Enforcement Directorate, Mumbai',
    'Certified Ethical Hacker (CEHv13 AI) — EC-Council',
    'SC-200 — Microsoft Security Operations Analyst',
    'Certified in aiSIEM, aiXDR, aiMSSP — Seceon Inc.',
  ],
  clients: [
    'Income Tax Department',
    'Enforcement Directorate',
    'Law Enforcement Agencies',
    'Enterprise SOC Teams',
  ],
  education: 'Currently Pursuing: MCA in Cyber Security, Jain University · B.Tech in EnTC, VIIT Pune',
  location: 'Pune, Maharashtra, India',
  email: 'dagwarom2112@gmail.com',
  phone: '+91 8459749158',
  availability: 'Open to DFIR consulting, incident response engagements, and full-time opportunities.',
  openToRoles: [
    {
      category: 'Cybersecurity / DFIR',
      items: [
        'Digital Forensics & Incident Response (DFIR)',
        'Threat Detection Developer',
        'Security Developer',
        'SOC Developer',
        'SOC Analyst',
        'Threat Analyst',
        'App Security Analyst',
      ],
    },
    {
      category: 'Web & App Development',
      items: ['Web Development', 'App Development'],
    },
    {
      category: 'AI Prompting & Automation',
      items: ['AI Prompt Engineering'],
    },
  ],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/omsai-dagwar',
  },
  // Cybersecurity / analyst portrait — replace with your own photo when ready
  portraitImage:
    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  resumeUrl: '/Om_Dagwar_Resume.pdf',
  experience: [
    {
      company: 'R.S Patel & Co.',
      role: 'Sr. Digital Forensics & Incident Responder',
      period: 'Feb 2026 – Present',
      location: 'Hybrid · Pune, India',
      highlights: [
        'Lead end-to-end digital forensic investigations across endpoints, servers, and cloud environments.',
        'Perform disk imaging and recovery using Digital Collector, EnCase, Magnet, and FTK Imager.',
        'Conduct advanced malware analysis (static, dynamic, sandbox) for cybercrime investigations.',
        'Collaborate with law enforcement to deliver legally admissible forensic evidence.',
        'Run data center and cloud forensics — secure acquisition, validation, and backup of critical infrastructure.',
      ],
    },
    {
      company: 'Cybermate Forensics & Data Security Solutions Pvt. Ltd.',
      role: 'Sr. Digital Forensics Analyst',
      period: 'Apr 2023 – Dec 2025',
      location: 'Pune, India',
      highlights: [
        'Led 15+ forensic investigations across mobile, desktop, and cloud environments.',
        'Used Velociraptor for endpoint visibility and live memory forensics.',
        'Built custom YARA rules to detect fileless malware and suspicious executables.',
        'Supported 100+ search & survey operations with the Income Tax Department.',
        'Performed data center forensics including secure acquisition of cloud-pool servers.',
      ],
    },
    {
      company: 'RNS Technology MSSP Pvt. Ltd. (Internship)',
      role: 'SOC Analyst L1',
      period: 'Jan 2023 – Apr 2023',
      location: 'Dubai, UAE (Remote)',
      highlights: [
        'Triaged 500+ security incidents using QRadar, SentinelOne, and XDR tools.',
        'Supported threat hunting with Seceon and LogRhythm SIEMs.',
        'Maintained SLA compliance across incident response workflows.',
        'Contributed to detection-signature creation through static & sandbox malware analysis.',
      ],
    },
  ],
  certifications: [
    'Certified Ethical Hacker (CEHv13 AI) — EC-Council',
    'SC-200 — Microsoft Security Operations Analyst',
    'Digital Forensics Essentials — EC-Council',
    'Security Analyst Bootcamp (Splunk) — Virtual Testing Foundation',
    'Blue Team Junior Analyst (BTJA) — Security Blue Team',
    'Autopsy Forensics (Intro) — Sleuth Kit',
    'Certified in aiSIEM, aiXDR, aiMSSP — Seceon Inc.',
  ],
  skills: [
    {
      category: 'Forensics Tools',
      items: [
        'FTK Imager',
        'Autopsy',
        'Cellebrite UFED',
        'Magnet Axiom',
        'Magnet DVR Examiner',
        'Oxygen Forensics Detective',
        'Intella',
        'dtSearch',
        'Velociraptor',
        'Guymager',
        'Digital Collector',
      ],
    },
    {
      category: 'Threat Detection & SIEM',
      items: [
        'YARA Rules',
        'QRadar',
        'Seceon (aiSIEM / aiXDR / aiMSSP)',
        'Microsoft Defender XDR',
        'Defender for Cloud',
        'SentinelOne',
        'LogRhythm',
      ],
    },
    {
      category: 'Core Skills',
      items: [
        'Threat Hunting',
        'Malware Analysis',
        'Memory Forensics',
        'Incident Response',
        'Disk Imaging',
        'SOC Operations',
      ],
    },
    {
      category: 'Frameworks',
      items: ['MITRE ATT&CK', 'Cyber Kill Chain', 'OSI Model', 'DFIR Playbooks'],
    },
    {
      category: 'Hardware Tools',
      items: ['LogiCube Falcon', 'Tableau TD-3', 'Tableau TX-1', 'Tableau TX-2'],
    },
  ],
};
