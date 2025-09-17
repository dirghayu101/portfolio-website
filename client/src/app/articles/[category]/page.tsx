import { notFound } from "next/navigation";
import { getArticlesMetadata } from "@/lib/utilities/markdown-utils";
import { ArticlePageHeader } from "@/components/articles/ArticlePageHeader";
import { ArticleListDescriptive } from "@/components/articles/ArticleListDescriptive";
import { ArticleSectionContainer } from "@/components/articles/ArticleSectionContainer";
import PopularPosts from "@/components/articles/PopularPosts";
import { SubscriptionForm } from "@/components/articles/SubscriptionForm";

// npm run build tells you about the static and dynamic pages in your application. generateStaticParams converts the rendered page into a static version.
export async function generateStaticParams() {
  let posts = getArticlesMetadata();

  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  let { category } = params;

  return {
    title: category.toLocaleUpperCase(),
    description: `All articles regarding ${category}`,
  };
}

export default function Home({ params }: { params: { category: string } }) {
  const allPosts = getArticlesMetadata();
  let posts = allPosts
    .filter((post) => post.metadata.category === params.category)
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    )
    .map((post) => {
      return {
        title: post.metadata.title,
        summary: post.metadata.summary,
        slug: post.slug,
        category: post.metadata.category,
        date: post.metadata.date,
      };
    });
  console.log(posts);
  if (!posts.length) {
    notFound();
  }
  return (
    <div className="min-h-screen">
      <ArticlePageHeader
        heading={posts[0]?.category}
        description={`All articles regarding ${
          posts[0]?.category.charAt(0).toUpperCase() +
          posts[0]?.category.slice(1)
        }.`}
      />
      <ArticleSectionContainer>
        <ArticleListDescriptive posts={posts} />
      </ArticleSectionContainer>

      <PopularPosts allPosts={allPosts} header="Other Popular Posts" />
      <SubscriptionForm />
    </div>
  );
}
