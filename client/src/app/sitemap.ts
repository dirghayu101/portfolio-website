import { CATEGORIES } from "@/app/static/blog/blog-components/categories";
import { getBlogPosts } from "./blog/utils";

// NOTE: ENV here.
export const baseUrl = "https://next-blog-cj.vercel.app";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = CATEGORIES.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogs, ...routes];
}
