import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { AskhubLogo } from "@/components/icons/AskhubLogo";
import { ContentsquareLogo } from "@/components/icons/ContentsquareLogo";
import { VyndLogo } from "@/components/icons/VyndLogo";
import { WorkIcon } from "@/components/icons/WorkIcon";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WorkExperienceItem = (
  props: PropsWithChildren<{ title: string; description: string; date: string }>
) => (
  <li className="flex justify-between">
    <div className="flex flex-1 gap-3">
      <span className="rounded-full flex items-center justify-center h-10 w-10 p-0.5 shadow-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
        {props.children}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-medium">{props.title}</span>
        <span className="font-light text-xs text-zinc-600 dark:text-zinc-600">
          {props.description}
        </span>
      </div>
    </div>
    <span className="font-light text-xs text-zinc-400 dark:text-zinc-400">
      {props.date}
    </span>
  </li>
);

export const WorkSection = () => (
  <Card className="w-full lg:w-[55%] shadow-sm">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
        <WorkIcon className="size-5 text-zinc-400 dark:text-zinc-400" />
        <span>Work Experiences</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ol className="flex flex-col gap-6">
        <WorkExperienceItem
          title="Senior Software Engineer"
          description="Contentsquare"
          date="Mar. 2020 — Present"
        >
          <ContentsquareLogo className="text-white h-full w-full rounded-full" />
        </WorkExperienceItem>
        <WorkExperienceItem
          title="Software Engineer"
          description="Askhub"
          date="Feb. 2018 — Feb. 2020"
        >
          <AskhubLogo className="h-full w-full" />
        </WorkExperienceItem>
        <WorkExperienceItem
          title="Frontend Developer"
          description="Vynd"
          date="Mar. 2016 — Jan. 2018"
        >
          <VyndLogo className="p-0.5 h-full w-full" />
        </WorkExperienceItem>
      </ol>
    </CardContent>
    <CardFooter className="flex flex-col gap-2">
      <Link
        className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
        href="/work"
      >
        See more ...
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
        href="mailto:wassim.benamor1@gmail.com"
      >
        Do you have a mission?
      </Link>
    </CardFooter>
  </Card>
);
