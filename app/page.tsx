import type { PropsWithChildren } from "react";
import Link from "next/link";

import { ContentsquareLogo } from "@/components/icons/ContentsquareLogo";
import { NodeIcon } from "@/components/icons/NodeIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { TypescriptIcon } from "@/components/icons/TypescriptIcon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WorkIcon } from "@/components/icons/WorkIcon";
import { AskhubLogo } from "@/components/icons/AskhubLogo";
import { VyndLogo } from "@/components/icons/VyndLogo";
import { DocumentIcon } from "@/components/icons/DocumentIcon";
import Image from "next/image";

const ReferenceLink = (
  props: PropsWithChildren<{ href: string; className?: string }>
) => (
  <a
    href={props.href}
    target="_blank"
    className={cn(
      "font-medium ml-1 mr-1 inline-flex gap-1 items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100",
      props.className
    )}
  >
    {props.children}
  </a>
);

const ProfileHeroSection = () => (
  <div className="flex flex-col-reverse md:flex-row transition items-center md:items-start">
    <div className="flex flex-col md:w-2/3 sm:mr-8">
      <h1 className="text-2xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
        Hello, I'm Wassim 👋
      </h1>
      <h2 className="text-xl font-bold tracking-tight text-zinc-600 dark:text-zinc-100 sm:text-xl font-mono mt-1">
        Senior Fullstack Web Developer
      </h2>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        I am a Senior Software Engineer at
        <ReferenceLink href="https://contentsquare.com/">
          <ContentsquareLogo className="size-4 text-white rounded-md" />
          Contentsquare
        </ReferenceLink>
        and based in Paris 🇫🇷, with over 8 years of experience in fullstack web
        development, with a strong specialization in frontend. My expertise lies
        in building efficient and scalable solutions using
        <ReferenceLink href="https://www.typescriptlang.org/">
          <TypescriptIcon className="size-4" />
          TypeScript
        </ReferenceLink>
        and
        <ReferenceLink href="https://nodejs.org/">
          <NodeIcon className="size-4" />
          Node.js
        </ReferenceLink>
        , with a focus on
        <ReferenceLink href="https://reactjs.org/">
          <ReactIcon className="size-4" />
          React
        </ReferenceLink>
        .
      </p>
      <div className="mt-4 text-lg flex gap-4">
        <Link className={buttonVariants({ variant: "outline" })} href="#">
          <DownloadIcon className="text-blue-500" />
          Download my resume
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="mailto:wassim.benamor1@gmail.com"
        >
          <MailIcon className="text-blue-500" />
          Contact me
        </Link>
      </div>
    </div>
    <div className="flex items-center justify-center md:w-1/3 mb-8 md:mb-0">
      <div className="rounded-full bg-white/90 p-0.5 shadow-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
        <img
          className="w-full rounded-full object-cover max-w-[18rem]"
          src="/profile.jpg"
          alt="Profile Image"
        />
      </div>
    </div>
  </div>
);

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

const WorkPostsSection = () => (
  <div className="flex text-sm gap-4">
    <Card className="w-full md:w-1/2 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
          <WorkIcon className="size-5 text-zinc-400 dark:text-zinc-400" />
          <span>Work Experiences</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-4">
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
    <div className="flex flex-col w-full md:w-1/2 ">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
            <DocumentIcon className="size-5 text-zinc-400 dark:text-zinc-300" />
            <span>Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li className="flex gap-4">
              <Link
                href="https://engineering.contentsquare.com/2021/serverside-webpage-screenshot/"
                target="_blank"
                className="flex flex-1 gap-2"
              >
                <Image
                  src="/page-screenshot-article.jpg"
                  alt="Article screenshot"
                  className="rounded-md object-cover h-14"
                  width={80}
                  height={48}
                />
                <div className="flex flex-col gap-0.5 leading-tight">
                  <span className="font-medium">
                    Full page screenshots on the server side
                  </span>
                  <span className="font- text-zinc-400">
                    Showcasing the technical solution behind efficient
                    server-side full-page screenshot capture.
                  </span>
                  <span className="font-light text-xs text-zinc-600 dark:text-zinc-400">
                    Sep 20, 2021
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-full mt-10 sm:mt-16 lg:mt-20">
      <div className="flex flex-col">
        <ProfileHeroSection />
        <Separator className="my-12 h-full" />
        <WorkPostsSection />
      </div>
    </main>
  );
}
