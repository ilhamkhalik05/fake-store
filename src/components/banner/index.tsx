import { banners } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export default function Banner() {
  const renderBanners = () => {
    return banners.map((banner, index) => (
      <CarouselItem key={index}>
        <img
          className="object-cover w-full rounded-xl"
          src={banner.image}
          alt={banner.title}
        />
      </CarouselItem>
    ));
  };

  return (
    <div className="px-12">
      <Carousel opts={{ loop: true, duration: 100 }}>
        <CarouselContent>{renderBanners()}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
