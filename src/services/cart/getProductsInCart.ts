import type { Cart, ProductWithQuantity } from '@/lib/type';
import { getUserCart } from './getUserCart';
import { getProductsById } from '../product';

export const getProductsInCart = async (
  userId: number,
): Promise<ProductWithQuantity[] | null> => {
  try {
    const userCart = await getUserCart(userId);
    const { products } = userCart as Cart;

    const productsWithQuantity = await Promise.all(
      products.map(async (product) => {
        const singleProductInCart = await getProductsById(product.productId);
        return {
          ...singleProductInCart,
          quantity: product.quantity,
        } as ProductWithQuantity;
      }),
    );

    return productsWithQuantity;
  } catch (error) {
    console.error(error);
    return null;
  }
};
