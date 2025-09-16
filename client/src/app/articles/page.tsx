import { Categories } from "@/components/articles/Categories";
import { LatestPosts } from "@/components/articles/LatestPosts";
import PopularPosts from "@/components/articles/PopularPosts";
import { SubscriptionForm } from "@/components/articles/SubscriptionForm";

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
