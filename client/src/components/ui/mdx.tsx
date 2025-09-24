import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from "remark-gfm";

function CustomLink(props: any) {
  const href = props.href;
  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
};

export function CustomMDX(props: any) {
  return (
    <div className="prose prose-invert max-w-none">
       <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypePrism],
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
