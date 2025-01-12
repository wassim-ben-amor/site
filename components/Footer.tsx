import Link from "next/link";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <Separator className="mt-16 mb-6" />
      <div className="font-light text-sm">
        © Wassim Ben Amor 2025. All rights reserved.
      </div>
      <div className="mt-2 flex gap-4 font-light text-base">
        <Link href="/home">Home</Link>
        <Link href="/work">Work</Link>
      </div>
    </footer>
  );
};
