import withPWAInit from "@ducanh2912/next-pwa";

// way 1 (work success!)
// https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started
// npm i @ducanh2912/next-pwa 
// npm i -D webpack
// npm i next-pwa

// way 2
// https://github.com/shadowwalker/next-pwa
// https://www.npmjs.com/package/next-pwa
// npm i next-pwa

const pwa = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
//   scope: '/app',
//   sw: 'service-worker.js',
//   fallbacks: {
//       document: '/offline',
//   },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        BASKET_STORAGE: "basket",
        MY_NAME: "ArashAltafi",
        MAPBOX_KEY: "pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig",
        TOKEN: "shop-token",
        ADMIN_TOKEN: "shop-admin-token",
    }
};

export default pwa(nextConfig);