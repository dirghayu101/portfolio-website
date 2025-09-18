import { ArticlePageHeader } from "@/components/articles/ArticlePageHeader";
import { AllCategories } from "@/components/articles/AllCategories";
import { LatestPosts } from "@/components/articles/LatestPosts";
import { PopularPosts } from "@/components/articles/PopularPosts";
import { SubscriptionForm } from "@/components/articles/SubscriptionForm";
import { getArticlesMetadata } from "@/lib/utilities/markdown-utils";
import { ARTICLE_SECTION_HEADER } from "@/static/articles/articles-components/1-article-section-header";

export default function Home() {
  const allPosts = getArticlesMetadata();
  return (
    <div>
      <ArticlePageHeader heading={ARTICLE_SECTION_HEADER.title} description={ARTICLE_SECTION_HEADER.description} />
      <AllCategories allPosts={allPosts} />
      <PopularPosts allPosts={allPosts}/>
      <LatestPosts allPosts={allPosts} />
      <SubscriptionForm />
    </div>
  );
}
