import { z } from "zod";

// Zod Object Schema
export const SignInSchema = z.object({
  username: z.string().min(3, "Username should atleast contain 3 characters long"),
  password: z.string().min(6, "Password should atleast contain 6 characters long"),
});

export type TSignInSchema = z.infer<typeof SignInSchema>;
export type TAuthStatus = "authenticated" | "unauthenticated";

// User Session
export type UserSession = {
  username: string;
  token: string;
};

// Bussiness Services Requirement
const categories = {
  electronics: 'electronics',
  jewelery: 'jewelery',
  "men's clothing": "men's%20clothing",
  "women's clothing": "women's%20clothing",
} as const;

export type Category = keyof typeof categories;

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductStatus = "REST" | "SELECT" | "CHECKOUT";

export interface ProductsInCart extends Product {
  quantity: number;
  status: ProductStatus;
}

export type ResponseProductsInCart = {
  productId: number;
  quantity: number;
};

export type ResponseCart = {
  id: number;
  userId: number;
  date: string;
  products: ResponseProductsInCart[];
};

export type TCartSummary = {
  id: number;
  products: ProductsInCart[];
  totalPrice: number;
};
// Bussiness Services Requirement

// User Details
export type Name = {
  firstname: string;
  lastname: string;
}

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

// Add Ons Utility
export type TShowNotyf = {
  type: "success" | "error";
  message: string;
};
