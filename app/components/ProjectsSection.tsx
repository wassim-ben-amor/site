import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { ClickArrowIcon } from "@/components/icons/ClickArrowIcon";
import { DotIcon } from "@/components/icons/DotIcon";

const ProjectItem = (
  props: PropsWithChildren<{
    title: string;
    type: "client" | "open-source";
    stack: string;
    description: string;
    image: string;
    link: string;
  }>
) => (
  <Link href={props.link} className="w-full md:w-1/3 group" target="_blank">
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-xl w-full ring-1 ring-zinc-900/10 dark:ring-white/10 shrink-0">
        <img
          src={props.image}
          alt={props.title}
          className="aspect-[16/9] w-full transition duration-300 ease-in-out group-hover:scale-110 object-cover shadow-sm sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <ClickArrowIcon />
      </div>
      <div className="mt-4 mb-1">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-400/10 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-zinc-400/20 text-zinc-900 dark:text-white">
          <DotIcon
            className={cn(
              "size-1.5",
              props.type === "client" ? "text-teal-500" : "text-blue-500"
            )}
          />
          {props.type === "client" ? "Client" : "Open Source"}
        </span>
      </div>

      <h4 className="text-sm text-primary/70">{props.stack}</h4>
      <h3 className="text-base font-semibold group-hover:underline">
        {props.title}
      </h3>
      <p className="text-sm text-primary/65 mt-2">{props.description}</p>
    </div>
  </Link>
);

export const ProjectsSection = () => (
  <div className="flex flex-col">
    <h1 className="text-xl font-semibold">My projects</h1>
    <p className="text-primary/75">
      Here are some of my projects that I have done or contributed to.
    </p>
    <div className="flex justify-between mt-6 gap-16">
      <ProjectItem
        title="My portfolio"
        stack="Next.js • Tailwind CSS • TypeScript"
        type="open-source"
        description="My portfolio website to showcase my skills and projects built with Next.js."
        image="/portfolio-project.png"
        link="https://nextjs.org/"
      />
    </div>
  </div>
);
