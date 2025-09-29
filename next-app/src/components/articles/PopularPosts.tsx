"use client";

import { fetcher, fetchUrl, baseUrl } from "@/lib/utilities/general-utils";
import useSWR from "swr";
import { PopularPostsSkeleton } from "@/components/ui/PopularPostsSkeleton";
import { ArticleSectionHeader } from "./ArticleSectionHeader";
import { ArticleSectionContainer } from "./ArticleSectionContainer";
import { ArticleListDescriptive } from "./ArticleListDescriptive";

export const PopularPosts = ({ allPosts, header }: { allPosts: any[], header?: string }) => {
  const blogUrl = `${fetchUrl}/blog`;
  const { data, error, isLoading } = useSWR(blogUrl, fetcher);

  if (error) return <></>;
  if (isLoading) return <PopularPostsSkeleton />;

  const popularPosts = allPosts
    .filter((post) =>
      data?.some(
        (p: { title: string; slug: string; category: string }) =>
          p.slug === post.slug
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
