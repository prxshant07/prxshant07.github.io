import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { profile, projects, skills } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role}` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} — Portfolio` },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="mb-20 flex items-center justify-between text-sm">
      <a href="#top" className="font-mono font-semibold tracking-tight">
        {"<"}prashant{" />"}
      </a>
      <div className="flex items-center gap-6 text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">about</a>
        <a href="#work" className="hover:text-foreground transition-colors">work</a>
        <a href="#contact" className="hover:text-foreground transition-colors">contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="mb-24">
      <p className="font-mono text-sm text-primary mb-6">~ /home/prashant</p>
      <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05] mb-6 text-glow">
        {profile.name}.
      </h1>
      <p className="font-mono text-sm text-muted-foreground mb-8">{profile.role}</p>
      <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
        {profile.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          View work <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-primary transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary">{num}</span>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mb-24">
      <SectionHeading num="01." title="about" />
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a Computer Science student exploring the intersection of{" "}
          <span className="text-foreground">artificial intelligence</span> and{" "}
          <span className="text-foreground">modern web development</span>. My focus is on
          building systems that are both intelligent and elegant — from training models to
          shipping production interfaces.
        </p>
        <p>
          Currently learning by doing: building projects end-to-end, contributing to open
          source, and figuring out how to make complex ideas feel simple.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="mb-24">
      <SectionHeading num="02." title="stack" />
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono text-sm text-muted-foreground mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="mb-24">
      <SectionHeading num="03." title="selected work" />
      <div className="space-y-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="card-hover rounded-lg border border-border bg-surface p-6"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                <p className="font-mono text-xs text-muted-foreground">{p.year}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-xs text-primary">
                  #{t.toLowerCase()}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        // edit <span className="text-foreground">src/data/projects.ts</span> to add or remove projects
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mb-24">
      <SectionHeading num="04." title="contact" />
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Open to internships, collaborations, and interesting problems. The fastest way to
        reach me is below.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm hover:border-primary transition-colors"
        >
          <Mail className="h-4 w-4" /> {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm hover:border-primary transition-colors"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm hover:border-primary transition-colors"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pt-8 font-mono text-xs text-muted-foreground flex items-center justify-between">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>built with care</span>
    </footer>
  );
}
