import { AskhubLogo } from "@/components/icons/AskhubLogo";
import { ContentsquareLogo } from "@/components/icons/ContentsquareLogo";
import { VyndLogo } from "@/components/icons/VyndLogo";
import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Wassim Ben Amor - Work Experiences",
  description:
    "An overview of my professional experiences, highlighting key roles, achievements, and the technologies I have worked with.",
};

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  details: {
    title: string;
    description: string;
    technologies: string[];
  }[];
};

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Contentsquare",
    location: "Paris, France",
    period: "02/2020 - Present",
    details: [
      {
        title: "Zoning Team:",
        description:
          "Developed and enhanced the Zoning feature, a central product component enabling clients to view analytics on visual snapshots of their websites. Employed DOM serialization to capture site structure, allowing websites to be re-displayed in iframes for analysis. Addressed challenges in maintaining visual consistency within these snapshots, providing clients with valuable insights into user interactions on specific site elements.",
        technologies: [
          "Angular",
          "NgRx",
          "NestJS (microservices architecture)",
          "PostgreSQL",
        ],
      },
      {
        title: "Core Team:",
        description:
          "Transitioned to the Core team to lead key projects aimed at enhancing frontend architecture. Designed and implemented a micro-frontend system with a Svelte container to support MFEs built in Angular, React, and Vue.js, following web component standards. Directed major migrations from Vue 2 to Vue 3 and Angular 9 to 16, significantly improving performance, maintainability, and code consistency.",
        technologies: ["Svelte", "Angular", "React", "Vue.js"],
      },
      {
        title: "Tooling and Developer Experience:",
        description:
          "Delivered extensive tooling support across teams, enhancing monorepo management with Turborepo and pnpm. These improvements streamlined workflows and significantly boosted developer productivity and efficiency throughout the organization.",
        technologies: ["Turborepo", "pnpm", "GitHub Actions"],
      },
    ],
  },
  {
    role: "Technical Lead",
    company: "Askhub",
    location: "Paris, France",
    period: "02/2018 - 01/2020",
    details: [
      {
        title: "Built a full-stack analytics platform",
        description:
          "with a serverless architecture on AWS and a responsive React frontend, enabling clients to track chatbot usage through detailed analytics.",
        technologies: [
          "React",
          "Redux",
          "Chart.js",
          "AWS Lambda",
          "AWS S3",
          "AWS DynamoDB",
        ],
      },
      {
        title: "Enhanced user experience",
        description:
          "with clear, intuitive UI/UX, providing clients with easy-to-navigate dashboards and insightful charts to monitor chatbot performance",
        technologies: [],
      },
      {
        title: "Led development and team collaboration",
        description:
          "guiding technical decisions and sharing best practices to ensure quality and efficiency across the project.",
        technologies: [],
      },
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Vynd",
    location: "Tunis, Tunisia",
    period: "03/2016 - 01/2018",
    details: [
      {
        title: "Developed UI mockups",
        description:
          "in Angular2, turning design concepts into interactive, visually engaging web pages for a venue-search platform.",
        technologies: ["Angular 2"],
      },
      {
        title: "Applied web design skills",
        description:
          "to create and improve mockups, ensuring a smooth and user-friendly experience for people searching venues.",
        technologies: [],
      },
    ],
  },
];

const logoMap: Record<string, JSX.Element> = {
  Contentsquare: (
    <ContentsquareLogo className="size-7 rounded-full shadow-custom" />
  ),
  Askhub: (
    <AskhubLogo className="size-7 rounded-full dark:bg-white shadow-custom" />
  ),
  Vynd: (
    <VyndLogo className="size-7 rounded-full dark:bg-white shadow-custom" />
  ),
};

const workExperienceItem = (experience: Experience) => (
  <div
    key={experience.company}
    className="flex flex-col md:flex-row md:items-start gap-6"
  >
    <div className="shrink-0 md:w-1/4 text-sm text-primary/80">
      <p>{experience.period}</p>
    </div>

    <div className="grow space-y-2">
      <div className="flex items-center space-x-2">
        {logoMap[experience.company]}
        <h2 className="text-lg font-semibold text-primary">
          {experience.company}
        </h2>
      </div>

      <p className="text-sm text-primary/60">{experience.location}</p>

      <p className="text-base font-medium text-primary/80">{experience.role}</p>

      <ul className="mt-4 space-y-4 pl-4 border-l-2 border-zinc-100 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
        {experience.details.map((detail, idx) => (
          <li key={idx} className="pl-2">
            <strong>{detail.title}</strong> {detail.description}
            <br />
            {detail.technologies.length > 0 && (
              <span className="text-sm italic">
                Technologies: {detail.technologies.join(", ")}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function WorkPage() {
  return (
    <div className="flex flex-col mt-10 sm:mt-16 lg:mt-20 px-4 sm:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-4">Work Experiences</h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-8">
        Below is an overview of my professional experiences, highlighting key
        roles, achievements, and the technologies I have worked with.
      </p>
      <div className="flex flex-col gap-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        {experiences.map(workExperienceItem)}
      </div>
    </div>
  );
}
