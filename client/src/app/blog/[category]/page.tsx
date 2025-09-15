import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";
import CardCategory from "@/components/ui/CardCategory";
import Link from "next/link";


// npm run build tells you about the static and dynamic pages in your application. generateStaticParams converts the rendered page into a static version.
export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

export default function Home({ params }: { params: { category: string } }) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );
  if (!posts.length) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">
            {posts[0]?.metadata.category}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            }) 
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
