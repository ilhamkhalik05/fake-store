import { CartSummary, ProductsInCart } from '@/lib/type';
import { getProductsInCart } from '@/services/cart';
import { useEffect, useState } from 'react';

export const useCart = (userId: number) => {
  const [cartSummary, setCartSummary] = useState<CartSummary>();
  const products = cartSummary?.products;

  function plusProductQuantity(productId: number) {
    if (!productId) return;

    // Add product quantity by 1
    const updatedProducts =
      products?.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      }) || [];

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
      };
    });
  }

  useEffect(() => {
    async function initializeCartSummary() {
      if (!userId) return;

      const productsInCart = await getProductsInCart(userId);

      const initCartSummary: CartSummary = {
        id: Math.random(),
        products: productsInCart as ProductsInCart[],
        totalPrice: 0,
      };

      setCartSummary(initCartSummary);
    }

    initializeCartSummary();
  }, []);

  return { data: cartSummary, plusProductQuantity };
};
