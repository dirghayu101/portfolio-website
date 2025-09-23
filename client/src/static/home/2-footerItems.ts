import { LINKS } from "./0-siteConfig"

const footerMainLinks = [
  {
    title: "Github",
    type: "external",
    href: LINKS.Github,
  },
  {
    title: "My articles",
    type: "internal",
    href: "/articles",
  },
  {
    title: "LinkedIn",
    type: "external",
    href: LINKS.LinkedIn,
  },
  {
    title: "YouTube",
    type: "external",
    href: LINKS.YouTube,
  },
]

const footerSecondaryLinks = [
{
    title: "Privacy Policy",
    type: "internal",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Services",
    type: "internal",
    href: "/terms-of-services",
  },
  {
    title: "RSS Feed",
    type: "internal",
    href: "/rss"
  },
  {
    title: "OG",
    type: "internal",
    href: "/og"
  }
]

export const FOOTER_ITEMS = {

  mainLinks: footerMainLinks,
  secondaryLinks: footerSecondaryLinks
}
export const CONTACT_CTA = {
  heading: "Let's create something together",
  description: `Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.`
}