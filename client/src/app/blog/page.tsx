import { Categories } from "@/components/blog/Categories";
import { LatestPosts } from "@/components/blog/LatestPosts";
import PopularPosts from "@/components/blog/PopularPosts";

export default function Home() {
  return (
    <div>
        <LatestPosts/>
        <Categories />
        <PopularPosts />
    </div>
  );
}
