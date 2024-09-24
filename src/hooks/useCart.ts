import { TCartSummary, ProductsInCart } from '@/lib/type';
import { getProductsInCart } from '@/services/cart';
import { useEffect, useState } from 'react';

export function useCart(userId: number) {
  const [cartSummary, setCartSummary] = useState<TCartSummary>();
  const products = cartSummary?.products;

  const getTotalPrice = (products: ProductsInCart[]) => {
    return products
      .filter((product) => product.status === 'SELECT')
      .reduce((total, product) => {
        const totalPrice = total + product.price * product.quantity;
        return parseFloat(totalPrice.toFixed(2));
      }, 0);
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

    // Change status to SELECT
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

  const unSelectProduct = (productId: number) => {
    if (!productId) return;

    // Change quantity to 1 and status to REST
    const updatedProducts =
      products?.map((product) => {
        return product.id === productId
          ? { ...product, quantity: 1, status: 'REST' }
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

  const selectAllProduct = () => {
    const updatedProducts = products?.map((product) => ({
      ...product,
      status: 'SELECT',
    }));

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: getTotalPrice(updatedProducts as ProductsInCart[]),
      };
    });
  };

  const unSelectAllProduct = () => {
    const updatedProducts = products?.map((product) => ({
      ...product,
      status: 'REST',
      quantity: 1,
    }));

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: getTotalPrice(updatedProducts as ProductsInCart[]),
      };
    });
  };

  useEffect(() => {
    const initializeCartSummary = async () => {
      if (!userId) return;
      const productsInCart = await getProductsInCart(userId);

      if (productsInCart) {
        const initCartSummary: TCartSummary = {
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
    unSelectProduct,
    selectAllProduct,
    unSelectAllProduct,
  };
}
