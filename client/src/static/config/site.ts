type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Coding Jitsu articles",
  description:
    "An Open source Technical articles platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://next-articles-cj.vercel.app/",
  ogImage: "https://next-articles-cj.vercel.app/og",
  links: {
    twitter: "https://twitter.com/codingjitsu",
    github: "https://github.com/codingjitsu",
  },
};
