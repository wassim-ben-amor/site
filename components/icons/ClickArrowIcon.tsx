import { cn } from "@/lib/utils";

export const ClickArrowIcon = (props: { className?: string }) => {
  return (
    <span
      className={cn(
        "pointer-events-none absolute bottom-4 right-4 rounded-full bg-zinc-900 p-2 text-zinc-300",
        props.className
      )}
      aria-hidden="true"
    >
      <svg
        className="size-4 transition duration-300 ease-in-out group-hover:rotate-45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
      </svg>
    </span>
  );
};
