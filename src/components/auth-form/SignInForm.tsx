'use client';

import { SignInSchema, type TSignInSchema } from '@/lib/type';
import { useAuth } from '@/hooks/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../@shadcn-ui/form';
import { Input } from '../@shadcn-ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../@shadcn-ui/button';
import { Checkbox } from '../@shadcn-ui/checkbox';
import { showNotification } from '@/lib/notyf';
import { useRouter } from 'next/navigation';

export const SignInForm = () => {
  const { showPassword, togglePassword, handleAuth } = useAuth();
  const router = useRouter();

  const form = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<TSignInSchema> = async (userInput) => {
    const res = await handleAuth(userInput);

    if (res?.ok) {
      showNotification({
        type: 'success',
        message: "You're now authorize, go get your products 🎉",
      });

      router.push('/');
    } else {
      showNotification({
        type: 'error',
        message: 'Opss, please input the correct data 😩',
      });
    }
  };

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

        <Checkbox id="showPassword" onClick={togglePassword} />
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
