import { CartSummary, ProductWithQuantity } from '@/lib/type';
import { getProductsInCart } from '@/services/cart';
import { useEffect, useState } from 'react';

export const useCart = (userId: number) => {
  const [cartSummary, setCartSummary] = useState<CartSummary>();

  useEffect(() => {
    async function initializeCartSummary() {
      if (userId) {
        const productsInCart = await getProductsInCart(userId);

        const newCartSummary: CartSummary = {
          id: Math.random(),
          products: productsInCart as ProductWithQuantity[],
          totalPrice: 0,
        };

        setCartSummary(newCartSummary);
      }
    }

    initializeCartSummary();
  }, []);

  return { data: cartSummary };
};
