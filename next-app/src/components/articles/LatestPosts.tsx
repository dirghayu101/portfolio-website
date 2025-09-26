import { formatDate } from "@/lib/utilities/markdown-utils";
import Link from "next/link";
import { ArticleSectionHeader } from "./ArticleSectionHeader";
import { ArticleSectionContainer } from "./ArticleSectionContainer";
import { ArticleListDescriptive } from "./ArticleListDescriptive";

export const LatestPosts = ({ allPosts }: { allPosts: any[] }) => {
  const formattedPosts = allPosts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3)
    .map((post) => ({
      title: post.metadata.title,
      slug: post.slug,
      category: post.metadata.category,
      summary: post.metadata.summary,
      date: formatDate(post.metadata.publishedAt),
    }));
  return (
    <ArticleSectionContainer>
      <ArticleSectionHeader heading="Latest Posts" />
      <ArticleListDescriptive posts={formattedPosts} />
    </ArticleSectionContainer>
  );
};
