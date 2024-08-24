import { FooterTitle } from '.';

export const TermsAndCondition = () => {
  return (
    <div className="flex flex-col gap-4">
      <FooterTitle>Term & Condition</FooterTitle>
      <div className="flex flex-col text-sm text-muted-foreground leading-relaxed">
        <p className="cursor-default hover:underline">About Us</p>
        <p className="cursor-default hover:underline">Contact Us</p>
        <p className="cursor-default hover:underline">Privacy Policy</p>
        <p className="cursor-default hover:underline">Terms & Conditions</p>
        <p className="cursor-default hover:underline">FAQ</p>
        <p className="cursor-default hover:underline">API</p>
      </div>
    </div>
  );
};
