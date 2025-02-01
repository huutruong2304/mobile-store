import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MainHeader from '@/layout/MainHeader';
import MainFooter from '@/layout/MainFooter';
import { Provider } from '@/components/ui/provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mobile Store',
  description: 'Phone and Accessories store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <MainHeader />

          {children}
          <MainFooter />
        </Provider>
      </body>
    </html>
  );
}
