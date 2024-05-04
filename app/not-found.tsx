"use client"

import { Metadata } from 'next';
import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
const notFound = "/lotties/404.json";

const NotFound = () => {

    const handleClick = () => {
        window.open("/", "_self")
    }

    return (
        <div
            className='select-none w-full h-[90vh] flex flex-col items-center justify-around px-16 py-8 overflow-hidden'>
            <Player
                className='w-1/2 h-auto'
                src={notFound}
                autoplay
                loop
                speed={1}
            />

            <h1 className='h1'>
                Page Not Found !
            </h1>

            <button onClick={handleClick} className='btn btnPrimary'>
                Back To Home
            </button>
        </div>
    )
}

export default NotFound

export const metadata: Metadata = {
    title: "Not Found | 404",
    description: "This Page Noting Found!",
    authors: [
        {
            name: 'Arash Altafi',
        }
    ],
    icons: {
        icon: "/images/404.png",
    }
}