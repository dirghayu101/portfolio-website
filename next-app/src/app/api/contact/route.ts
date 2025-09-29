import { db } from "@/db";

// POST request for the contact form submission.
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }
  if(!email.includes("@")){
    return new Response("Invalid email address", { status: 400 });
  }
  try {
    await db.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });
  } catch (error) {
    console.error("Error saving contact message", error);
    return new Response("Failed to save contact message", { status: 500 });
  }

  return new Response("Contact message saved successfully", { status: 200 });
}