export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "CVDecode",
    description:
      "An AI-powered resume analysis platform that evaluates resumes to deliver ATS compatibility checks, detailed scoring, actionable feedback and tailored career insights.",
    technologies: ["Typescript","Bun","Express","PostgreSQL","Prisma","Redis","BullMQ","Clerk","Gemini API"],
    github: "https://github.com/rohitmore07/CVDecode",
    demo: "https://cvdecode.vercel.app/",
    image: require(".//../../public/projects/cvdecode.png"),
    available: true,
  },
  {
    id: 1,
    name: "InsightIQ",
    description:
      "A modern SaaS admin dashboard featuring authentication, user management, analytics and role-based access control.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/rohitmore07/InsightIQ",
    demo: "https://insight-iq-admin.vercel.app/dashboard",
    image: require(".//../../public/projects/insightiq.png"),
    available: true,
  },
  {
    id: 2,
    name: "Velura UI",
    description:
      "Velura UI is a sleek, responsive UI library with customizable components for building modern web applications.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/rohitmore07/velura-ui",
    demo: "https://velura-ui.vercel.app/",
    image: require(".//../../public/projects/velura.png"),
    available: true,
  },
  {
    id: 3,
    name: "Movie Orbit",
    description:
      "Movie Orbit is a web application that lets users explore upcoming movies, trending movies and movies by genre.",
    technologies: ["React", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/rohitmore07/movie-orbit",
    demo: "https://movie-orbit.vercel.app/",
    image: require(".//../../public/projects/movieorbit.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
