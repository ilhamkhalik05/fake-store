import CartSummary from '@/components/cart-summary';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ProductsCartList from '@/components/products-cart-list';
import { ProductWithQuantity } from '@/lib/type';
import { getProductsInCart } from '@/services/cart';

export default async function CartPage({
  params,
}: {
  params: { userId: number };
}) {
  const productsInCart = await getProductsInCart(params.userId);
  return (
    <>
      <Navbar />

      <Container className="mt-3">
        <div className="grid grid-cols-6 gap-6 w-full h-auto">
          <div className="col-span-6 md:col-span-4">
            <ProductsCartList
              productsInCart={productsInCart as ProductWithQuantity[]}
            />
          </div>
          <div className="col-span-6 sticky bottom-0 md:col-span-2">
            <CartSummary />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
