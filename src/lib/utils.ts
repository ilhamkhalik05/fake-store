import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Address, ProductsInCart } from "./type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalQuantity(products: ProductsInCart[]) {
  const productsSelected = products.filter((product) => product.status === "SELECT");

  const totalQuantity = productsSelected.reduce((sum, product) => sum + product.quantity, 0);

  return totalQuantity;
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getUserFullName(firstname: string, lastname: string) {
  return `${firstname} ${lastname}`;
}

export function getUserFullAddress(address: Address) {
  return `${capitalize(address.city)} | ${capitalize(address.street)}, ${address.number}. ZIPCODE:[${address.zipcode}]`;
}
