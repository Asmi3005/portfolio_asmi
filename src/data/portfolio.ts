import type {
  ContactInfo,
  EducationItem,
  ExperienceItem,
  Highlight,
  LeadershipItem,
  NavLink,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const site = {
  name: "Asmi",
  shortName: "Asmi",
  headline: "Software Engineer | Backend | AI/ML",
  location: "India",
  title: "Asmi | Software Engineer",
  description:
    "Portfolio of Asmi, a software engineer at Anvento IT Labs with experience at Apple and TVS Motor Company, working across full-stack development, backend systems, AI/ML, and intelligent applications.",
  profileImage: "/images/asmi-profile.png",
  resumePath: "/resume/Asmi_resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Asmi3005",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asmi-goyal-448138243",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:asmigoyal30@gmail.com",
  },
];

export const hero = {
  intro: "Hi, I'm",
  name: "Asmi",
  statement: "I build intelligent systems and scalable software.",
  description:
    "Software engineer at Anvento IT Labs with experience at Apple and TVS Motor Company, building full-stack applications, backend systems, AI-powered products, and data pipelines.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume/Asmi_resume.pdf",
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from Thapar Institute of Engineering and Technology, currently working as a Software Engineer at Anvento IT Labs with prior experience at Apple and TVS Motor Company.",
    "My work spans full-stack product development, backend services, microservices, data ingestion pipelines, LLM-assisted schema normalization, search and subscription matching, RAG-based applications, and computer vision.",
    "I'm interested in building practical end-to-end software across backend engineering, AI/ML, and data systems.",
  ],
};

export const highlights: Highlight[] = [
  {
    label: "Experience",
    value: "Anvento IT Labs, Apple & TVS",
  },
  {
    label: "Focus",
    value: "Full-Stack, Backend & AI/ML",
  },
  {
    label: "Education",
    value: "B.E. Computer Science",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Anvento IT Labs",
    role: "Software Engineer",
    location: "India",
    duration: "August 2026 – Present",
    bullets: [
      "Ship end-to-end features for a production web platform, owning work across the full stack (React, JavaScript, Python, PostgreSQL) from requirements to deployment.",
      "Partner directly with US-based clients to translate ambiguous business requirements into technical specs, driving feature prioritization and scoping conversations independently.",
      "Build and maintain React and JavaScript frontend components alongside Python backend services, working with a PostgreSQL database hosted on AWS for UI logic and data persistence.",
      "Drive code quality through active participation in code reviews and debugging, resolving production issues and improving platform stability.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    company: "Apple",
    role: "SDE Intern",
    location: "India",
    duration: "January 2026 – June 2026",
    bullets: [
      "Built a centralized insights platform PoC consolidating data from 3 teams and 3 sources into a unified ingestion pipeline, using LLM-based field mapping for schema normalization and low-friction onboarding of new sources.",
      "Designed an OpenSearch-based subscription matching system for multi-topic subscriptions, with notifications triggered within seconds of ingestion — tested against sample data ahead of full-scale rollout.",
      "Containerized 7 microservices spanning ingestion, enrichment, subscription matching, and supporting services with Docker, covering streaming and batch workflows and improving development environment consistency.",
    ],
    technologies: [
      "Python",
      "OpenSearch",
      "Docker",
      "LLMs",
      "Microservices",
      "Data Pipelines",
    ],
  },
  {
    company: "TVS Motor Company",
    role: "Associate Digital Engineer Intern",
    location: "India",
    duration: "June 2025 – July 2025",
    bullets: [
      "Built an end-to-end RAG chatbot using LangChain and LangGraph, with conditional routing across 3 document sources and multiple query sub-types to direct each query to the correct retrieval path.",
      "Integrated local LLMs with semantic chunking and FAISS-based retrieval, improving retrieval quality over naive fixed-size chunking by preserving contextual coherence across chunks.",
      "Developed a Chainlit UI with a FastAPI backend, improving response time by 60% and accuracy by 35%.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "FastAPI",
      "Chainlit",
      "Local LLMs",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI & LLM Systems",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "FAISS",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "C++", "JavaScript"],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Docker",
      "FastAPI",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "OpenSearch",
      "Git",
    ],
  },
  {
    title: "Machine Learning & Data",
    skills: [
      "Scikit-Learn",
      "NLTK",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "PySpark",
    ],
  },
  {
    title: "Web",
    skills: ["HTML", "CSS"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Typeform Clone",
    description:
      "Full-stack Typeform-inspired form builder with drag-and-drop question authoring, eight question types, one-question-at-a-time respondent flow, publishable share links, and response summaries — built with Next.js and a FastAPI + SQLite backend.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Framer Motion",
    ],
    liveUrl:
      "https://typeformcloneproject-git-main-asmis-projects-2ce69f15.vercel.app/",
    githubUrl: "https://github.com/Asmi3005/Typeform_clone",
    visual: "typeform",
  },
  {
    name: "Face Anonymization Tool",
    description:
      "Full-stack privacy tool that detects and anonymizes faces in real time across images, videos, and webcam streams using MediaPipe and OpenCV, with blur, pixelate, blackout, and emoji modes, live preview, and instant toggling via a FastAPI backend and HTML/CSS/JavaScript frontend.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "FastAPI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Asmi3005/Face-Anonymizer-OpenCV",
    visual: "face",
  },
  {
    name: "Medibot",
    description:
      "Interactive medical chatbot that handles predefined medical query intents using intent classification, with a Mistral LLM fallback for out-of-scope questions. Built with a FastAPI backend and Streamlit frontend for local end-to-end use. Not a substitute for professional medical advice.",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Mistral LLM",
      "OpenAI API",
      "NLTK",
    ],
    githubUrl: "https://github.com/Asmi3005/Medbot",
    visual: "medibot",
  },
];

export const education: EducationItem = {
  institution: "Thapar Institute of Engineering and Technology",
  location: "Patiala, India",
  degree: "Bachelor of Engineering in Computer Science",
  duration: "August 2022 – June 2026",
  gpa: "8.88 / 10",
};

export const leadership: LeadershipItem = {
  role: "Member",
  organization: "TICC (Thapar Institute Counselling Cell)",
  contributions: [
    "Organized weekly awareness sessions on mental health topics relevant to student life.",
    "Contributed to campus-wide awareness initiatives.",
    "Collaborated with the organizing team to execute a 3-day cultural event.",
    "Supported logistics, event planning, and session management.",
  ],
};

export const contactIntro =
  "Feel free to reach out if you'd like to connect, discuss an opportunity, or learn more about my work.";

export const contact: ContactInfo = {
  email: "asmigoyal30@gmail.com",
  phone: "+91 78144-28453",
  phoneHref: "tel:+917814428453",
  linkedin: "https://www.linkedin.com/in/asmi-goyal-448138243",
  github: "https://github.com/Asmi3005",
};
