import type {Metadata} from 'next';
import {Be_Vietnam_Pro, JetBrains_Mono} from 'next/font/google';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SOLOEXPERT - Tự đóng gói và bán chương trình đầu tiên',
  description: 'Khóa học thực chiến cho Coach & Consultant: Tự đóng gói và bán chương trình đầu tiên theo tốc độ của bạn. 6 module, 42 bài thực hành, 42 template dùng ngay.',
  openGraph: {
    title: 'SOLOEXPERT - Tự đóng gói và bán chương trình đầu tiên',
    description: 'Khóa học thực chiến cho Coach & Consultant: 6 module, 42 bài thực hành, 42 template dùng ngay.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLOEXPERT - Tự đóng gói và bán chương trình đầu tiên',
    description: 'Khóa học thực chiến cho Coach & Consultant: 6 module, 42 bài thực hành, 42 template dùng ngay.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={`scroll-smooth ${beVietnamPro.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-[#EEF3F8] text-[#1B2A41] antialiased selection:bg-[#0870C4] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

