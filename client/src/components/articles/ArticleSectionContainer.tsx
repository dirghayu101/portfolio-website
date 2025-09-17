import { twMerge } from "tailwind-merge";

export const ArticleSectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        `container pt-20 flex flex-col items-center`,
        className
      )}
    >
      {children}
    </div>
  );
};
