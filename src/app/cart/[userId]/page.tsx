"use client";

import type { TCartSummary, ProductsInCart } from "@/lib/type";
import React from "react";
import { useCart } from "@/hooks/useCart";
import CartSummary from "@/components/cart-summary";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductsCartList from "@/components/products-cart-list";

export default function CartPage({ params }: { params: { userId: string } }) {
  const userId = Number(params.userId);

  const {
    data: cartSummary,
    plusProductQuantity,
    minusProductQuantity,
    selectProduct,
    unSelectProduct,
    selectAllProduct,
    unSelectAllProduct,
  } = useCart(userId);

  return (
    <>
      <Navbar />

      <Container className="mt-3">
        <div className="grid grid-cols-6 gap-6 w-full h-auto">
          <div className="col-span-6 md:col-span-4">
            <ProductsCartList
              products={cartSummary?.products as ProductsInCart[]}
              plusProductQuantity={plusProductQuantity}
              minusProductQuantity={minusProductQuantity}
              selectProduct={selectProduct}
              unSelectProduct={unSelectProduct}
              selectAllProduct={selectAllProduct}
              unSelectAllProduct={unSelectAllProduct}
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <CartSummary cartSummary={cartSummary as TCartSummary} />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
