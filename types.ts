export interface ReleasePlan {
  youtube: string;
  socials: string;
  newsletter: string;
  partners: string;
}

export interface OnSiteLayout {
  hero: string;
  flow: string;
  cta: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  type: 'Studio' | 'Artist' | 'Brand';
  overview: string;
  whatWeDid: {
    approach: string;
    visualLanguage: string;
    editorial: string;
  };
  deliverables: string[];
  impact: {
    business: string;
    visibility: string;
    value: string;
  };
  visuals: string[]; // Descriptions of visuals
  taglines: string[];
  quotes: string[];
  seo: string[];
  releasePlan: ReleasePlan;
  layout: OnSiteLayout;
}

export interface PackageItem {
  name: string;
  price: string;
  tagline: string;
  deliverables: string[];
  timeline: string;
  crew: string;
  useCase: string;
  roi: string;
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  GENERATOR = 'GENERATOR',
  PACKAGES = 'PACKAGES',
  LIBRARY = 'LIBRARY',
  DETAIL = 'DETAIL',
  PLAYBOOK = 'PLAYBOOK'
}