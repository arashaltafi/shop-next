import Image from 'next/image';
import React from 'react'
const logo = '/images/logo.png';
const search = '/images/search.svg';
const user = '/images/user.svg';
const basket = '/images/basket.svg';

const Header = () => {
  return (
    <header className='fixed top-4 left-8 right-8 z-50 flex flex-row items-center justify-center gap-12 select-none backdrop-filter py-[1px] px-4 bg-brown-900/50 rounded-3xl backdrop-blur-[5px]'>
      <nav className='flex flex-row gap-6 items-center justify-center'>
        <li>
          <Image
            className='size-8 cursor-pointer hover:scale-105 active:scale-95'
            src={search}
            alt="search"
            width={100}
            height={100}
            quality={100}
            priority
            loading='eager'
          />
        </li>
        <li>
          <Image
            className='size-8 cursor-pointer hover:scale-105 active:scale-95'
            src={basket}
            alt="search"
            width={100}
            height={100}
            quality={100}
            priority
            loading='eager'
          />
        </li>
        <li>
          <Image
            className='size-8 cursor-pointer hover:scale-105 active:scale-95'
            src={user}
            alt="search"
            width={100}
            height={100}
            quality={100}
            priority
            loading='eager'
          />
        </li>
      </nav>

      <ul className='flex gap-8 flex-row-reverse flex-1 *:text-2xl *:transition-all'>
        <li className='cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
          فروشگاه
        </li>
        <li className='cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
          پشتیبانی
        </li>
        <li className='cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
          ارتباط با ما
        </li>
        <li className='cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
          درباره ما
        </li>
        <li className='cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
          بلاگ
        </li>
      </ul>

      <Image
        className='size-[88px] cursor-pointer hover:brightness-125 transition-all duration-150'
        src={logo}
        alt="logo"
        width={100}
        height={100}
        quality={100}
        priority
        loading='eager'
      />
    </header>
  )
}

export default Header