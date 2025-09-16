import { CATEGORIES } from "@/static/articles/articles-components/categories";
import Link from "next/link";

export const Categories = () => {
    return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {CATEGORIES.map((category) => (
        <button
          key={category.title}
          className="hover:scale-110 transition-all"
        >
          <Link href={category.href}>{category.title}</Link>
        </button>
      ))}
    </div>
  );
}