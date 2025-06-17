import Container from "@/components/container";
import AuthForm from "@/components/auth-form";
import { NavMenu } from "@/components/navbar/NavMenu";
import { RedirectToHome } from "@/components/utils";

export type AuthMethod = "signin" | "signup";

export default function AuthPage({ params }: { params: { authMethod: AuthMethod } }) {
  const authMethod = params.authMethod;

  return (
    <>
      <div className="hidden lg:block">
        <RedirectToHome />
      </div>

      <Container className="w-full md:w-2/5 m-auto px-6 py-12">
        <AuthForm authMethod={authMethod} />
      </Container>

      <NavMenu mobileOnly={true} />
    </>
  );
}
