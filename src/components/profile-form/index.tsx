"use client";

import type { User } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/@shadcn-ui/form";
import { Button } from "../@shadcn-ui/button";
import { Input } from "../@shadcn-ui/input";
import { getUserFullAddress, getUserFullName } from "@/lib/utils";
import { showUnavailableFeatureNotification } from "@/lib/notyf";

const ProfileSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters long"),
  email: z.string().email('Email must contain "@" character').min(8, "Email must be atleast 8 characters long"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
  address: z.string().min(12, "Address must be atleast 12 characters long"),
});

type TProfileSchema = z.infer<typeof ProfileSchema>;

export default function ProfileForm({ user }: { user: User }) {
  const form = useForm<TProfileSchema>({
    defaultValues: {
      name: getUserFullName(user.name.firstname, user.name.lastname),
      email: user.email,
      password: user.password,
      address: getUserFullAddress(user.address),
    },
    resolver: zodResolver(ProfileSchema),
  });

  const onSubmit: SubmitHandler<TProfileSchema> = async (userInput) => {
    showUnavailableFeatureNotification();
    console.log(userInput);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="text-muted-foreground focus-visible:text-foreground" />
              </FormControl>
              <FormDescription>Your display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="text-muted-foreground focus-visible:text-foreground"
                  type="email"
                  disabled
                />
              </FormControl>
              <FormDescription>Your connected email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} className="text-muted-foreground focus-visible:text-foreground" type="password" />
              </FormControl>
              <FormDescription>Your account password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} className="text-muted-foreground focus-visible:text-foreground" type="text" />
              </FormControl>
              <FormDescription>Your address for shipping.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={"destructive"} type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Wait..." : "Edit Profile"}
        </Button>
      </form>
    </Form>
  );
}
