import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Address } from "./type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
