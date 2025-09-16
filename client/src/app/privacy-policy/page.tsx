import Container from "@/components/ui/Container";
import { getPrivacyPolicy } from "@/lib/utilities/markdown-utils";
import { CustomMDX } from "@/components/ui/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "This page explains the Privacy Policy of the site.",
};

export default function Page() {
  let post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy");

  return (
    <Container>
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}
