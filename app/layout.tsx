import type { Metadata, Viewport } from "next";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local'
import Script from "next/script";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const shabnamFont = localFont({
  src: [
    {
      path: '../public/fonts/iranYekan/IRANYekanX-ExtraBold.ttf',
      weight: '900'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-DemiBold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-Bold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-Medium.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-Thin.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/iranYekan/IRANYekanX-UltraLight.ttf',
      weight: '100'
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
      <body className={shabnamFont.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
