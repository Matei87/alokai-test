import type { Product } from "@vue-storefront/fakestore-api";
import { SfRating, SfCounter, SfLink } from "@storefront-ui/react";
import Image from "next/image";
import AddToCart from "./AddToCart";

export default function ProductCardVertical({ product }: { product: Product }) {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <div className="relative">
        <SfLink href={`/product/${product.id}`} className="block">
          <Image
            src={product.image}
            alt="Great product"
            className="object-contain h-auto rounded-md aspect-square"
            width="300"
            height="300"
          />
        </SfLink>
      </div>
      <div className="p-4 border-t border-neutral-200  flex flex-col gap-2">
        <p>
          {product.title.length > 25
            ? product.title.slice(0, 25)
            : product.title}
        </p>
        <div className="flex items-center">
          <SfRating size="xs" value={product.rating.rate} max={5} />
          <SfCounter size="xs">{product.rating.count}</SfCounter>
        </div>
        <span className="block font-bold typography-text-lg">
          ${product.price}
        </span>
        <AddToCart />
      </div>
    </div>
  );
}
