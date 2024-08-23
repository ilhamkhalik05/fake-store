import Image from 'next/image';
import bannerImg from '@public/banner.png';

export const BannerImage = () => {
  return (
    <div className="flex justify-center w-full">
      <Image
        className="size-96 object-cover"
        src={bannerImg}
        alt="banner-image"
      />
    </div>
  );
};
