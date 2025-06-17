import { LoginHeader } from "./Header";
import { SignInForm } from "./SignInForm";
import { OAuth } from "./OAuth";
import { AuthMethod } from "@/app/auth/[authMethod]/page";

export default function AuthForm({ authMethod }: { authMethod: AuthMethod }) {
  return (
    <>
      <LoginHeader />
      {authMethod === "signin" ? <SignInForm /> : null}

      <span className="text-center text-muted-foreground flex justify-center my-7">or</span>

      <OAuth />
    </>
  );
}
