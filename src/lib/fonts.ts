import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  variable: '--font-poppins',
});

export { inter, poppins };
