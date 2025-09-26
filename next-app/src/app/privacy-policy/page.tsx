import Container from "@/components/ui/Container";
import { getPrivacyPolicy } from "@/lib/utilities/markdown-utils";
import { CustomMDX } from "@/components/ui/mdx";
import { Metadata } from "next";
import { ArticleSectionContainer } from "@/components/articles/ArticleSectionContainer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "This page explains the Privacy Policy of the site.",
};

export default function Page() {
  let post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy");

  return (
    <ArticleSectionContainer className="pb-4 mb-6">
        <article className=" max-w-3xl leading-relaxed mx-auto w-full px-4 pt-4">
          <CustomMDX source={post?.content} />
        </article>
    </ArticleSectionContainer>
  );
}
