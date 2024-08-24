import Category from '../category';
import { Button } from '../ui/button';
import { BannerImage } from './BannerImage';
import { TextHeader } from './TextHeader';

export default function Banner() {
  return (
    <div className="p-5">
      <div className="flex flex-col-reverse md:flex-row w-full gap-y-8 overflow-hidden">
        <div className="w-full md:w-1/2">
          <TextHeader />

          <hr className="border border-black my-6" />

          <Category />
          <div className="flex items-center gap-3 mt-4">
            <Button className="w-full md:w-auto" variant={'outline'}>
              See our products
            </Button>
            <Button className="w-full md:w-auto" variant={'default'}>
              Join with us
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <BannerImage />
        </div>
      </div>
    </div>
  );
}
