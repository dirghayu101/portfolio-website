import { notFound } from "next/navigation";
import { getArticlesMetadata } from "@/lib/utilities/markdown-utils";
import { ArticlePageHeader } from "@/components/articles/ArticlePageHeader";
import { ArticleListDescriptive } from "@/components/articles/ArticleListDescriptive";
import { ArticleSectionContainer } from "@/components/articles/ArticleSectionContainer";
import { SubscriptionForm } from "@/components/articles/SubscriptionForm";
import { PopularPosts } from "@/components/articles/PopularPosts";

// npm run build tells you about the static and dynamic pages in your application. generateStaticParams converts the rendered page into a static version.
export async function generateStaticParams() {
  let posts = getArticlesMetadata();

  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  let { category } = params;
  if (category === "cs-fundamentals") {
    category = "CS Fundamentals";
  } else {
    category = category.toLocaleUpperCase();
  }

  return {
    title: category,
    description: `All articles regarding ${category}`,
  };
}

export default function Home({ params }: { params: { category: string } }) {
  const allPosts = getArticlesMetadata();

  let category = params.category;
  if (category === "cs-fundamentals") {
    category = "CS Fundamentals";
  } else {
    category = category.toLocaleUpperCase();
  }

  let posts = allPosts
    .filter((post) => post.metadata.category === params.category)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map((post) => {
      return {
        title: post.metadata.title,
        summary: post.metadata.summary,
        slug: post.slug,
        category: post.metadata.category,
        date: post.metadata.publishedAt,
      };
    });
  if (!posts.length) {
    notFound();
  }
  return (
    <div className="min-h-screen">
      <ArticlePageHeader
        heading={category}
        description={`All articles regarding ${category}.`}
      />
      <ArticleSectionContainer>
        <ArticleListDescriptive posts={posts} />
      </ArticleSectionContainer>

      <PopularPosts allPosts={allPosts} header="Other Popular Posts" />
      <SubscriptionForm />
    </div>
  );
}
