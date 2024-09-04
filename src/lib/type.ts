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
