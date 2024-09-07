import Category from '../category';
import { BannerImage } from './BannerImage';
import { TextHeader } from './TextHeader';
import { BannerLinks } from './BannerLinks';

export default function Banner() {
  return (
    <div className="p-5">
      <div className="flex flex-col-reverse md:flex-row w-full gap-y-8 overflow-hidden">
        <div className="w-full md:w-1/2">
          <TextHeader />

          <hr className="border border-black my-6" />

          <Category />
          <BannerLinks />
        </div>
        <div className="w-full md:w-1/2">
          <BannerImage />
        </div>
      </div>
    </div>
  );
}
