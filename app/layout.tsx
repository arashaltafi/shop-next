import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Script from "next/script";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const vazirFont = localFont({
  src: [
    {
      path: '../public/fonts/Vazirmatn-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../public/fonts/Vazirmatn-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/Vazirmatn-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/Vazirmatn-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/Vazirmatn-Black.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/Vazirmatn-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Vazirmatn-ExtraLight.ttf',
      weight: '200'
    }
  ]
})

export const metadata: Metadata = {
  title: "Arash Altafi",
  description: "Arash Altafi Portfolio",
  authors: [
    {
      name: 'Arash Altafi',
    }
  ],
  icons: {
    icon: "/images/arash.png",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0,  viewport-fit=cover, user-scalable=no",
  themeColor: '#f8f8f8',
  appleWebApp: {
    title: 'Arash Altafi',
    capable: true,
    statusBarStyle: 'default',
  },
  manifest: '/manifest.json',
  other: {
    "msapplication-TileColor": "#f8f8f8",
    "msapplication-TileImage": "/images/arash.png",
    "theme-color": "#f8f8f8",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Arash Altafi",
    "google": "notranslate",
    "charset": "UTF-8",
    "darkreader-lock": "",
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* <Script src='/scripts/script.js' /> */}
      <body className={vazirFont.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
