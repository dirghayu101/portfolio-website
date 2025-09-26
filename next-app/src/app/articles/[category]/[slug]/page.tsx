import { getArticles } from "@/lib/utilities/markdown-utils";
import { notFound } from "next/navigation";
import { baseUrl } from "@/lib/utilities/general-utils";
import { ReportViews } from "@/components/articles/ReportViews";
import { formatDate } from "@/lib/utilities/markdown-utils";
import { CustomMDX } from "@/components/ui/mdx";
import { BreadcrumbWithCustomSeparator } from "@/components/ui/Breadcrumb";
import { ArticleSectionContainer } from "@/components/articles/ArticleSectionContainer";
import { SubscriptionForm } from "@/components/articles/SubscriptionForm";
import { BLOG_SUBSCRIPTION_PITCH } from "@/static/articles/articles-components/2-subscription-pitch";
import { siteConfig } from "@/static/config/site";

// npm run build tells you about the static and dynamic pages in your application. generateStaticParams converts the rendered page into a static version.
export async function generateStaticParams() {
  let posts = getArticles();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; category: string };
}) {
  let post = getArticles().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/articles/${post?.metadata.category}/${post?.slug}}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const allPosts = getArticles();
  let post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* SEO stuff. */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "articlesPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/articles/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: siteConfig.author,
            },
          }),
        }}
      />
      {/* Count views. */}
      <ReportViews
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />
      <ArticleSectionContainer className="md:pt-8 pt-6">
        <div className="max-w-3xl mx-auto w-full px-4 pb-4">
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />

          <h1 className="font-serif tracking-wider text-2xl md:text-4xl py-6 sm:py-2 ">
            {post.metadata.title}
          </h1>
          <div className="flex flex-col justify-between items-start mb-4 text-sm">
            <div className="text-sm mt-2 font-light flex space-x-2">
              <span className="font-semibold">Published on:</span>
              <span className="tracking-wide">
                {formatDate(post.metadata.publishedAt)}
              </span>
            </div>
            <div className="text-sm mt-2 font-light flex space-x-2">
              <span className="font-semibold">Author:</span>{" "}
              <span className="tracking-wide">Dirghayu Joshi</span>
            </div>
          </div>
        </div>
        <article className=" max-w-3xl leading-relaxed mx-auto w-full px-4 pt-4">
          <CustomMDX source={post.content} />
        </article>
        <div className="text-center text-white/70 mt-14 text-lg font-medium">
          You have reached the end of the article 😊, thanks for reading and
          have a good day!
        </div>
        <SubscriptionForm
          heading={BLOG_SUBSCRIPTION_PITCH.heading}
          description={BLOG_SUBSCRIPTION_PITCH.description}
        />
      </ArticleSectionContainer>
    </>
  );
}
