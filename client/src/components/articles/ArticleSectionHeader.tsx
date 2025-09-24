import { twMerge } from "tailwind-merge";

export const ArticleSectionHeader = ({ heading, className }: { heading: string; className?: string }) => {
  return (
    <h2 className={twMerge( "font-serif text-3xl md:text-5xl md:pt-10 md:pb-4 text-center", className)}>
      {heading}
    </h2>
  );
};
