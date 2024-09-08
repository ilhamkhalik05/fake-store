import type { Cart, Product } from '@/lib/type';
import { getUserCart } from './getUserCart';
import { getProductsById } from '../product';

export const getProductInCart = async (
  userId: number,
): Promise<Product[] | null> => {
  try {
    const userCart = await getUserCart(userId);
    const { products } = userCart as Cart;

    const productsInCart = await Promise.all(
      products.map(async (product) => {
        const singleProductInCart = await getProductsById(product.productId);
        return singleProductInCart as Product;
      }),
    );

    return productsInCart;
  } catch (error) {
    console.error(error);
    return null;
  }
};
