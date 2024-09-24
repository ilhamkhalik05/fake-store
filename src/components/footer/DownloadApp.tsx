import appStore from '@public/app-store.png';
import playStore from '@public/play-store.png';
import { FooterTitle } from '.';
import Image from 'next/image';

export const DownloadApp = () => {
  return (
    <div className="flex flex-col gap-4">
      <FooterTitle>Download Our App</FooterTitle>
      <div className="flex flex-col gap-2">
        <Image
          className="w-52 cursor-pointer"
          src={playStore.src}
          alt="Play Store"
          width={1000}
          height={1000}
        />
        <Image
          className="w-52 cursor-pointer"
          src={appStore.src}
          alt="App Store"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
