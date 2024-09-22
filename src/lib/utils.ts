import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ProductsInCart } from './type';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalQuantity(products: ProductsInCart[]) {
  const productsSelected = products.filter(
    (product) => product.status === 'SELECT',
  );

  const totalQuantity = productsSelected.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  return totalQuantity;
}
