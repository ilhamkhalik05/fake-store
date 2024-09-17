import type { ResponseCart, ProductsInCart } from '@/lib/type';
import { getUserCart } from './getUserCart';
import { getProductsById } from '../product';

export const getProductsInCart = async (
  userId: number,
): Promise<ProductsInCart[] | null> => {
  try {
    const userCart = await getUserCart(userId);
    const { products } = userCart as ResponseCart;

    const productsInCart = await Promise.all(
      products.map(async (product) => {
        const singleProductInCart = await getProductsById(product.productId);
        return {
          ...singleProductInCart,
          quantity: 1,
          status: 'rest',
        } as ProductsInCart;
      }),
    );

    return productsInCart;
  } catch (error) {
    console.error(error);
    return null;
  }
};
