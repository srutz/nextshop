import Image from "next/image";
import type { Product } from "./ProductCard";
import { Rating } from "./Rating";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="h-1 items-start grow flex flex-col gap-8 bg-white p-8 overflow-y-auto">
      <div className="flex flex-col gap-8">
        {/* Images Section */}
        <div className="flex flex-row gap-4 overflow-x-auto">
          {product.images.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={image}
                alt={`${product.title} - Image ${index + 1}`}
                width={300}
                height={300}
                className="rounded-lg object-cover border border-zinc-300 bg-zinc-200 shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col gap-4">
          <div className="text-sm text-zinc-500 uppercase">{product.category}</div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <Rating rating={product.rating} />
          <p className="text-lg text-zinc-700">{product.description}</p>

          <div className="flex items-baseline gap-4">
            <div className="text-3xl font-bold">${product.price}</div>
            {product.discountPercentage > 0 && (
              <div className="text-lg text-green-600">-{product.discountPercentage}% off</div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Stock:</span> {product.stock} units
            </div>
            <div>
              <span className="font-semibold">SKU:</span> {product.sku}
            </div>
            <div>
              <span className="font-semibold">Availability:</span> {product.availabilityStatus}
            </div>
            <div>
              <span className="font-semibold">Min Order:</span> {product.minimumOrderQuantity}
            </div>
          </div>

          <div className="text-sm text-zinc-600">
            <p>{product.shippingInformation}</p>
            <p>{product.warrantyInformation}</p>
            <p>{product.returnPolicy}</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <div className="flex flex-col gap-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="border border-zinc-200 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{review.reviewerName}</div>
                  <Rating rating={review.rating} />
                </div>
                <p className="text-sm text-zinc-700">{review.comment}</p>
                <div className="text-xs text-zinc-500">
                  {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
