import { Card } from '../ui/card';
import Image from 'next/image';
import salePromo from '@public/sale-promo.jpg';

export default function PromoCard() {
  return (
    <Card>
      <Image
        className="w-96 object-contain rounded-sm"
        src={salePromo}
        alt="sale"
      />
    </Card>
  );
}
