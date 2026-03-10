import { Pagination } from "@/components/Pagination";
import { ProductCard, type ProductsReponse } from "@/components/ProductCard";

const PAGE_SIZE = 30;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageRaw } = await searchParams;
  const page = Math.max(1, pageRaw ? parseInt(pageRaw, 10) : 1);
  console.log("Fetching products for page:", page);
  const res = await fetch(
    "https://dummyjson.com/products" +
      "?limit=" +
      encodeURIComponent(PAGE_SIZE) +
      "&skip=" +
      encodeURIComponent((page - 1) * PAGE_SIZE),
  );
  const data = (await res.json()) as ProductsReponse;
  const totalPages = Math.ceil(data.total / PAGE_SIZE);

  return (
    <div className="h-1 grow flex flex-col items-center gap-4">
      <div className="h-1 grow flex flex-col items-center gap-4 overflow-y-auto">
        <div className="bg-zinc-100 py-4 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Pagination page={page} totalPages={totalPages} className="my-3" />
    </div>
  );
}
