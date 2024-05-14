import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Header from '@/components/client/Header';
import CoffeeBeans from '@/components/client/CoffeeBeans';
import Footer from '@/components/client/Footer';

const NotFound = () => {
    return (
        <div className='select-none w-full flex flex-col gap-28 items-center justify-start'>
            <Header isFromMainHeader={false} />

            <div className='w-full flex flex-col gap-16 items-center justify-center px-10 sm:px-12 md:px-14 lg:px-16 py-4 sm:py-6 md:py-8'>
                <div className='flex flex-row items-center justify-center shake2'>
                    <h2 className='text-7xl sm:text-8xl md:text-9xl text-brown-200'>4</h2>
                    <Image
                        className='size-28 sm:size-40 md:size-48 brightness-150'
                        src='/images/logo.png'
                        alt='404-notFound'
                        width={500}
                        height={500}
                        priority
                        loading='eager'
                        quality={100}
                    />
                    <h2 className='text-7xl sm:text-8xl md:text-9xl text-brown-200'>4</h2>
                </div>

                <h1 dir='rtl' className='text-md sm:text-lg md:text-xl lg:text-2xl'>
                    صفحه مورد نظر یافت نشد !!!
                </h1>

                <Link href={'/'} className='btn btnLightBrown flex'>
                    <h3>
                        بازگشت به صفحه اصلی
                    </h3>

                    <KeyboardArrowRightIcon className='ml-3' />
                </Link>
            </div>

            <Footer />
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