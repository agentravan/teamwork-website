import type { Metadata } from 'next';
import './globals.css';
import MainLayoutWrapper from '@/components/MainLayoutWrapper';

export const metadata: Metadata = {
  title: {
    default: 'TeamWork Group | Corporate HR Consulting, Hampers & IT Rental',
    template: '%s | TeamWork Group',
  },
  description:
    'TeamWork Group ("together we can do so much") — Gurugram-based corporate umbrella for TeamWork HR Consulting, GiftCraft Hampers, and GadgetOnRent.',
  metadataBase: new URL('https://teamworkgroup.in'),
  keywords: [
    'TeamWork Group',
    'Gurugram HR Consulting',
    'Payroll outsourcing India',
    'GiftCraft Hampers',
    'Corporate Diwali gifting',
    'Onboarding welcome kits',
    'GadgetOnRent',
    'Laptop rental Gurugram',
    'Printer rental',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-blue-500 selection:text-white">
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}
