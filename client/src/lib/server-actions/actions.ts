"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { promises as dns } from "dns";

// Email Validation
export async function validateEmailAddress(emailAddress: string) {
  const invalidDomains = [
    "tempmail.com",
    "example.com",
    "email.com",
    "eamil.com",
    "test.com",
  ];
  const [user, domain] = emailAddress.split("@");

  // Example custom logic: Ensure domain exists and isn't blacklisted
  if (invalidDomains.includes(domain)) {
    return false; // Invalid if domain is blacklisted
  }

  try {
    const mxRecords = await dns.resolveMx(domain);

    if (!mxRecords || mxRecords.length === 0) {
      return false;
    }
    return true;
  } catch (error: any) {
    console.error(error.code);
  }
}

const FormSchema = z.object({
  id: z.number(),
  email: z
    .email({ message: "A valid email is required." })
    .refine(validateEmailAddress, {
      message: "Email does not meet custom validation rules",
    }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};
export async function createSubscriber(prevState: State, formData: FormData) {
  const validatedField = await CreateSubscriber.safeParseAsync({
    email: formData.get("email"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Email is Required",
    };
  }

  const { email } = validatedField.data;

  try {
    await db.subscriber.create({
      data: {
        email: email,
      },
    });
    revalidatePath("/");
    return { message: "Thank you for Subscribing!" };
  } catch (error) {

    return { errors: {email: ["Failed to subscribe the email entered."]}, message: null };
  }
}



