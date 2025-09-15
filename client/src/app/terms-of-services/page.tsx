import Container from "@/components/ui/Container";
import { getTermsOfServices } from "../blog/utils";
import { CustomMDX } from "@/components/ui/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Services",
  description: "This page explains the terms of use of the site.",
};

export default function Page() {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );

  return (
    <Container>
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}
