"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";

interface Category {
  id: string;
  label: string;
  items: string[];
}

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Three.js",
      "Git/GitHub",
      "CSS3/SCSS/SASS",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
      "GSAP",
      "Bootstrap",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Spring Boot", "Node.js", "Express.js"],
  },
  {
    id: "ai-agent",
    label: "AI & Agent",
    items: [
      "Agentic Harness & Multi-Agent System Design",
      "Tool-/Function-Calling Systems",
      "Multi-Provider LLM Integration",
      "Agent Loops & Handoffs",
      "Zod Schema I/O",
      "Typed RunResult Failure States",
      "Loop Detection",
      "Host vs Sandbox Git Trust Boundaries",
      "Gemini API",
      "OpenAI API",
      "Tavily API",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: [
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "Redis",
      "Neo4j (Cypher)",
      "SQL",
      "Database Design",
    ],
  },
  {
    id: "auth-security",
    label: "Auth & Security",
    items: [
      "Clerk",
      "JWT",
      "OAuth 2.0",
      "bcryptjs",
      "Webhook Verification (Svix)",
      "OS Credential Vaults (keytar)",
      "Guardrails & Secret Scanning",
      "Sandboxed execution",
    ],
  },
  {
    id: "languages",
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Prisma ORM"],
  },
];

const About = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;

    event.preventDefault();
    setActiveId(categories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="about"
      aria-label="Technologies that fuel my passion"
      className="relative z-10 w-full overflow-hidden bg-[#0E1016] py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-[90%] lg:max-w-[1212.8px]">
        <AnimatedTitle
          text="Technologies that fuel my passion"
          className="mb-8 justify-center text-center text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#BBD0F5] sm:text-[36px] md:mb-10 md:text-[40px] lg:text-[60px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        {/* Filters */}
        <div
          role="tablist"
          aria-label="Technology categories"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((category, index) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`tech-tab-${category.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls="tech-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`rounded-full border px-4 py-2 text-[17px] font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBD0F5] sm:px-7 sm:py-3 sm:text-xl ${
                  isActive
                    ? "border-[#BBD0F5]/50 bg-[#BBD0F5]/10 text-[#BBD0F5]"
                    : "border-white/10 bg-white/[0.03] text-[#95979D] hover:border-white/25 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="tech-panel"
          role="tabpanel"
          aria-labelledby={`tech-tab-${active.id}`}
          className="mt-8 flex items-center justify-center rounded-[24px] border border-white/10 bg-[#212531] p-6 sm:mt-10 sm:rounded-[28px] sm:p-8 md:p-10"
        >
          <motion.ul
            key={active.id}
            className="flex w-full flex-wrap justify-center gap-3 sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {active.items.map((item) => (
              <li
                key={item}
                data-no-blobity
                className="rounded-md border border-white/10 bg-[#191C26] text-center px-3.5 py-2 text-[16px] text-[#BBD0F5] sm:px-5 sm:py-3 sm:text-lg md:text-xl"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default About;