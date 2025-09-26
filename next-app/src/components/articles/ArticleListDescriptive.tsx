import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const ArticleListDescriptive = ({
  posts,
}: {
  posts: {
    title: string;
    summary: string;
    slug: string;
    category: string;
    date?:  string;
  }[];
}) => {
  return (
    <div className="grid grid-cols-1 divide-y  divide-gray-200 rounded-lg overflow-hidden shadow-sm">
      {posts.map((post) => (
        <div key={post.slug} className="p-6 ">
          <Link href={`/articles/${post.category}/${post.slug}`}>
            <h3 className="md:text-lg text-base font-light mb-2 hover:font-semibold">{post.title}</h3>
          </Link>
          <p className="md:text-base text-sm mb-4 font-normal text-white/60">{post.summary}</p>

          <div className="flex md:flex-row flex-col md:justify-between  md:items-center items-start justify-start md:gap-0 gap-2">
            <Link
              href={`/articles/${post.category}/${post.slug}`}
              className="flex items-center  md:text-base text-sm font-light hover:font-semibold"
            >
              Read More <ArrowUpRight className="ml-2 size-4" />
            </Link>
            {post.date && (
              <p className="md:text-base text-sm font-light ">
                {post.date}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
