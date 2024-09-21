'use client';

import { ProductsInCart } from '@/lib/type';
import { useCart } from '@/hooks/useCart';
import CartSummary from '@/components/cart-summary';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ProductsCartList from '@/components/products-cart-list';

export default function CartPage({ params }: { params: { userId: string } }) {
  const userId = Number(params.userId);

  const {
    data: cartSummary,
    plusProductQuantity,
    minusProductQuantity,
    selectProduct,
    unSelectProduct,
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
            />
          </div>
          <div className="col-span-6 sticky bottom-0 md:col-span-2">
            <CartSummary totalPrice={cartSummary?.totalPrice as number} />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
