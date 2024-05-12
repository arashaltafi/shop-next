"use client"

import LandingPage from "@/components/client/LandingPage";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-start">
      <ParallaxProvider>
        <LandingPage />
      </ParallaxProvider>
    </main>
  );
}
