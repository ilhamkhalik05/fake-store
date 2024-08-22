import getMetadata from '@/lib/meta';
import { poppins } from '@/lib/fonts';
import './globals.css';

export const metadata = getMetadata({
  title: 'Find the best products with the best price',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
