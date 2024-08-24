import appStore from '@public/app-store.png';
import playStore from '@public/play-store.png';
import { FooterTitle } from '.';

export const DownloadApp = () => {
  return (
    <div className="flex flex-col gap-4">
      <FooterTitle>Download Our App</FooterTitle>
      <div className="flex flex-col gap-2">
        <img className="w-52" src={playStore.src} alt="" />
        <img className="w-52" src={appStore.src} alt="" />
      </div>
    </div>
  );
};
