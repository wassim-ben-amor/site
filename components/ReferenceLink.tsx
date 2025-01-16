import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export const ReferenceLink = ({
  href,
  className,
  children,
}: PropsWithChildren<{ href: string; className?: string }>) => (
  <>
    {" "}
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: "outline" }),
        "px-2 h-7 rounded-sm shadow-none bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-700 text-primary font-medium",
        className
      )}
    >
      {children}
    </Link>{" "}
  </>
);
