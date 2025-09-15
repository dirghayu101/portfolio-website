import { getBlogPosts } from "@/app/blog/utils";
import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { ReportViews } from "@/components/blog/ReportViews";
import Header  from "@/components/ui/Header";
import Container from "@/components/ui/Container";
import { formatDate } from "@/app/blog/utils";
import { CustomMDX } from "@/components/ui/mdx";
import { BreadcrumbWithCustomSeparator } from "@/components/ui/breadcrumb";

// npm run build tells you about the static and dynamic pages in your application. generateStaticParams converts the rendered page into a static version.
export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Home({
  params,
}: {
  params: { category: string; slug: string };
}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Coding Jitsu Blog",
            },
          }),
        }}
      />
      <ReportViews
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}
