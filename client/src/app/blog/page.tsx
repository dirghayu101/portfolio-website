import { Categories } from "@/components/blog/Categories";
import { LatestPosts } from "@/components/blog/LatestPosts";
import PopularPosts from "@/components/blog/PopularPosts";
import { SubscriptionForm } from "@/components/blog/SubscriptionForm";

export default function Home() {
  return (
    <div>
        <LatestPosts/>
        <Categories />
        {/* <PopularPosts /> */}
        {/* <SubscriptionForm/> */}
    </div>
  );
}
