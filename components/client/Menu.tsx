import Image from 'next/image'
import React from 'react'
const menu = '/images/menu-bg.png';
const bgMenu = '/images/bg-radial.svg';
const bean1 = '/images/coffee-beans-5.png';
const bean2 = '/images/coffee-beans-4.png';

const Menu = () => {
    return (
        <div className='select-none mt-28 w-full flex flex-col items-center justify-center gap-8 px-16'>
            <h2 className='text-5xl fontMorvarid shadow-title'>منو اصلی</h2>

            <div className='relative w-full flex flex-col items-center justify-center'>
                <Image
                    className='h-auto w-1/3 z-20'
                    src={menu}
                    alt="menu"
                    width={500}
                    height={500}
                    quality={90}
                    loading='lazy'
                />
                <Image
                    className='absolute h-auto w-1/3 z-10 opacity-50'
                    src={bgMenu}
                    alt="bg menu"
                    width={500}
                    height={500}
                    quality={90}
                    loading='lazy'
                />
                <Image
                    className='size-28 absolute left-8 top-8'
                    width={100}
                    height={100}
                    src={bean1}
                    alt="coffee-bean-1"
                    quality={100}
                    loading='lazy'
                />
                <Image
                    className='size-28 absolute left-20 top-28'
                    width={100}
                    height={100}
                    src={bean1}
                    alt="coffee-bean-1"
                    quality={100}
                    loading='lazy'
                />
                <Image
                    className='size-24 absolute right-20 bottom-28'
                    width={100}
                    height={100}
                    src={bean2}
                    alt="coffee-bean-2"
                    quality={100}
                    loading='lazy'
                />
                <Image
                    className='size-28 absolute right-8 bottom-8'
                    width={100}
                    height={100}
                    src={bean2}
                    alt="coffee-bean-2"
                    quality={100}
                    loading='lazy'
                />

            </div>
        </div>
    )
}

export default Menu