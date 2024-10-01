import React from "react";
import { LoginHeader } from "./Header";
import { SignInForm } from "./SignInForm";
import { OAuth } from "./OAuth";

export default function AuthForm() {
  return (
    <>
      <LoginHeader />
      <SignInForm />

      <span className="text-center text-muted-foreground flex justify-center my-7">or</span>

      <OAuth />
    </>
  );
}
