import Link from "next/link";

import { AngularColoredIcon } from "@/components/icons/AngularColoredIcon";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { NestIcon } from "@/components/icons/NestIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { NodeIcon } from "@/components/icons/NodeIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { TypescriptIcon } from "@/components/icons/TypescriptIcon";
import { ReferenceLink } from "@/components/ReferenceLink";
import { buttonVariants } from "@/components/ui/button";

export const ProfileHeroSection = () => (
  <div className="flex flex-col-reverse lg:flex-row transition items-center lg:items-center">
    <div className="flex flex-col lg:w-2/3 lg:mr-16">
      <h1 className="text-2xl font-extrabold tracking-tight text-primary/90 sm:text-4xl">
        <span className="text-blue-500">Hello, I'm </span>Wassim 👋
      </h1>
      <h2 className="text-xl font-bold tracking-tight text-primary/75 sm:text-xl font-mono mt-1">
        Senior Fullstack Web Developer
      </h2>
      <p className="mt-4 text-lg text-primary/75 text-justify">
        I'm a Senior Software Engineer based in Paris 🇫🇷, driven by my passion
        for the JavaScript ecosystem. I focus on delivering modern, scalable,
        and robust web applications.
      </p>
      <p className="mt-4 text-lg text-primary/75 text-justify">
        With over 8 years of experience in fullstack development, I specialize
        in frontend frameworks like
        <ReferenceLink href="https://reactjs.org/">
          <ReactIcon className="size-4 text-[#00D8FF]" />
          React
        </ReferenceLink>
        ,
        <ReferenceLink href="https://nextjs.org/">
          <NextIcon className="size-4 text-black dark:text-white" />
          Next.js
        </ReferenceLink>
        , and
        <ReferenceLink href="https://angular.dev/">
          <AngularColoredIcon className="size-4" />
          Angular
        </ReferenceLink>
        , leveraging
        <ReferenceLink href="https://typescriptlang.org/">
          <TypescriptIcon className="size-4 text-[#3178C6]" />
          Typescript
        </ReferenceLink>
        for maintainable and efficient code. On the backend, I work with
        <ReferenceLink href="https://typescriptlang.org/">
          <NodeIcon className="size-4 text-[#539E43]" />
          Node.js
        </ReferenceLink>
        frameworks like
        <ReferenceLink href="https://nestjs.com/">
          <NestIcon className="size-4 text-[#E0234E]" />
          NestJs
        </ReferenceLink>
        .
      </p>
      <p className="mt-4 text-lg text-primary/75 text-justify">
        Beyond coding, I love exploring innovative ways to enhance developer
        experience and streamline workflows. Whether it's architecting
        micro-frontends, optimizing CI/CD pipelines, or mentoring others, I'm
        always excited to tackle challenging projects.
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
    <div className="flex items-center justify-center lg:w-1/3 mb-8">
      <div className="rounded-full shadow-custom">
        <img
          className="w-full rounded-full object-cover max-w-[18rem]"
          src="/profile.jpg"
          alt="Profile Image"
        />
      </div>
    </div>
  </div>
);
