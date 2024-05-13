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
  title: {
    default: 'Coffe Shop',
    template: '%s | Coffee Shop'
  },
  description: "Coffe Shop Online",
  keywords: ['shop', 'shops', 'coffee', 'coffeeshop', 'coffee-shop'],
  authors: [
    {
      name: 'Arash Altafi',
    }
  ],
  icons: {
    icon: "/images/logo.png",
  },
  themeColor: '#f8f8f8',
  appleWebApp: {
    title: 'Coffee Shop',
    capable: true,
    statusBarStyle: 'default',
  },
  twitter: {
    title: 'Coffe Shop',
    description: 'Coffe Shop Online'
  },
  other: {
    "msapplication-TileColor": "#f8f8f8",
    "msapplication-TileImage": "/images/logo.png",
    "theme-color": "#f8f8f8",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Coffee Shop",
    "google": "notranslate",
    "charset": "UTF-8"
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="darkreader-lock" />
        <meta name="HandheldFriendly" content="true" />
      </head>
      <Script src='/scripts/script.js' />
      <body className={vazirFont.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
