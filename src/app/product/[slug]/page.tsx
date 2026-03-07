import type { Product } from "@/components/ProductCard"
import { ProductDetails } from "@/components/ProductDetails"

export async function generateStaticParams() {
  return Array.from({ length: 194 }, (_, i) => ({
    slug: (i + 1).toString(),
  }))
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  console.log(">> render product page for slug: ", slug)

  const res = await fetch("https://dummyjson.com/products/" + slug)
  const product = await res.json() as Product

  return (
    <ProductDetails product={product} />
  )
}
