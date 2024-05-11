import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div
            className='select-none w-full flex flex-col gap-12 items-center justify-around px-10 sm:px-12 md:px-14 lg:px-16 py-4 sm:py-6 md:py-8 overflow-hidden'>
            <Image
                className='size-72 sm:size-80 md:size-96 shake2'
                src='/images/404.png'
                alt='404-notFound'
                width={500}
                height={500}
                priority
                loading='eager'
                quality={100}
            />

            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                Page Not Found !
            </h1>

            <Link href={'/'} className='btn btnPrimary'>
                Back To Home
            </Link>
        </div>
    )
}

export default NotFound

export const metadata: Metadata = {
    title: "Not Found",
    description: "This Page Noting Found!",
    icons: {
        icon: "/images/logo-grayscale.png",
    }
}