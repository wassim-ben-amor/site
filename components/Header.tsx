"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

const DesktopNavItem = (props: PropsWithChildren<{ href: string }>) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={props.href}
        className={cn(
          pathname === props.href ? "text-blue-500 dark:text-blue-400" : "",
          "relative block px-3 py-2.5 transition hover:text-blue-500 dark:hover:text-blue-400"
        )}  
      >
        {props.children}
      </Link>
    </li>
  );
};

const DesktopNav = () => (
  <ul className="flex items-center rounded-full px-4 text-sm font-medium shadow-custom">
    <DesktopNavItem href="/">Home</DesktopNavItem>
    <DesktopNavItem href="/work">Work</DesktopNavItem>
  </ul>
);

const Avatar = () => (
  <div className="size-11 rounded-full p-0.5 shadow-custom hidden sm:block">
    <Link href="/" aria-label="Home">
      <Image
        width={40}
        height={40}
        className="rounded-full object-cover"
        src="/avatar.jpg"
        alt="Profile Image"
      />
    </Link>
  </div>
);

const Socials = () => (
  <div className="flex gap-4">
    <Link
      className="size-5 text-primary/60 transition hover:text-[#0A66C2]"
      href="https://www.linkedin.com/in/wassim-ben-amor/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon />
    </Link>
    <Link
      className="size-5 text-primary/60 transition hover:text-black dark:hover:text-[#fafafa]"
      href="https://github.com/wassim-ben-amor"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </Link>
    <Link
      className="size-5 text-primary/60 transition hover:text-blue-500 dark:hover:text-[#fafafa]"
      href="mailto:wassim.benamor1@gmail.com"
    >
      <MailIcon />
    </Link>
  </div>
);

const DarkModeToggle = () => {
  const toggleMode = () => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full px-3 py-2 shadow-custom cursor-pointer"
      onClick={toggleMode}
    >
      <SunIcon className="dark:hidden size-6 fill-zinc-100 stroke-zinc-500 group-hover:fill-zinc-100 group-hover:stroke-blue-500" />
      <MoonIcon className="dark:block hidden size-6 dark:group-hover:stroke-zinc-400 dark:fill-blue-400/10 dark:stroke-blue-500" />
    </button>
  );
};

export const Header = () => {
  return (
    <header className="relative z-50 h-16 pt-6 flex justify-between">
      <Avatar />
      <DesktopNav />
      <div className="flex items-center gap-4">
        <Socials />
        <DarkModeToggle />
      </div>
    </header>
  );
};
