import { Brand } from "../utils/Brand";

export const LoginHeader = () => {
  return (
    <header className="flex flex-col gap-2 mb-5">
      <Brand />
      <p className="text-sm text-muted-foreground">Please enter your username and password below</p>
    </header>
  );
};
