import Link from "next/link";
import { PropsWithChildren } from "react";

import { ClickArrowIcon } from "@/components/icons/ClickArrowIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { Card } from "@/components/ui/card";

const ContactItem = (
  props: PropsWithChildren<{
    image: string;
    name: string;
    description: string;
    href: string;
  }>
) => (
  <Link href={props.href} className="flex-1 min-w-72 group" target="_blank">
    <Card className="shadow-sm p-4 relative rounded-lg">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[3px] border-white bg-white">
            {props.children}
          </span>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{props.name}</h3>
          <p className="text-primary/75 text-sm">{props.description}</p>
        </div>
      </div>
      <ClickArrowIcon className="bg-blue-500 text-white" />
    </Card>
  </Link>
);

export const ContactSection = () => (
  <div className="flex flex-col">
    <h1 className="text-xl font-semibold">Contact me</h1>
    <h2 className="text-primary/75">
      Find me on my social networks or contact me via email.
    </h2>
    <div className="flex mt-4 gap-4 flex-wrap">
      <ContactItem
        image="/profile.jpg"
        name="wassim-ben-amor"
        description="My Github profile"
        href="https://github.com/wassim-ben-amor"
      >
        <GithubIcon className="dark:text-black" />
      </ContactItem>
      <ContactItem
        image="/profile.jpg"
        name="wassim-ben-amor"
        description="My Linkedin profile"
        href="https://www.linkedin.com/in/wassim-ben-amor/"
      >
        <LinkedinIcon className="text-[#0A66C2]" />
      </ContactItem>
      <ContactItem
        image="/profile.jpg"
        name="wassim.benamor1@gmail.com"
        description="Send me an email"
        href="mailto:wassim.benamor1@gmail.com"
      >
        <MailIcon className="dark:text-blue-500" />
      </ContactItem>
    </div>
  </div>
);
