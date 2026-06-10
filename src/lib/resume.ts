export type ExperienceEntry = {
  role: string;
  company: string;
  start: string;
  end: string;
  scope: string;
  bullets: string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  start: string;
  end: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Resume = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
};

export const resume: Resume = {
  name: "Sriram Rajagopalan",
  tagline: "data_science.manager()",
  location: "[ City, Country ]",
  email: "[ email@example.com ]",
  experience: [
    {
      role: "[ Role Title ]",
      company: "[ Company ]",
      start: "[ Start ]",
      end: "[ End ]",
      scope: "[ One-line scope of the role: team size, charter, remit. ]",
      bullets: [
        "[ Achievement or responsibility bullet. ]",
        "[ Achievement or responsibility bullet. ]",
        "[ Achievement or responsibility bullet. ]",
      ],
    },
    {
      role: "[ Role Title ]",
      company: "[ Company ]",
      start: "[ Start ]",
      end: "[ End ]",
      scope: "[ One-line scope of the role: team size, charter, remit. ]",
      bullets: [
        "[ Achievement or responsibility bullet. ]",
        "[ Achievement or responsibility bullet. ]",
      ],
    },
    {
      role: "[ Role Title ]",
      company: "[ Company ]",
      start: "[ Start ]",
      end: "[ End ]",
      scope: "[ One-line scope of the role: team size, charter, remit. ]",
      bullets: [
        "[ Achievement or responsibility bullet. ]",
        "[ Achievement or responsibility bullet. ]",
      ],
    },
  ],
  education: [
    {
      degree: "[ Degree, Field ]",
      school: "[ School ]",
      start: "[ Start ]",
      end: "[ End ]",
    },
    {
      degree: "[ Degree, Field ]",
      school: "[ School ]",
      start: "[ Start ]",
      end: "[ End ]",
    },
  ],
  skills: [
    {
      category: "[ Category ]",
      items: ["[ Skill ]", "[ Skill ]", "[ Skill ]"],
    },
    {
      category: "[ Category ]",
      items: ["[ Skill ]", "[ Skill ]", "[ Skill ]"],
    },
  ],
};
