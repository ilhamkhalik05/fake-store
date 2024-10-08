import { z } from "zod";

// -- Zod Object Schema -- //
export const SignInSchema = z.object({
  username: z.string().min(3, "Username should atleast contain 3 characters long"),
  password: z.string().min(6, "Password should atleast contain 6 characters long"),
});

export type TSignInSchema = z.infer<typeof SignInSchema>;

// *** ----------------------------------------------------------------------------------------------------------- ***

// -- Bussiness Services Requirement -- //
const categories = {
  electronics: "electronics",
  jewelery: "jewelery",
  "men's clothing": "men's%20clothing",
  "women's clothing": "women's%20clothing",
} as const;

export type Category = keyof typeof categories;
export type ProductStatus = "REST" | "SELECT" | "CHECKOUT";

type Rating = {
  rate: number;
  count: number;
};

// - Raw product type -
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
};

// - Server response product in cart -
export type ResponseProductsInCart = {
  productId: number;
  quantity: number;
};

// - Server response cart -
export type ResponseCart = {
  id: number;
  userId: number;
  date: string;
  products: ResponseProductsInCart[];
};

// - Product in cart -
export interface ProductsInCart extends Product {
  quantity: number;
  status: ProductStatus;
}

// - Cart Summary  -
export type TCartSummary = {
  id: number;
  products: ProductsInCart[];
  totalPrice: number;
};

// *** ----------------------------------------------------------------------------------------------------------- ***

// -- User Details -- //
export type Name = {
  firstname: string;
  lastname: string;
};

export type Address = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
};

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
};
