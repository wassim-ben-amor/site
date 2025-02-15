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
  props: PropsWithChildren<{ company: string; title: string; date: string }>
) => (
  <li className="flex justify-between">
    <div className="flex flex-1 gap-3 items-center">
      <span className="rounded-full flex items-center justify-center min-h-10 min-w-10 size-10 p-0.5 shadow-custom">
        {props.children}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-medium text-primary/80">{props.company}</span>
        <span className="text-sm text-primary/80">
          {props.title}
        </span>
      </div>
    </div>
    <span className="font-normal text-sm text-right text-primary/70">{props.date}</span>
  </li>
);

export const WorkSection = () => (
  <Card className="w-full lg:w-[55%] shadow-xs">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-primary/80">
        <WorkIcon className="size-5 text-blue-500" />
        <span>Work Experiences</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ol className="flex flex-col gap-6">
        <WorkExperienceItem
          company="Contentsquare"
          title="Senior Software Engineer"
          date="Mar. 2020 — Present"
        >
          <ContentsquareLogo className="text-white h-full bg-[#7C0033] w-full rounded-full" />
        </WorkExperienceItem>
        <WorkExperienceItem
          company="Askhub"
          title="Technical Lead"
          date="Feb. 2018 — Feb. 2020"
        >
          <AskhubLogo className="h-full w-full dark:bg-white rounded-full" />
        </WorkExperienceItem>
        <WorkExperienceItem
          company="Vynd"
          title="Frontend Developer"
          date="Mar. 2016 — Jan. 2018"
        >
          <VyndLogo className="p-0.5 h-full w-full dark:bg-white rounded-full" />
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
