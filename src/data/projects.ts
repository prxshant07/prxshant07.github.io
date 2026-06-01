// Edit this file to add, remove, or update projects.
// Each project needs a title, description, tags, and optional links.

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Short one-line description of what this project does and what makes it interesting.",
    tags: ["Python", "TensorFlow", "ML"],
    year: "2025",
    github: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "A full-stack web application showcasing modern tooling and clean architecture.",
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    github: "https://github.com/yourusername/project-two",
    demo: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "Replace this with your own project — open src/data/projects.ts to edit.",
    tags: ["AI", "NLP"],
    year: "2024",
    github: "https://github.com/yourusername/project-three",
  },
];

export const skills = {
  "AI & Machine Learning": ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"],
  "Full Stack Development": ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"],
  "Backend & Data": ["PostgreSQL", "MongoDB", "REST APIs", "Docker", "Git"],
};

export const profile = {
  name: "Prashant Singh Rajput",
  role: "AI & ML Student · Full Stack Developer",
  tagline:
    "Computer Science student building intelligent systems and clean web experiences. Passionate about turning ideas into shipped products.",
  email: "prashant@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
