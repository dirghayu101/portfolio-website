import type { Metadata } from "next";
import { Inter, Calistoga, Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/components/home/sections/Header";
import { Footer } from "@/components/home/sections/Footer";
import { siteConfig } from "@/static/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
const montserrat = Montserrat({subsets: ["latin"], variable: "--font-special"})

export const metadata: Metadata = {
  title: {
    default: "Joshi Codes",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.siteKeywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.github,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: siteConfig.author,
  },
  icons: "/icon.svg",
   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          montserrat.variable,
          "bg-gray-900 text-white antialiased font-special"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
