import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Rating";

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

export type ProductsReponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductCategory = {
  slug: string;
  name: string;
  url: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="bg-white shadow-xl border border-zinc-300 rounded-xl p-4 flex flex-col gap-2" href={`/product/${product.id}`}>
      <Image src={product.thumbnail} alt={product.title} className="self-center object-cover rounded"
        width={200}
        height={200}

      />
      <div className="text-lg font-bold">{product.title}</div>
      <div className="text-sm text-muted-foreground">{product.category}</div>
      <div className="text-sm">{product.description}</div>
      <div className="text-lg font-semibold">${product.price}</div>
      <Rating rating={product.rating} />
    </Link>
  );
}
