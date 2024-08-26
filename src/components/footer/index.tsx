import { AboutUs } from './AboutUs';
import { CustomerCare } from './CustomerCare';
import { TermsAndCondition } from './TermsAndCondition';
import { DownloadApp } from './DownloadApp';

export default function Footer() {
  return (
    <>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-20 bg-gradient-to-br from-20% from-white to-gray-200">
        <AboutUs />
        <CustomerCare />
        <TermsAndCondition />
        <DownloadApp />
      </div>

      <footer className="p-5 bg-foreground text-white">
        All rights reserved &copy; 2024 - Ilham Khalik
      </footer>
    </>
  );
}

export const FooterTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-lg text-muted-foreground font-semibold uppercase underline underline-offset-4">
      {children}
    </h1>
  );
};
