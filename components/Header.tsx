"use client";

import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

const DesktopNavItem = (props: PropsWithChildren<{ href: string }>) => (
  <li>
    <Link
      href={props.href}
      className="relative block px-3 py-2.5 transition active:text-blue-500 dark:active:text-blue-400 hover:text-blue-500 dark:hover:text-blue-400 dark:text-white"
    >
      {props.children}
    </Link>
  </li>
);
const DesktopNav = () => (
  <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
    <DesktopNavItem href="/">Home</DesktopNavItem>
    <DesktopNavItem href="/work">Work</DesktopNavItem>
  </ul>
);

const Avatar = () => (
  <div className="size-11 rounded-full bg-white/90 p-0.5 shadow-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
    <Link href="/" aria-label="Home">
      <img
        className="size-10 rounded-full object-cover"
        src="/avatar.jpg"
        alt="Profile Image"
      />
    </Link>
  </div>
);

const Socials = () => (
  <div>
    Socials here
  </div>
)

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
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-blue-50 [@media(prefers-color-scheme:dark)]:stroke-blue-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-blue-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-blue-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-blue-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-blue-500" />
    </button>
  );
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
