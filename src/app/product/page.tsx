import { ProductCard, type ProductsReponse } from "@/components/ProductCard"


export default async function Page() {

  const res = await fetch("https://dummyjson.com/products")
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
