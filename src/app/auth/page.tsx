import React from "react";
import Container from "@/components/container";
import AuthForm from "@/components/auth-form";
import { NavMenu } from "@/components/navbar/NavMenu";
import { RedirectToHome } from "@/components/utils";

export default function AuthPage() {
  return (
    <>
      <div className="hidden lg:block">
        <RedirectToHome />
      </div>

      <Container className="w-full md:w-2/5 m-auto px-6 py-12">
        <AuthForm />
      </Container>

      <NavMenu mobileOnly={true} />
    </>
  );
}
