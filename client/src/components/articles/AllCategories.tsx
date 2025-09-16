import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AllCategories = ({ allPosts }: { allPosts: any[] }) => {
  const grouped = new Map<
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

  return (
    <div className="container pb-20">
      <h2 className="font-serif text-4xl md:text-4xl sm:text-3xl pt-10 pb-6">
        Articles by Topics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
        {Array.from(grouped.entries()).map(([category, posts]) => {
          return (
            <div key={category} className="p-4">
              <h3 className="text-base font-light  mb-6 uppercase">
                <Link
                  href={`/articles/${category}`}
                  className="hover:underline"
                >
                  {category}
                </Link>
              </h3>

              <ul className="list-none">
                {posts.slice(0, 3).map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/articles/${category}/${post.slug}`}
                      className="hover:underline"
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
                    className="inline-flex text-sm items-center gap-1.5 hover:text-blue-500 shadow transition-transform duration-300 ease-in-out hover:scale-101"
                  >
                    <div
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-white"
                    >
                      <ArrowRight className="size-4 text-black/50" />
                    </div>
                    <span className="uppercase font-light">View all {category} articles</span>
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
