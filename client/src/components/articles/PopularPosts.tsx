"use client";

// import { popularPosts } from "@/lib/placeholder-data";
import { fetcher, fetchUrl } from "@/lib/utilities/general-utils";
import ArrowRight  from "@/assets/icons/arrow-right.svg";
import Link from "next/link";
import useSWR from "swr";
import { PopularPostsSkeleton } from "@/components/ui/PopularPostsSkeleton";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
 
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <PopularPostsSkeleton />;

  return (
    <ul className="overflow-auto">
      {data?.map((post: { category: string; slug: string; title: string }) => (
        <Link href={`/articles/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
