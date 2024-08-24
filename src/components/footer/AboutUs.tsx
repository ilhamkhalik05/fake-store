import { Brand } from '../navbar/Brand';

export const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <Brand />
      <p className="text-md text-foreground tracking-tight px-2 mt-3">
        Find the best products with the best price!
      </p>
    </div>
  );
};
