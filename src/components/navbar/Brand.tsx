import { Avatar, AvatarFallback, AvatarImage } from '../@shadcn-ui/avatar';
import logo from '@public/brand-logo.png';

export const Brand = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage
          className="object-contain"
          src={logo.src}
          alt="brand-logo"
        />
        <AvatarFallback />
      </Avatar>

      <h1 className="text-gray-600 text-2xl font-semibold tracking-tighter">
        Fakestore
      </h1>
    </div>
  );
};
