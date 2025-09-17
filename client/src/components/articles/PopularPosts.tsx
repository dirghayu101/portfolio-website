"use client";

// import { popularPosts } from "@/lib/placeholder-data";
import { fetcher, fetchUrl } from "@/lib/utilities/general-utils";
import useSWR from "swr";
import { PopularPostsSkeleton } from "@/components/ui/PopularPostsSkeleton";
import { ArticleSectionHeader } from "./ArticleSectionHeader";
import { ArticleSectionContainer } from "./ArticleSectionContainer";
import { ArticleListDescriptive } from "./ArticleListDescriptive";

export default function PopularPosts({ allPosts, header }: { allPosts: any[], header?: string }) {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <></>;
  if (isLoading) return <PopularPostsSkeleton />;

  const popularPosts = allPosts
    .filter((post) =>
      data?.some(
        (p: { title: string; slug: string; category: string }) =>
          p.slug === post.slug && p.category === post.metadata.category
      )
    )
    .map((post) => ({
      title: post.metadata.title,
      slug: post.slug,
      category: post.metadata.category,
      summary: post.metadata.summary,
    }))
    .slice(0, 3);

  return (
    <ArticleSectionContainer>
      <ArticleSectionHeader heading={header || "Popular Posts"} />
      <ArticleListDescriptive posts={popularPosts} />
    </ArticleSectionContainer>
  );
}
