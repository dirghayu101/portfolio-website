import { getTermsOfServices } from "@/lib/utilities/markdown-utils";
import { CustomMDX } from "@/components/ui/mdx";
import { Metadata } from "next";
import { ArticleSectionContainer } from "@/components/articles/ArticleSectionContainer";

export const metadata: Metadata = {
  title: "Terms Of Services",
  description: "This page explains the terms of use of the site.",
};

export default function Page() {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );

  return (
     <ArticleSectionContainer className="pb-4 mb-6">
            <article className=" max-w-3xl leading-relaxed mx-auto w-full px-4 pt-4">
        <CustomMDX source={post?.content} />
      </article>
    </ArticleSectionContainer>
  );
}
