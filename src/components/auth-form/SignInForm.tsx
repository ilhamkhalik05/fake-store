'use client';

import { SignInSchema, type TSignInSchema } from '@/lib/type';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

export const SignInForm = () => {
  const { signInAction } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<TSignInSchema> = async (userData) =>
    signInAction(userData);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field, formState: { errors } }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className={
                    errors.username && 'ring-red-500 focus-visible:ring-red-500'
                  }
                  placeholder="Please enter your username"
                  {...field}
                />
              </FormControl>

              {errors?.username && (
                <FormMessage className="text-sm font-light">
                  {errors?.username?.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, formState: { errors } }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className={
                    errors.password && 'ring-red-500 focus-visible:ring-red-500'
                  }
                  placeholder="Please enter your password"
                  type={showPassword ? 'text' : 'password'}
                  {...field}
                />
              </FormControl>

              {errors?.password && (
                <FormMessage className="text-sm font-light">
                  {errors?.password?.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        <Checkbox
          id="showPassword"
          onClick={() => setShowPassword(!showPassword)}
        />
        <label
          htmlFor="showPassword"
          className="cursor-pointer ml-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show Password
        </label>

        <Button
          className="w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Wait...' : 'Sign In'}
        </Button>
      </form>
    </Form>
  );
};
