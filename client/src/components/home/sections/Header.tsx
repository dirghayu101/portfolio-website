import { NAVBAR_ITEMS } from "@/app/static/home/1-navItems";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  return (

    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur sm:w-auto sm:h-auto">
        {
          NAVBAR_ITEMS.sort((a, b) => a.sequenceNumber - b.sequenceNumber).map((item) => (
            <Link key={item.sequenceNumber} href={item.href} className={twMerge("nav-item", item.classes ? item.classes : '')}>
              {item.title}
            </Link>
          ))
        }
      </nav>
    </div>
  );
};
