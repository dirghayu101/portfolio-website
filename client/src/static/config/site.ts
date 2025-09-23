import { LINKS, SITE_CONFIG } from "@/static/home/0-siteConfig"

type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    github: string;
  };
  author: string;
  siteKeywords: string[];
};

export const siteConfig: SiteConfig = {
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: LINKS.Website,
  ogImage: `${LINKS.Website}/og`,
  links: {
    linkedin: LINKS.LinkedIn,
    github: LINKS.Github,
  },
  author: SITE_CONFIG.authorName,
  siteKeywords: SITE_CONFIG.siteKeywords
};
