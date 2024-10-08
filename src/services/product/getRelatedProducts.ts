import { Category } from "@/lib/type";
import { getProductById } from "./getProductById";
import { getProductsByCategory } from "./getProductsByCategory";

export const getRelatedProducts = async (id: number) => {
  try {
    const product = await getProductById(id);
    const productByCategory = await getProductsByCategory({
      category: product?.category as Category,
    });

    const relatedProducts = productByCategory?.filter((product) => product.id !== Number(id));
    return relatedProducts;
  } catch (error) {
    console.error(error);
    return null;
  }
};
