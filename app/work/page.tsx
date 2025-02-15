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
    description: string;
    technologies: string[];
  }[];
};

const experiences: Experience[] = [
  {
    role: "Senior Fullstack Engineer",
    company: "Contentsquare",
    location: "Paris, France",
    period: "03/2020 - Present",
    details: [
      {
        description: "Designed and optimized a micro-frontend architecture, leveraging Importmap for module federation to efficiently manage shared libraries across micro-frontends.",
        technologies: ["React", "Redux", "Angular", "Vue.js", "Svelte", "Importmap", "Vite", "Webpack", "Vitest", "Jest"],
      },
      {
        description: "Contributed to the Design System, delivering reusable and accessible UI components with design tokens to ensure consistency across applications.",
        technologies: ["React", "Storybook", "Stencil", "Web Components"],
      },
      {
        description: "Developed advanced DevX CLIs, optimizing monorepo management and automating GitHub Actions workflows for seamless CI/CD.",
        technologies: ["GitHub Actions", "Turborepo"],
      },
      {
        description: "Integrated performance monitoring and optimized data fetching, improving Largest Contentful Paint (LCP) and reducing redundant requests.",
        technologies: ["Datadog", "Vite", "TanStack Query"],
      },
      {
        description: "Built and enhanced the Zoning feature, enabling clients to analyze website snapshots with interactive analytics, ensuring accurate heatmap overlays, user interaction tracking, and form analysis.",
        technologies: [
          "Angular",
          "NgRx",
          "RxJS",
          "NestJS (microservices architecture)",
          "PostgreSQL",
        ],
      },
    ],
  },
  {
    role: "Technical Lead",
    company: "Askhub",
    location: "Paris, France",
    period: "02/2018 - 02/2020",
    details: [
      {
        description: "Developed a full-stack analytics platform, combining a serverless AWS backend and a React frontend, enabling clients to track chatbot usage with detailed analytics.",
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
        description: "Integrated and optimized data visualizations, including interactive charts and analytical tables with advanced filtering capabilities to track chatbot intents and performance.",
        technologies: ["React", "Redux", "Chart.js"],
      },
      {
        description: "Led development, driving technical decisions, team collaboration, and bringing best practices to improve efficiency and code quality.",
        technologies: [],
      }
    ],
  },
  {
    role: "Frontend Developer",
    company: "Vynd",
    location: "Tunis, Tunisia",
    period: "03/2016 - 01/2018",
    details: [
      {
        description: "Designed and developed a frontend web application for a venue-search platform using Angular 2, transforming UI mockups into a fully functional and responsive product.",
        technologies: ["Angular 2/4"],
      },
      {
        description: "Built and optimized search and filtering functionalities, ensuring a seamless user experience.",
        technologies: [],
      },
      {
        description: "Collaborated closely with the Design team to refine UI/UX, ensuring consistency and a smooth user journey.",
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
          <li key={idx} className="pl-2 leading-relaxed">
            • {detail.description}
            {detail.technologies.length > 0 && (
              <span className="block text-sm italic text-primary/70 mt-1">
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
