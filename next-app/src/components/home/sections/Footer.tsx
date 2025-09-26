import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { FOOTER_ITEMS } from "@/static/home/2-footerItems";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="pointer-events-none absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {FOOTER_ITEMS.mainLinks.map((link) =>
              link.type === "internal" ? (
                <Link
                  key={link.title}
                  href={link.href}
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4 " />
                </Link>
              ) : (
                <a
                  key={link.title}
                  href={link.href}
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4 " />
                </a>
              )
            )}
          </nav>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-start gap-8 pb-6 md:-mt-2 text-sm md:pt-0 pt-2 text-white/40">
          {FOOTER_ITEMS.secondaryLinks.map((link) =>
            link.type === "internal" ? (
              <Link
                key={link.title}
                href={link.href}
              >
                <span className="font-normal hover:text-white">{link.title}</span>
              </Link>
            ) : (
              <a
                key={link.title}
                href={link.href}
              >
                <span className="font-normal hover:text-white">{link.title}</span>
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};
