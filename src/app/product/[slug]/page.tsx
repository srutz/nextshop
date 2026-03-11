import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import type { Product } from "@/components/ProductCard";
import { ProductDetails } from "@/components/ProductDetails";

//export const dynamic = 'force-dynamic'

const NUMBER_OF_PRODUCTS = 194;

export async function generateStaticParams() {
  return Array.from({ length: NUMBER_OF_PRODUCTS }, (_, i) => ({
    slug: (i + 1).toString(),
  }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const prevSlug = product.id > 1 ? (product.id - 1).toString() : "1";
  const nextSlug =
    product.id < NUMBER_OF_PRODUCTS
      ? (product.id + 1).toString()
      : NUMBER_OF_PRODUCTS.toString();

  return (
    <div className="h-1 grow flex flex-col items-center overflow-y-auto">
      <div className="my-2 flex gap-8 items-center">
        <Link href={"/product/" + prevSlug} className="text-zinc-500">
          Previous Product
        </Link>
        <Link href={"/product"} className="text-zinc-500">
          All Products
        </Link>
        <Link href={"/product/" + nextSlug} className="text-zinc-500">
          Next Product
        </Link>
      </div>
      <ProductDetails product={product} />
    </div>
  );
}

async function getProductBySlug(slug: string): Promise<Product | null> {
  const url = `https://dummyjson.com/products/${slug}`;
  const res = await fetch(url, {
    //cache: "no-store",
  });
  if (!res.ok || res.status === 404) {
    return null;
  }
  const product = (await res.json()) as Product;
  return product;
}
