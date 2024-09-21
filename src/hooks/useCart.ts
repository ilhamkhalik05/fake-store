import { CartSummary, ProductsInCart } from '@/lib/type';
import { getProductsInCart } from '@/services/cart';
import { useEffect, useState } from 'react';

export function useCart(userId: number) {
  const [cartSummary, setCartSummary] = useState<CartSummary>();
  const products = cartSummary?.products;

  const getTotalPrice = (products: ProductsInCart[]) => {
    return products
      .filter((product) => product.status === 'SELECT')
      .reduce(
        (total, product) =>
          Math.floor(total + product.price * product.quantity),
        0,
      );
  };

  const plusProductQuantity = (productId: number) => {
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
        totalPrice: updatedProducts
          ? getTotalPrice(updatedProducts)
          : prevState.totalPrice,
      };
    });
  };

  const minusProductQuantity = (productId: number) => {
    if (!productId) return;

    // Minus product quantity by 1
    const updatedProducts =
      products?.map((product) => {
        return product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      }) || [];

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedProducts
          ? getTotalPrice(updatedProducts)
          : prevState.totalPrice,
      };
    });
  };

  const selectProduct = (productId: number, productQuantity: number) => {
    if (!productId && !productQuantity) return;

    // Change product status to SELECT by productId
    const updatedProducts =
      products?.map((product) => {
        return product.id === productId
          ? { ...product, quantity: productQuantity, status: 'SELECT' }
          : product;
      }) || [];

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedProducts
          ? getTotalPrice(updatedProducts as ProductsInCart[])
          : prevState.totalPrice,
      };
    });
  };

  useEffect(() => {
    const initializeCartSummary = async () => {
      if (!userId) return;
      const productsInCart = await getProductsInCart(userId);

      if (productsInCart) {
        const initCartSummary: CartSummary = {
          id: Math.random(),
          products: productsInCart,
          totalPrice: 0,
        };

        setCartSummary(initCartSummary);
      }
    };

    initializeCartSummary();
  }, []);

  return {
    data: cartSummary,
    plusProductQuantity,
    minusProductQuantity,
    selectProduct,
  };
}
