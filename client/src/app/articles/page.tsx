import { ArticlePageHeader } from "@/components/articles/ArticlePageHeader";
import { AllCategories } from "@/components/articles/AllCategories";
import { LatestPosts } from "@/components/articles/LatestPosts";
import PopularPosts from "@/components/articles/PopularPosts";
import { SubscriptionForm } from "@/components/articles/SubscriptionForm";
import { getArticlesMetadata } from "@/lib/utilities/markdown-utils";

export default function Home() {
  const allPosts = getArticlesMetadata();
  return (
    <div>
      <ArticlePageHeader />
      <PopularPosts allPosts={allPosts}/>
      <LatestPosts allPosts={allPosts} />
      <AllCategories allPosts={allPosts} />
      <SubscriptionForm />
    </div>
  );
}
