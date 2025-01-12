import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const ReferenceLink = (
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
