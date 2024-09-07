import { Card } from '../@shadcn-ui/card';
import Image from 'next/image';
import salePromo from '@public/sale-promo.jpg';

export default function PromoCard() {
  return (
    <Card>
      <Image
        className="w-full md:w-96 object-cover rounded-sm"
        src={salePromo}
        alt="sale"
      />
    </Card>
  );
}
