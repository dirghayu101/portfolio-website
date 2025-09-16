import { ARTICLE_SECTION_HEADER } from "@/static/articles/articles-components/1-article-section-header";

export const ArticleHeader = () => {
  return (
    <div className="container pb-20 pt-20 ">
      <h1 className="font-serif text-7xl md:text-7xl text-center mt-6 sm:text-6xl">
        {ARTICLE_SECTION_HEADER.title}
      </h1>
      <p className="text-center text-white/60 mt-4 md:text-base max-w-xl mx-auto lg:text-lg ">
        {ARTICLE_SECTION_HEADER.description}
      </p>
    </div>
  );
};
