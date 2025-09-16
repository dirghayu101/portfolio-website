import { CATEGORIES } from "@/static/articles/articles-components/categories";
import { getArticles } from "../lib/utilities/markdown-utils";
import { baseUrl } from "@/lib/utilities/general-utils";

export default async function sitemap() {
  let articles = getArticles().map((post) => ({
    url: `${baseUrl}/articles/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = CATEGORIES.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...articles, ...routes];
}
