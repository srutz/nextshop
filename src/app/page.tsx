import { Link } from "next-view-transitions";
import type { ProductCategory } from "@/components/ProductCard";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categories = (await res.json()) as ProductCategory[];

  return (
    <div className="h-1 grow flex flex-col items-center gap-4">
      <div className="mt-8 text-2xl font-bold">Welcome to the shop!</div>
      <div className="text-sm text-muted-foreground">
        This is a demo shop built with Next.js and dummyjson.com
      </div>
      <div>
        <Link
          href={"/product"}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          View all Products
        </Link>
      </div>

      <div className="text-sm text-muted-foreground">
        Or browse by category:
      </div>
      <div className="flex flex-wrap gap-4 justify-center px-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="px-4 py-2 bg-zinc-200 text-gray-800 rounded-xl shadow-xl"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
