import { z } from 'zod';

// Zod Object Schema
export const SignInSchema = z.object({
  username: z
    .string()
    .min(3, 'Username should atleast contain 3 characters long'),
  password: z
    .string()
    .min(6, 'Password should atleast contain 6 characters long'),
});

export type TSignInSchema = z.infer<typeof SignInSchema>;
export type TAuthStatus = 'authenticated' | 'unauthenticated';

export type UserSession = {
  username: string;
  token: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductWithQuantity = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
};

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

export type ProductInCart = {
  productId: number;
  quantity: number;
};

export type Cart = {
  id: number;
  userId: number;
  date: string;
  products: ProductInCart[];
};

export type TShowNotyf = {
  type: 'success' | 'error';
  message: string;
};

export type CartSummary = {
  id: number;
  products: ProductWithQuantity[];
  totalPrice: number;
};
