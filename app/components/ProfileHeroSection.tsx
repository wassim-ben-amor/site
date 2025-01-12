import Link from "next/link";

import { ContentsquareLogo } from "@/components/icons/ContentsquareLogo";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { NodeIcon } from "@/components/icons/NodeIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { TypescriptIcon } from "@/components/icons/TypescriptIcon";
import { ReferenceLink } from "@/components/ReferenceLink";
import { buttonVariants } from "@/components/ui/button";

export const ProfileHeroSection = () => (
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
          <TypescriptIcon className="size-4 text-[#3178C6]" />
          TypeScript
        </ReferenceLink>
        and
        <ReferenceLink href="https://nodejs.org/">
          <NodeIcon className="size-4 text-[#539E43]" />
          Node.js
        </ReferenceLink>
        , with a focus on
        <ReferenceLink href="https://reactjs.org/">
          <ReactIcon className="size-4 text-[#00D8FF]" />
          React
        </ReferenceLink>
        .
      </p>
      <div className="mt-8 text-lg flex gap-4">
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
