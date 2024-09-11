import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const RedirectToHome = () => {
  return (
    <Link
      href={'/'}
      className="group fixed top-5 left-10 cursor-pointer flex items-center gap-2 hover:text-blue-500"
    >
      <div className="group-hover:-translate-x-2 transition-transform ease-in-out duration-200">
        <ArrowLeft size={20} />
      </div>
      <span className="tracking-widest group-hover:-translate-x-1 transition-transform ease-in-out duration-200">
        back to home
      </span>
    </Link>
  );
};
