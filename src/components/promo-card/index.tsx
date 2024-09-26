import Image from 'next/image';
import salePromo from '@public/sale-promo.jpg';

export default function PromoCard() {
  return (
    <Image
      className="w-full md:w-72 object-cover rounded-sm"
      src={salePromo}
      alt="sale"
      width={1000}
      height={1000}
      priority={true}
    />
  );
}
