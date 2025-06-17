"use client";

import { SignInSchema, type TSignInSchema } from "@/lib/type";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../@shadcn-ui/form";
import { Input } from "../@shadcn-ui/input";
import { Button } from "../@shadcn-ui/button";
import { showNotification } from "@/lib/notyf";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";

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
        type: "success",
        message: "You're now authorize, go get your products 🎉",
      });

      router.push("/");
    } else {
      showNotification({
        type: "error",
        message: "Opss, please input the correct data 😩",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field, formState: { errors } }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className={errors.username && "ring-red-500 focus-visible:ring-red-500"}
                  placeholder="Please enter your username"
                  {...field}
                />
              </FormControl>

              {errors?.username && (
                <FormMessage className="text-sm font-light">{errors?.username?.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, formState: { errors } }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className={errors.password && "ring-red-500 focus-visible:ring-red-500"}
                  placeholder="Please enter your password"
                  type={showPassword ? "text" : "password"}
                  {...field}
                />
              </FormControl>

              {/* Password Toggler */}
              <span className="absolute right-5 top-8 text-muted-foreground" onClick={togglePassword}>
                {showPassword ? <EyeIcon /> : <EyeOffIcon />}
              </span>

              {errors?.password && (
                <FormMessage className="text-sm font-light">{errors?.password?.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <div className="text-sm -mt-1 -mb-2">
          <span>Didn&apos;t have an account? </span>
          <Link href={"/auth/signup"} className="text-blue-500 underline hover:underline-offset-4">
            Register now
          </Link>
        </div>

        <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Wait..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
};
