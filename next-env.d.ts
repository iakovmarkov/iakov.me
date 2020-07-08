/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "@/public/markov_iakov_resume.yml" {
  declare let r: Resume;
  export default r;

  interface Resume {
    name: string;
    email: string;
    website: string;
    location: string;
    dob: string;
    photo: string;
    intro: string;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
    languages: Language[];
  }

  interface Language {
    name: string;
    proficiency: string;
  }

  interface Experience {
    role: string;
    company?: string;
    from: number;
    note: string;
    highlights?: string[];
    to?: number;
  }

  interface Project {
    name: string;
    link: string;
    note: string;
  }

  interface Skill {
    name: string;
    note: string;
    level: number;
    tech?: string[];
  }
}
