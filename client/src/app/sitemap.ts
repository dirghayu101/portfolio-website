import { getArticles } from "../lib/utilities/markdown-utils";
import { baseUrl } from "@/lib/utilities/general-utils";

export default async function sitemap() {
  const allArticles = getArticles();

  const articles = allArticles.map((post) => ({
    url: `${baseUrl}/articles/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // Add categories to the sitemap
  const categoriesMap: Map<string, string> = new Map();
  allArticles.map((article) => {
    const date = categoriesMap.get(article.metadata.category)
    if(date){
      let dateCurrent = new Date(date)
      let dateNew = new Date(article.metadata.publishedAt)
      if(dateNew > dateCurrent)
        categoriesMap.set(article.metadata.category, article.metadata.publishedAt)
    } else {
      categoriesMap.set(article.metadata.category, article.metadata.publishedAt)
    }
  })
  const categoryRoutes: { url: string; lastModified: string }[] = []
  categoriesMap.forEach((value, key) => {
    categoryRoutes.push({
      url: `${baseUrl}/articles/${key}`,
      lastModified: value
    })
  })


  return [...articles, ...categoryRoutes];
}
