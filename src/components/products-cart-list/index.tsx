"use client";

import React from "react";
import { ProductsCartHeader } from "./ProductsCartHeader";
import { ProductsInCart } from "@/lib/type";
import { useEffect, useState } from "react";
import { ProductCartCardSkeleton } from "../skeleton";
import dynamic from "next/dynamic";

const ProductCartCard = dynamic(() => import("../product-cart-card"), {
  loading: () => <ProductCartCardSkeleton />,
});

type ProductCardListProps = {
  products: ProductsInCart[];
  plusProductQuantity: (productId: number) => void;
  minusProductQuantity: (productId: number) => void;
  selectProduct: (productId: number, productQuantity: number) => void;
  unSelectProduct: (productId: number) => void;
  selectAllProduct: () => void;
  unSelectAllProduct: () => void;
};

export default function ProductsCartList({
  products,
  plusProductQuantity,
  minusProductQuantity,
  selectProduct,
  unSelectProduct,
  selectAllProduct,
  unSelectAllProduct,
}: ProductCardListProps) {
  const [isSelectAll, setIsSelectAll] = useState(false);

  useEffect(() => {
    const allSelected = products?.every((product) => product.status === "SELECT");
    setIsSelectAll(allSelected);
  }, [products]);

  return (
    <>
      <ProductsCartHeader
        isSelectAll={isSelectAll}
        setIsSelectAll={setIsSelectAll}
        selectAllProduct={() => selectAllProduct()}
        unSelectAllProduct={() => unSelectAllProduct()}
      />

      <div className="flex flex-col gap-4 w-full">
        {products?.length > 0 &&
          products.map((product) => {
            return (
              <ProductCartCard
                key={product.id}
                isSelectAll={isSelectAll}
                product={product}
                selectProduct={() => selectProduct(product.id, product.quantity)}
                unSelectProduct={() => unSelectProduct(product.id)}
                plusProductQuantity={() => plusProductQuantity(product.id)}
                minusProductQuantity={() => minusProductQuantity(product.id)}
              />
            );
          })}
      </div>
    </>
  );
}
