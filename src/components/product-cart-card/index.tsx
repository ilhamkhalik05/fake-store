"use client";

import { ProductsInCart } from "@/lib/type";
import { Card } from "../@shadcn-ui/card";
import { Checkbox } from "../@shadcn-ui/checkbox";
import { ProductImage } from "../product-card/Image";
import { ProductTitle } from "../product-card/Title";
import { ProductPrice } from "../product-card/Price";
import { AddToWishlistButton } from "../utils";
import { ProductsCartQuantity } from "../products-cart-list/ProductsCartQuantity";

type ProductCartCardProps = {
  isSelectAll: boolean;
  product: ProductsInCart;
  selectProduct: () => void;
  unSelectProduct: () => void;
  plusProductQuantity: () => void;
  minusProductQuantity: () => void;
};

export default function ProductCartCard({
  isSelectAll,
  product,
  selectProduct,
  unSelectProduct,
  plusProductQuantity,
  minusProductQuantity,
}: ProductCartCardProps) {
  const isSelect = product.status === "SELECT" || isSelectAll;

  return (
    <Card key={product.id} className="cursor-pointer relative ps-10 pe-6 py-4 rounded-2xl">
      <Checkbox
        className="absolute top-3.5 left-3.5"
        checked={isSelect}
        onClick={isSelect ? unSelectProduct : selectProduct}
      />

      <div className="flex items-start gap-5 w-full">
        <ProductImage productImage={product.image} className="size-20 object-contain" />
        <div className="flex flex-col justify-between gap-2 size-full">
          <div className="flex flex-col">
            <ProductTitle className="line-clamp-2 text-black" productTitle={product.title} />
            <ProductPrice productPrice={product.price} className="text-muted-foreground text-md" />
          </div>
          <div className="flex items-center justify-between w-full">
            <AddToWishlistButton />
            <ProductsCartQuantity
              productQuantity={product.quantity}
              plusProductQuantity={plusProductQuantity}
              minusProductQuantity={minusProductQuantity}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
