import { renderCategory } from '@/components/category';
import { getSingleProducts } from '@/services';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Container from '@/components/container';
import Link from 'next/link';
import { ProductRate } from '@/components/product-list/Rate';
import { ProductTitle } from '@/components/product-list/Title';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import { ProductImage } from '@/components/product-list/Image';
import { ProductDescription } from '@/components/product-list/Description';
import { getRelatedProducts } from '@/services/getRelatedProducts';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, relatedProduct] = await Promise.all([
    getSingleProducts(Number(params.id)),
    getRelatedProducts(Number(params.id)),
  ]);

  return (
    <>
      <Navbar />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-3">
          {/* Product Image */}
          <div className="border-2 border-gray-200 shadow-lg cursor-pointer hover:scale-105 transition-all duration-700 rounded-xl flex items-center justify-center py-5">
            <ProductImage
              className="w-72 object-contain"
              productImage={product?.image as string}
            />
          </div>

          {/* Main Content */}
          <main className="flex flex-col border-b-2 border-black pb-10 md:border-0">
            {/* Product Category and Rating */}
            <div className="self-start flex justify-between items-center w-full mb-3">
              {renderCategory(product?.category as string)}
              <ProductRate productRate={product?.rating.rate as number} />
            </div>

            {/* Product Title with Description */}
            <section>
              <ProductTitle
                className="text-xl font-semibold text-foreground line-clamp-none mb-3"
                productTitle={product?.title as string}
              />
              <ProductDescription
                productDescription={product?.description as string}
              />
            </section>

            {/* Action Button Group */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <Button variant={'default'}>Buy Now</Button>
              <Button variant={'outline'} className="flex items-center gap-2.5">
                <ShoppingCartIcon size={18} />
                Add to Cart
              </Button>
            </div>
          </main>

          {/* Related Products */}
          <div>
            <h1 className="text-xl font-medium mb-6 underline underline-offset-4">
              Related Products
            </h1>
            <div className="flex flex-col flex-1 gap-4">
              {relatedProduct?.map((product) => (
                <Link
                  className="group flex items-start gap-3 text-wrap w-full opacity-80 hover:opacity-100 duration-300"
                  key={product.id}
                  href={'/product/' + product.id}
                >
                  <ProductImage
                    className="w-12 m-auto object-contain"
                    productImage={product.image}
                  />
                  <div className="flex flex-col gap-2 w-full">
                    <ProductTitle productTitle={product.title} />
                    <ProductRate productRate={product.rating.rate} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
