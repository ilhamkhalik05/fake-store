import Banner from '@/components/banner';
import TopProductsList from '@/components/card-list';
import PromoCard from '@/components/promo-card';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col p-5">
      <Banner />

      <Card className="mt-20 flex items-center gap-10 w-full py-5 px-7 bg-gradient-to-br from-10% from-white to-gray-100">
        <PromoCard />
        <TopProductsList />
      </Card>
    </div>
  );
}
