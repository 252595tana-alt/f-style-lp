import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'F-style｜徳島市国府町の車検・整備・カスタム・中古車販売',
  description:
    '徳島市国府町のF-style。中古車販売・買取・車検・整備・修理・板金・カスタムまで、地域のカーライフをトータルサポート。車検・整備・カスタムのご相談はLINEからお気軽にお問い合わせください。',
  openGraph: {
    title: 'F-style｜徳島市国府町のカーライフショップ',
    description:
      'カスタム、車検、整備、中古車販売まで。徳島市国府町を中心に地域のカーライフを支えます。',
    images: ['/concept-custom-car.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F-style｜徳島市国府町のカーライフショップ',
    description:
      'カスタム、車検、整備、中古車販売まで。徳島市国府町を中心に地域のカーライフを支えます。',
    images: ['/concept-custom-car.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
