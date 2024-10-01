import React from "react";
import { getAllProducts, getProductsByCategory } from "@/services/product";

import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import PromoCard from "@/components/promo-card";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { Card } from "@/components/@shadcn-ui/card";

export default async function Home() {
  const [topProducts, womenProducts, menProducts, electronicProducts, jeweleryProducts] = await Promise.all([
    getAllProducts({ limit: 5 }),
    getProductsByCategory({ category: "women's clothing" }),
    getProductsByCategory({ category: "men's clothing" }),
    getProductsByCategory({ category: "electronics" }),
    getProductsByCategory({ category: "jewelery" }),
  ]);

  return (
    <>
      <Navbar />

      <Container>
        <Banner />

        {/* Sale Promo */}
        <Card className="mt-20 flex flex-col md:flex-row items-center justify-center gap-5 py-5 px-7 bg-gradient-to-br from-10% from-white to-gray-100">
          <PromoCard />
          <ProductList products={topProducts} />
        </Card>

        {/* Women Clothes */}
        <div className="mt-20">
          <h1 className="text-2xl ms-1 mb-3 tracking-tighter font-semibold underline underline-offset-4">
            Women Clothes
          </h1>
          <ProductList products={womenProducts} />
        </div>

        {/* Men Clothes */}
        <div className="mt-20">
          <h1 className="text-2xl ms-1 mb-3 tracking-tighter font-semibold underline underline-offset-4">
            Men Clothes
          </h1>
          <ProductList products={menProducts} />
        </div>

        {/* Jewelery */}
        <div className="mt-20">
          <h1 className="text-2xl ms-1 mb-3 tracking-tighter font-semibold underline underline-offset-4">Jewelery</h1>
          <ProductList products={jeweleryProducts} />
        </div>

        {/* Electronics */}
        <div className="mt-20">
          <h1 className="text-2xl ms-1 mb-3 tracking-tighter font-semibold underline underline-offset-4">
            Electronics
          </h1>
          <ProductList products={electronicProducts} />
        </div>
      </Container>

      <Footer />
    </>
  );
}
