import { twMerge } from "tailwind-merge";

export const ArticleSectionHeader = ({ heading, className }: { heading: string; className?: string }) => {
  return (
    <h2 className={twMerge( "font-serif text-6xl md:text-4xl sm:text-3xl pt-10 pb-10 text-center", className)}>
      {heading}
    </h2>
  );
};
