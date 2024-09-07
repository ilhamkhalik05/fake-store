import { type Category, getProductsByCategory } from './getProductsByCategory';
import { getSingleProducts } from './getSingleProduct';

export const getRelatedProducts = async (id: number) => {
  const product = await getSingleProducts(id);

  const productByCategory = await getProductsByCategory({
    category: product?.category as Category,
  });

  const relatedProducts = productByCategory?.filter(
    (product) => product.id !== Number(id),
  );

  return relatedProducts;
};
