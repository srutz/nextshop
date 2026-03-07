import { ProductCard, type ProductCategory, type ProductsReponse } from "@/components/ProductCard"


export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categories = await res.json() as ProductCategory[];

  return categories.map((c) => ({
    slug: c.slug,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log(">> render category page for slug: ", slug)

  const res = await fetch("https://dummyjson.com/products/category/" + slug)
  const data = await res.json() as ProductsReponse

  return (
    <div className="h-1 grow flex flex-col items-center gap-4 overflow-y-auto">
      <div className="bg-zinc-100 py-4 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )

}
