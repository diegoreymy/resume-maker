export interface IResume {
    id: number;
    nickname: string;
    basics: IBasics;
    work: IWork[];
    education: IEducation[];
    skills: ISkill[];
    languages: ILanguage[];
}

export interface IBasics {
    name: string;
    label: string;
    picture: string;
    email: string;
    phone: string;
    summary: string;
    githubUrl: string;
    linkedinUrl: string;
}

export interface IWork {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface IEducation {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
}

export interface ISkill {
    category: string;
    name: string;
    level: number;
}

export interface ILanguage {
    language: string;
    fluency: string;
}





