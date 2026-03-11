import {
  ProductCard,
  type ProductCategory,
  type ProductsReponse,
} from "@/components/ProductCard";

//export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categories = (await res.json()) as ProductCategory[];

  const rval = categories.map((c) => ({
    slug: c.slug,
  }));
  return rval;
}

type PageParamType = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageParamType) {
  const { slug } = await params;
  console.log(">> render category page for slug: ", slug);

  const res = await fetch(
    "https://dummyjson.com/products/category/" + encodeURIComponent(slug),
  );
  const data = (await res.json()) as ProductsReponse;

  return (
    <div className="h-1 grow flex flex-col items-center gap-4 overflow-y-auto">
      <Sub></Sub>
      <div className="bg-zinc-100 py-4 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
