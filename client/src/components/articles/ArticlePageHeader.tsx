import { ArticleSectionContainer } from "./ArticleSectionContainer";

export const ArticlePageHeader = ({heading, description}: {heading: string; description?: string}) => {
  return (
      <ArticleSectionContainer className="pt-0">
      <h1 className="font-serif text-4xl md:text-6xl text-center mt-6 capitalize">
        {heading}
      </h1>
      {description && (
        <p className="text-center text-white/60 mt-4 md:text-base max-w-xl mx-auto lg:text-lg ">
          {description}
        </p>
      )}
      </ArticleSectionContainer>
  );
};
