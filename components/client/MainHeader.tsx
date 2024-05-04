import React from 'react'
import Header from './Header'
import Image from 'next/image'
const bg1 = '/images/bg-1.png';
const bg2 = '/images/bg-2.png';

const MainHeader = () => {
    return (
        <div className='relative w-full h-[80vh] mt-8'>
            <Header />
            <div className='absolute top-28 bottom-0 left-0 flex flex-col items-center justify-center gap-12'>
                <h1>arash altafi</h1>
            </div>
            <>
                <span
                    className='absolute -mt-8 top-0 bottom-0 right-0 blur-[1px] bg-gradient-to-bl from-1% top-99% from-[#7C573C] to-transparent w-1/3 h-[90vh] z-0'
                />
                <Image
                    className='absolute top-28 bottom-0 right-0 w-auto h-full z-20'
                    width={500}
                    height={500}
                    src={bg1}
                    alt="background1"
                    quality={100}
                    loading='lazy'
                />
                <Image
                    className='absolute top-28 bottom-0 right-0 w-auto h-full z-10'
                    width={500}
                    height={500}
                    src={bg2}
                    alt="background2"
                    quality={100}
                    loading='lazy'
                />
            </>
        </div>
    )
}

export default MainHeader