import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleSectionHeader } from "./ArticleSectionHeader";

export const AllCategories = ({ allPosts }: { allPosts: any[] }) => {
  let grouped = new Map<
    string,
    { title: string; slug: string; publishedAt: string }[]
  >();

  allPosts
    // sort latest to earliest
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    // group by category
    .forEach((post) => {
      const { category, title, publishedAt } = post.metadata;
      const entry = { title, slug: post.slug, publishedAt };
      if (!grouped.has(category)) {
        grouped.set(category, []);
      }
      grouped.get(category)!.push(entry);
    });

  grouped = new Map(
    [...grouped.entries()].sort((a, b) => a[1].length - b[1].length)
  );
  return (
    <div className="container pb-20">
      <ArticleSectionHeader heading="Articles by Topics" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {Array.from(grouped.entries()).map(([category, posts]) => {
          return (
            <div key={category} className="p-4 h-full">
              <h3 className="text-base font-light mb-6 uppercase">
                <Link
                  href={`/articles/${category}`}
                  className="transition-transform duration-300 ease-in-out hover:scale-110 hover:font-semibold"
                >
                  {category}
                </Link>
              </h3>

              <ul className="list-none">
                {posts.slice(0, 3).map((post) => (
                  <li
                    key={post.slug}
                    className="border-b border-gray-200 last:border-b-0 p-2"
                  >
                    <Link
                      href={`/articles/${category}/${post.slug}`}
                      className="hover:underline font-light hover:font-normal transition-transform duration-300"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {posts.length > 3 && (
                <div className="mt-4">
                  <Link
                    href={`/articles/${category}`}
                    className="group inline-flex text-sm items-center gap-1.5 shadow transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white transition-colors duration-300 group-hover:bg-emerald-400">
                      <ArrowRight className=" transition-transform duration-300 size-4 text-black/50 group-hover:text-white" />
                    </div>
                    <span className="uppercase font-light text-sm transition-transform duration-300 group-hover:font-semibold">
                      View all {category} articles
                    </span>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
