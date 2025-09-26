import { Skeleton } from "@/components/ui/skeleton-lib";
import { ArticleSectionContainer } from "@/components/articles/ArticleSectionContainer";

export const PopularPostsSkeleton = () => {
  return (
    <ArticleSectionContainer>
    <div className="container flex flex-col space-y-3 items-center">
      <Skeleton className="h-[20px] w-[350px] rounded-xl bg-white/10" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px] bg-white/10" />
        <Skeleton className="h-4 w-[300px] bg-white/10" />
        <Skeleton className="h-4 w-[300px] bg-white/10" />
      </div>
    </div>
    </ArticleSectionContainer>
  );
}