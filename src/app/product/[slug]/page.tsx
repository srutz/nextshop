import { notFound } from "next/navigation"
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
  const product = await getProductBySlut(slug)
  if (!product) {
    notFound()
  }

  return (
    <ProductDetails product={product} />
  )
}

async function getProductBySlut(slug: string): Promise<Product | null> {
  const url = `https://dummyjson.com/products/${slug}`
  console.time("fetch product details for slug: " + slug)
  const res = await fetch(url, {
    //cache: "no-store",
  })
  console.timeEnd("fetch product details for slug: " + slug)
  if (!res.ok || res.status === 404) {
    return null
  }
  const product = await res.json() as Product
  return product
}


