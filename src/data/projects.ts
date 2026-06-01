// Edit this file to add, remove, or update projects.

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  year: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: "VedaAi- A.I. Assessment Generator",
    description:
      "Full-stack web app that Generates Assignments, Questions and Exams with a real-time analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "WebSockets", "LLM Integration", "Render"],
    year: "May 2026",
    github: "https://github.com/prxshant07/VedaAi",
    highlights: [
      "Implemented asynchronous processing with BullMQ, Redis, and background workers",
      "Developed real-time job tracking using WebSockets and event-driven architecture",
      "Generated structured assessment papers with AI, difficulty tagging, and marks allocation",
      "Designed scalable REST APIs with MongoDB persistence and queue-based workflows",
    ],
  },
  {
    title: "Learnlytics — Student Performance Analytics",
    description:
      "Full-stack ML web app that predicts student performance from behavioral and subject-level metrics, with a real-time analytics dashboard.",
    tags: ["Python", "Flask", "React", "Scikit-learn", "XGBoost", "Vercel", "Render"],
    year: "Aug 2025 – Oct 2025",
    github: "https://github.com/prxshant07/Learnlytics---student-perfomance-predictor",
    highlights: [
      "Engineered Flask REST APIs for low-latency real-time ML predictions",
      "React analytics dashboard with dynamic visualization",
      "Decoupled frontend-backend architecture with cloud-hosted APIs",
      "Regression models with preprocessing and feature engineering",
    ],
  },
  {
    title: "DocFlow — Async Document Processing System",
    description:
      "Distributed, event-driven document processing pipeline with real-time progress streaming and multi-stage workflow orchestration.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker"],
    year: "Feb 2026 – Apr 2026",
    github: "https://github.com/prxshant07/DocFlow",
    highlights: [
      "Reduced processing latency by 40% with async Celery workers",
      "Real-time progress via Redis Pub/Sub and WebSockets",
      "State machine: queued → processing → completed/failed with retries",
      "Service-oriented backend with strongly typed schemas",
    ],
  },
  {
    title: "BirdCLEF+ 2026 — Bioacoustic Species Classification",
    description:
      "Audio Spectrogram Transformer models trained on 10k+ labeled bioacoustic recordings for multi-class species classification.",
    tags: ["Python", "PyTorch", "librosa", "Pandas", "scikit-learn"],
    year: "Mar 2026 – Present",
    highlights: [
      "AST and CNN-based feature extraction for species recognition",
      "End-to-end audio preprocessing: mel spectrograms, noise filtering, augmentation",
      "Evaluated with macro F1-score aligned to BirdCLEF metrics",
    ],
  },
];

export const skills = {
  "Languages": ["Python", "JavaScript", "TypeScript", "SQL"],
  "Machine Learning": ["PyTorch", "Scikit-learn", "XGBoost", "CNNs", "Audio Spectrogram Transformers", "Feature Engineering"],
  "Backend Engineering": ["FastAPI", "Flask", "REST APIs", "Node.js", "Celery", "Redis", "WebSockets"],
  "Databases": ["PostgreSQL", "MongoDB"],
  "Frontend": ["React.js", "Next.js"],
  "DevOps & Cloud": ["Docker", "Git", "Render", "Vercel", "CI/CD", "Linux", "AWS (Basics)"],
};

export const experience = [
  {
    role: "MERN-Stack Developer Intern",
    company: "Ypsilon IT Solutions",
    location: "Indore, India",
    period: "May 2025 – Jun 2025",
    points: [
      "Developed a restaurant delivery management system backend using MongoDB and RESTful APIs.",
      "Improved order management efficiency by ~25% by optimizing MongoDB queries and redesigning schemas.",
      "Optimized database schemas and queries to enhance performance and scalability.",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  school: "IPS Academy, Institute of Engineering & Science — Indore",
  period: "Aug 2022 – Present",
  coursework: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
};

export const certifications = [
  "Cloud Computing and Distributed Systems – IIT Kanpur (NPTEL, Elite)",
  "Deep Learning and Neural Networks with Keras (Coursera)",
  "Machine Learning with Python — IBM (Coursera)",
  "Foundational C# with Microsoft — freeCodeCamp",
];

export const profile = {
  name: "Prashant Singh Rajput",
  role: "ML Engineer · Backend & Full-Stack Developer",
  tagline:
    "Machine Learning Engineer and Backend Developer building scalable distributed systems, async processing pipelines, REST APIs, and ML-powered applications.",
  email: "prashantrajput7116@gmail.com",
  github: "https://github.com/prxshant07",
  linkedin: "https://www.linkedin.com/in/prxshant07",
};
