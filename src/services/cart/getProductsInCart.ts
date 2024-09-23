import type { ResponseCart, ProductsInCart } from '@/lib/type';
import { getUserCart } from './getUserCart';
import { getProductById } from '../product';

export const getProductsInCart = async (
  userId: number,
): Promise<ProductsInCart[] | null> => {
  try {
    const userCart = await getUserCart(userId);
    const { products } = userCart as ResponseCart;

    const productsInCart = await Promise.all(
      products.map(async (product) => {
        const singleProductInCart = await getProductById(product.productId);
        return {
          ...singleProductInCart,
          quantity: 1,
          status: 'REST',
        } as ProductsInCart;
      }),
    );

    return productsInCart;
  } catch (error) {
    console.error(error);
    return null;
  }
};
