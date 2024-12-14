import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { PoppinsVariable } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: '#4171EA' },
        }}
      >
        <body className={`${PoppinsVariable} antialiased`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
