import { twMerge } from "tailwind-merge";

export const ArticleSectionHeader = ({ heading, className }: { heading: string; className?: string }) => {
  return (
    <h2 className={twMerge( "font-serif text-3xl md:text-5xl md:py-10 text-center", className)}>
      {heading}
    </h2>
  );
};
