import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const Brand = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage
          className="object-contain"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback />
      </Avatar>

      <h1 className="text-gray-600 text-2xl font-semibold tracking-tighter">
        Fakestore
      </h1>
    </div>
  );
};
