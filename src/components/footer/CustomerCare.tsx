import { FooterTitle } from '.';

export const CustomerCare = () => {
  return (
    <div className="flex flex-col gap-4">
      <FooterTitle>Customer Care</FooterTitle>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h1 className="font-bold text-md tracking-tight">Telepon</h1>
          <p className="text-sm">+62 812 3456 7890</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-md tracking-tight">Email</h1>
          <p className="text-sm">fakestore@mail.com</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-md tracking-tight">Help</h1>
          <a className="cursor-pointer underline text-blue-500 text-sm">
            Help Center
          </a>
        </div>

        <p className="text-sm text-foreground">
          Feel free to contact us anytime you need 😃
        </p>
      </div>
    </div>
  );
};
