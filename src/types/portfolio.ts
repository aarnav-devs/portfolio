export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  filterCategory: 'ai-ml' | 'data-science' | 'software' | 'robotics' | 'all';
  isFeatured: boolean;
  technologies: string[];
  overview: string;
  problem?: string;
  approach?: string;
  howItWorks?: string[];
  visualType: 'echolearn' | 'fitclik' | 'friday' | 'robosumo' | 'queue' | 'houserate' | 'farmx' | 'minimal';
  hasFullDetails: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'core' | 'ai' | 'systems';
  description: string;
}
