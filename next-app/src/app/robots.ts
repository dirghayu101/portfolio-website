import { baseUrl } from "@/lib/utilities/general-utils";

// robots.txt
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
