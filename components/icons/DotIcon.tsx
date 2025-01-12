import { ComponentPropsWithoutRef } from "react";

export const DotIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg {...props} viewBox="0 0 6 6" aria-hidden="true">
      <circle cx="3" cy="3" r="3" fill="currentColor"></circle>
    </svg>
  );
};
