import type { Product } from "@/components/ProductCard"
import { ProductDetails } from "@/components/ProductDetails"

//export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  return Array.from({ length: 194 }, (_, i) => ({
    slug: (i + 1).toString(),
  }))
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const url = `https://dummyjson.com/products/${slug}`

  console.time("fetch product details for slug: " + slug)
  const res = await fetch(url, {
    //cache: "no-store",
  })
  console.timeEnd("fetch product details for slug: " + slug)

  const product = await res.json() as Product

  return (
    <ProductDetails product={product} />
  )
}
