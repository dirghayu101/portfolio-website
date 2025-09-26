/* 
Makes a post request to the endpoint with slug, title and category in the body.
*/

"use client";

import { fetchUrl } from "@/lib/utilities/general-utils";
import { useEffect } from "react";

export const ReportViews = ({
  slug,
  title,
  category,
}: {
  slug: string;
  title: string;
  category: string;
}) => {
  useEffect(() => {
    const postData = async () => {
      try {
        await fetch(`${fetchUrl}/blog`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, title, category }),
        });
      } catch (error) {
        console.log("Something is up...", error);
      }
    };
    postData();
  }, [category, slug, title]);
  return <></>;
};
