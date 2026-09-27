export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  photoCard: string;
  bio: string;
  highlights: string[];
  /** E.164 phone for WhatsApp, e.g. +923000025096 */
  whatsapp?: string;
};

/**
 * Real team members only — no invented credentials or clients.
 */
export const team: TeamMember[] = [
  {
    slug: 'gultaj-khan',
    name: 'Gultaj Khan',
    role: 'Founder & CEO · Odoo Developer · Cybersecurity Specialist',
    photo: '/images/team/gultaj-khan.webp',
    photoCard: '/images/team/gultaj-khan-card.webp',
    bio: 'Founder leading Odoo engineering, integrations and security advisory. Three years building custom addons, web scraping pipelines, Odoo websites and Node.js applications for international clients.',
    highlights: [
      'Custom Odoo addons & modules',
      'Web scraping & data pipelines',
      'Odoo Website & eCommerce',
      'Node.js applications',
      'Cybersecurity specialist & advisor',
      'eCommerce ↔ ERP integrations',
    ],
  },
  {
    slug: 'haider-ali-khan',
    name: 'Haider Ali Khan',
    role: 'Finance Manager · Junior Developer',
    photo: '/images/team/haider-ali-khan.webp',
    photoCard: '/images/team/haider-ali-khan-card.webp',
    bio: 'Supports finance operations and contributes as a junior developer — helping keep delivery organized while growing hands-on experience across Odoo and related project work.',
    highlights: [
      'Finance & operations support',
      'Junior Odoo development',
      'Project coordination',
      'Documentation & delivery support',
    ],
    whatsapp: '+923000025096',
  },
];

/** wa.me link from an E.164 or local phone string */
export function whatsappHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}`;
}
export const careerRoles = [
  'Odoo Developer',
  'Python / Backend Developer',
  'Node.js Developer',
  'Frontend / Website Developer',
  'Integration Engineer',
  'QA / Testing',
  'Internship / Trainee',
  'Other / Open application',
] as const;

export const experienceLevels = [
  'Student / fresher',
  '0 – 1 years',
  '1 – 3 years',
  '3 – 5 years',
  '5+ years',
] as const;

export const workPreferences = [
  'Remote',
  'Hybrid',
  'On-site',
  'Flexible / open to discuss',
] as const;
