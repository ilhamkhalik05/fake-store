import Banner from '@/components/banner';
import Category from '@/components/category';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <Banner />
      <Category />
    </div>
  );
}
