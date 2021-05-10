export class Resume {
    id: number = 0;
    email: string = "";
    username: string = "";
    basics: Basics = new Basics();
    work: Work[] = [];
    education: Education[] = [];
    skills: Skill[] = [];
    languages: Language[] = [];
}

export class Basics {
    name: string = "";
    label: string = "";
    picture: string = "";
    phone: string = "";
    summary: string = "";
    githubUrl: string = "";
    linkedinUrl: string = "";
}

export class Work {
    company: string = "";
    position: string = "";
    startDate: string = "";
    endDate: string = "";
    summary: string = "";
    highlights: string[] = [];
}

export class Education {
    institution: string = "";
    area: string = "";
    studyType: string = "";
    startDate: string = "";
    endDate: string = "";
}

export class Skill {
    category: string = "";
    name: string = "";
    level: string = "";
}

export class Language {
    language: string = "";
    fluency: string = "";
}





