export enum Locales {
  en = "en",
  fr = "fr"
}


export interface Duration {
  years: number;
  months: number;
};

export interface Name {
  firstname: string;
  lastname: string;
};

export interface Contact extends Name {
  email: string;
  phone?: string;
  address: string;
  locationUrl: string;
  nationality: string;
  birthday: string;
  maritalStatus: string;
  nbOfChildren?: number;
  linkedin: string;
  github: string;
};

export interface More {
  before: string;
  after: string;
  link: {
    url: string;
    name: string;
  }
}

export interface Skill {
  keywords: string[];
  level: number;
};

export interface Entity {
  name: string;
  url?: string;
  logo?: string;
};

export interface School {
  year: number;
  title: string;
  semesters?: number;
  issuer: Entity;
};

export interface Experience {
  skip?: boolean;
  startDate?: string;
  endDate?: string;
  title: string;
  description?: string[];
  sections?: {
    experiences: Experience[];
    description?: string[];
  }
};

export interface Project extends Experience {
  link: Entity;
};

export interface Job extends Experience {
  company: Entity;
};

export interface CV extends Contact {
  jobTitle: string;
  jobDescription: string;
  summary: string;
  pdf: string;
  skills: Skill[][];
  softSkills: Skill[];
  languages: Skill[];
  interests: string[];
  experience: Experience[];
  education: School[];
  certifications: School[];
  otherSkills: string[];
  work: {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }[];
};