export type Language = 'ar' | 'en';

export interface Translation {
  nav: {
    home: string;
    services: string;
    projects: string;
    testimonials: string;
    about: string;
    contact: string;
    lang: string;
    login: string;
    logout: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    bookCall: string;
  };
  about: {
    title: string;
    desc: string;
    stats_clients: string;
    stats_projects: string;
    stats_exp: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewMore: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  callAction: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    contactUs: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    content: string;
    close: string;
  };
  login: {
    title: string;
    username: string;
    password: string;
    submit: string;
    welcome: string;
  };
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: number;
  imageUrl: string;
  category: string;
  title: {
    en: string;
    ar: string;
  };
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: {
    ar: string;
    en: string;
  };
  content: {
    ar: string;
    en: string;
  };
  rating: number;
}