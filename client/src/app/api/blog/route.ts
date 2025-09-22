import { db } from "@/db";

// GET request to fetch the top 5 popular posts based on view count.
export async function GET() {
  try {
    const data = await db.articles.findMany({
      take: 5,
      select: { title: true, category: true, slug: true },
      orderBy: [{ view_count: "desc" }],
    });

    return Response.json(data);
  } catch (error) {
    console.error("Database Error...", error);
    throw new Error("Failed to fetch the popular posts");
  }
}

// POST request to update the view count of an article.
export async function POST(request: Request) {
  const { slug, title, category } = await request.json();

  try {
    const existingPost = await db.articles.findUnique({
      where: { slug: slug },
    });

    if (existingPost) {
      await db.articles.update({
        where: { slug: slug },
        data: {
          view_count: { increment: 1 },
        },
      });
    } else {
      await db.articles.create({
        data: {
          slug: slug,
          title: title,
          category: category,
        },
      });
    }
  } catch (error) {
    console.error("Error updating page view", error);
    return new Response("Failed to post to DB", { status: 500 });
  }

  return new Response("Successfully posted to DB", { status: 200 });
}

