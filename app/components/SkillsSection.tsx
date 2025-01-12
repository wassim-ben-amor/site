import { PropsWithChildren } from "react";

import { AngularIcon } from "@/components/icons/AngularIcon";
import { AWSIcon } from "@/components/icons/AWSIcon";
import { GithubActionsIcon } from "@/components/icons/GithubActionsIcon";
import { JavascriptIcon } from "@/components/icons/JavascriptIcon";
import { NestIcon } from "@/components/icons/NestIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { NodeIcon } from "@/components/icons/NodeIcon";
import { PostgresqlIcon } from "@/components/icons/PostgresqlIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { ReduxIcon } from "@/components/icons/ReduxIcon";
import { SkillIcon } from "@/components/icons/SkillIcon";
import { TurborepoIcon } from "@/components/icons/TurborepoIcon";
import { TypescriptIcon } from "@/components/icons/TypescriptIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillItem = (props: PropsWithChildren<{ title: string }>) => (
  <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger>{props.children}</TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{props.title}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const SkillsSection = () => (
  <Card className="shadow-sm flex-1">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
        <SkillIcon className="size-5 text-zinc-400 dark:text-zinc-300" />
        <span>Skills</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex gap-6 flex-wrap">
      <SkillItem title="Javascript">
        <JavascriptIcon className="size-6 rounded-md text-zinc-200 hover:text-[#F7DF1E] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Typescript">
        <TypescriptIcon className="size-6 rounded-md text-zinc-300 hover:text-[#3178C6] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Node.js">
        <NodeIcon className="size-6 rounded-md text-zinc-400 hover:text-[#539E43] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Nest.js">
        <NestIcon className="size-6 rounded-md text-zinc-300 hover:text-[#E0234E] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="React">
        <ReactIcon className="size-6 text-zinc-400 hover:text-[#00D8FF] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Redux">
        <ReduxIcon className="size-6 text-zinc-400 hover:text-[#764ABC] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Next.js">
        <NextIcon className="size-6 text-zinc-400 hover:text-black transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Angular">
        <div className="group">
          <AngularIcon className="size-6 text-zinc-400 transition-transform hover:scale-125" />
        </div>
      </SkillItem>
      <SkillItem title="PostgreSQL">
        <PostgresqlIcon className="size-6 text-zinc-400 hover:text-[#336791] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Github Actions">
        <GithubActionsIcon className="size-6 text-zinc-400 hover:text-[#4A7EBF] transition-transform hover:scale-125" />
      </SkillItem>
      <SkillItem title="Turborepo">
        <div className="group">
          <TurborepoIcon className="size-6 text-zinc-400 transition-transform hover:scale-125" />
        </div>
      </SkillItem>
      <SkillItem title="Amzon Web Services">
        <AWSIcon className="size-6 text-zinc-400 transition-transform hover:scale-125 hover:text-[#FF9900]" />
      </SkillItem>
    </CardContent>
  </Card>
);
