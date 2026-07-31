import { Montserrat } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/components/ScrollProgress';
import CookieConsent from '@/components/CookieConsent';
import ToastProvider from '@/components/ToastProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Manyam Foods - Premium Packaged Drinking Water',
  description:
    'Manyam Foods Private Limited - Trusted manufacturer and supplier of premium packaged drinking water. FSSAI certified, 100% hygienic, advanced purification technology.',
  keywords: [
    'packaged drinking water',
    'bottled water',
    'Manyam Foods',
    'FSSAI certified water',
    'purified drinking water',
    'mineral water',
    'water supplier',
    'water manufacturer',
  ],
  openGraph: {
    title: 'Manyam Foods - Premium Packaged Drinking Water',
    description:
      'Manyam Foods Private Limited - Trusted manufacturer and supplier of premium packaged drinking water. FSSAI certified, 100% hygienic, advanced purification technology.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Manyam Foods Private Limited',
  },
  metadataBase: new URL('https://manyamfoods.com'),
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="font-montserrat text-dark-text bg-white dark:text-dark-text-light dark:bg-dark-bg antialiased transition-colors duration-300">
        <ThemeProvider>
        <ToastProvider>
       
        <Navbar />
        <main>{children}</main>
        <Footer />
       
        <FloatingButtons />
        </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
