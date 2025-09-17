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
          <h3 className="text-lg font-light mb-2">{post.title}</h3>
          <p className="text-base mb-4 font-normal">{post.summary}</p>
          
          <div className="flex flex-row justify-between items-center">
            <Link
              href={`/articles/${post.category}/${post.slug}`}
              className="flex items-center  text-base font-light hover:font-bold"
            >
              Read More <ArrowUpRight className="ml-2 size-4" />
            </Link>
            {post.date && (
              <p className="text-sm font-light">
                {post.date}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
