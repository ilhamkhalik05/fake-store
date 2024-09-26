import type { TCartSummary, ProductsInCart } from "@/lib/type";
import { useEffect, useState } from "react";
import { onMinusProductQuantity, onPlusProductQuantity, onSelectProduct, onUnSelectProduct } from "@/lib/cart";
import { getProductsInCart } from "@/services/cart";

export function useCart(userId: number) {
  const [cartSummary, setCartSummary] = useState<TCartSummary>();
  const products = cartSummary?.products as ProductsInCart[];

  const getTotalPrice = (products: ProductsInCart[]) => {
    return products
      .filter((product) => product.status === "SELECT")
      .reduce((total, product) => {
        const totalPrice = total + product.price * product.quantity;
        return parseFloat(totalPrice.toFixed(2));
      }, 0);
  };

  const plusProductQuantity = (productId: number) => {
    if (!productId) return;

    const updatedProducts = onPlusProductQuantity(products, productId);
    const updatedTotalPrice = getTotalPrice(updatedProducts);

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  const minusProductQuantity = (productId: number) => {
    if (!productId) return;

    const updatedProducts = onMinusProductQuantity(products, productId);
    const updatedTotalPrice = getTotalPrice(updatedProducts);

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  const selectProduct = (productId: number, productQuantity: number) => {
    if (!productId && !productQuantity) return;

    const updatedProducts = onSelectProduct({ products, productId, productQuantity, selectAll: false });
    const updatedTotalPrice = getTotalPrice(updatedProducts);

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  const unSelectProduct = (productId: number) => {
    if (!productId) return;

    const updatedProducts = onUnSelectProduct({ products, productId, unselectAll: false });
    const updatedTotalPrice = getTotalPrice(updatedProducts);

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  const selectAllProduct = () => {
    const updatedProducts = onSelectProduct({ products, selectAll: true });
    const updatedTotalPrice = getTotalPrice(updatedProducts);

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  const unSelectAllProduct = () => {
    const updatedProducts = onUnSelectProduct({ products, unselectAll: true });
    const updatedTotalPrice = getTotalPrice(updatedProducts);

    // Set new state
    setCartSummary((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  useEffect(() => {
    const initializeCartSummary = async () => {
      if (!userId) return;
      const productsInCart = await getProductsInCart(userId);

      if (productsInCart) {
        const initCartSummaryData: TCartSummary = {
          id: Math.random(),
          products: productsInCart,
          totalPrice: 0,
        };

        setCartSummary(initCartSummaryData);
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
