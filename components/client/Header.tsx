"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const logo = '/images/logo.png';
const search = '/images/search.svg';
const user = '/images/user.svg';
const basket = '/images/basket.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { usePathname, useRouter } from 'next/navigation';
import { hasCookie } from '@/utils/Cookie';
import { Badge } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@/libs/hooks';
import { addProductCount } from '@/libs/features/productSlice';

enum HeaderItems {
  LOGIN = '/login',
  PROFILE = '/profile',
  SHOP = '/',
  SUPPORT = '/support',
  CONTACT = '/contact',
  ABOUT = '/about',
  BLOG = '/blog'
}

enum HeaderMenu {
  PROFILE = '/profile',
  BASKET = '/basket',
  SEARCH = '/search'
}

interface HeaderProps {
  isFromMainHeader: boolean
}

const Header = (props: HeaderProps) => {
  const [currentState, setCurrentState] = useState<HeaderItems | null>()
  const [isHaveToken, setIsHaveToken] = useState<boolean>(false)

  const router = useRouter()
  const pathName = usePathname()

  useEffect(() => {
    setIsHaveToken(hasCookie(process.env.TOKEN))
  }, [])

  useEffect(() => {
    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      menu.classList.add("-translate-x-[1000px]")
      blur.classList.add("hidden")
    }
  }, [])

  useEffect(() => {
    switch (pathName) {
      case HeaderItems.SHOP:
        setCurrentState(HeaderItems.SHOP)
        break;
      case HeaderItems.SUPPORT:
        setCurrentState(HeaderItems.SUPPORT)
        break;
      case HeaderItems.CONTACT:
        setCurrentState(HeaderItems.CONTACT)
        break;
      case HeaderItems.ABOUT:
        setCurrentState(HeaderItems.ABOUT)
        break;
      case HeaderItems.BLOG:
        setCurrentState(HeaderItems.BLOG)
        break;
      default:
        break;
    }
  }, [pathName])

  // close menu on back click 
  useEffect(() => {
    window.addEventListener('popstate', () => {
      handleBlur()
    })
  }, [])

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMenu = () => {
    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      // add history state for handling back click
      window.history.pushState(null, document.title, window.location.href)
      menu.classList.remove("-translate-x-[1000px]")
      blur.classList.remove("hidden")
    }
  }

  const handleBlur = () => {
    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      menu.classList.add("-translate-x-[1000px]")
      blur.classList.add("hidden")
    }
  }

  const handleClickMenuItems = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.target as HTMLUListElement
    if (target.id === 'undefined' || target.id === '' || target.id === null) return
    if (!target.id.includes('menuItem')) return
    const targetId = target.id.replace('menuItem-', '')
    if (targetId === '' || targetId === null) return

    console.log('menuItem clicked:', targetId)
    handleScroll(targetId)
    router.push(`${targetId}`)

    handleBlur()
  }

  const handleScroll = (id: string) => {
    scrollToId(id)
    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      menu.classList.add("-translate-x-[1000px]")
      blur.classList.add("hidden")
    }
  }

  const handleClickTopMenu = (href: HeaderMenu) => {
    switch (href) {
      case HeaderMenu.BASKET:
        router.push(href)
        break;
      case HeaderMenu.SEARCH:
        router.push(href)
        break;
      case HeaderMenu.PROFILE:
        router.push(isHaveToken ? href : '/auth/login')
        break;
      default:
        break;
    }
  }

  const localStorageCount = useAppSelector((state) => state.productSlice.productCount)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addProductCount())
  }, [])

  return (
    <div className={`relative ${props.isFromMainHeader == false && 'w-full'}`}>
      <header className='hidden md:flex fixed top-4 left-8 right-8 z-50 flex-row items-center justify-center gap-8 lg:gap-10 xl:gap-12 select-none backdrop-filter py-[1px] px-4 bg-brown-900/50 rounded-3xl backdrop-blur-[5px]'>
        <ul className='flex flex-row gap-4 lg:gap-5 xl:gap-6 items-center justify-center'>
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
              onClick={() => handleClickTopMenu(HeaderMenu.SEARCH)}
            />
          </li>
          <li>
            <Badge
              color="success"
              badgeContent={localStorageCount}
              max={99}
              variant='standard'>
              <Image
                className='size-8 cursor-pointer hover:scale-105 active:scale-95'
                src={basket}
                alt="basket"
                width={100}
                height={100}
                quality={100}
                priority
                loading='eager'
                onClick={() => handleClickTopMenu(HeaderMenu.BASKET)}
              />
            </Badge>
          </li>
          <li>
            <Image
              className='size-8 cursor-pointer hover:scale-105 active:scale-95'
              src={user}
              alt="user"
              width={100}
              height={100}
              quality={100}
              priority
              loading='eager'
              onClick={() => handleClickTopMenu(HeaderMenu.PROFILE)}
            />
          </li>
        </ul>

        <ul className='flex gap-4 lg:gap-6 xl:gap-8 flex-row-reverse flex-1 child:text-lg child:lg:text-xl child:xl:text-2xl child:transition-all'>
          <Link href={'/'} className={`cursor-pointer ${currentState === HeaderItems.SHOP && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            فروشگاه
          </Link>
          <Link href={'/support'} className={`cursor-pointer ${currentState === HeaderItems.SUPPORT && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            پشتیبانی
          </Link>
          <Link href={'/contact'} className={`cursor-pointer ${currentState === HeaderItems.CONTACT && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            ارتباط با ما
          </Link>
          <Link href={'/about'} className={`cursor-pointer ${currentState === HeaderItems.ABOUT && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            درباره ما
          </Link>
          <Link href={'/blog'} className={`cursor-pointer ${currentState === HeaderItems.BLOG && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            بلاگ
          </Link>
        </ul>

        <Image
          onClick={() => router.push('/')}
          className='size-[68px] lg:size-[78px] xl:size-[88px] cursor-pointer hover:brightness-125 transition-all duration-150'
          src={logo}
          alt="logo"
          width={100}
          height={100}
          quality={100}
          priority
          loading='eager'
        />
      </header>

      <div className='absolute top-4 left-4 md:hidden z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150'>
        <MenuRoundedIcon
          onClick={handleMenu}
        />
      </div>

      <div
        id='menu'
        className='z-50 fixed top-0 left-0 bottom-0 w-3/4 flex flex-col items-center justify-start bg-brown-900/95 md:hidden transition-all duration-300 -translate-x-[1000px]'>

        <Image
          onClick={handleBlur}
          className='size-16 sm:size-20 cursor-pointer hover:brightness-125 absolute top-4 left-4 hover:scale-105 active:scale-95 transition-all duration-150'
          src={logo}
          placeholder='blur'
          blurDataURL={logo}
          alt="logo"
          width={100}
          height={100}
          quality={100}
          priority
          loading='eager'
        />

        <div className=' absolute top-8 right-6'>
          <Badge
            color="success"
            badgeContent={localStorageCount}
            max={99}
            variant='standard'>
            <Image
              className='size-8 sm:size-12 cursor-pointer hover:brightness-125 hover:scale-105 active:scale-95 transition-all duration-150'
              src={basket}
              placeholder='blur'
              blurDataURL={basket}
              alt="basket"
              width={100}
              height={100}
              quality={100}
              priority
              loading='eager'
              onClick={() => router.push('/basket')}
            />
          </Badge>
        </div>

        <ul
          onClick={(e) => handleClickMenuItems(e)}
          className='w-full mt-20 menu overflow-y-auto flex items-center justify-center flex-col child:text-lg child:lg:text-xl child:xl:text-2xl child:transition-all'>
          <li id='menuItem-auth/login' className={`${isHaveToken ? 'hidden' : 'block'} w-full py-8 text-center cursor-pointer ${currentState === HeaderItems.LOGIN && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            ورود / ثبت نام
          </li>
          <li id='menuItem-profile' className={`${isHaveToken ? 'block' : 'hidden'} w-full py-8 text-center cursor-pointer ${currentState === HeaderItems.PROFILE && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            پروفایل
          </li>
          <span className='w-full h-px bg-brown-500 rounded-full' />
          <li id='menuItem-/' className={`w-full py-8 text-center cursor-pointer ${currentState === HeaderItems.SHOP && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            فروشگاه
          </li>
          <span className='w-full h-px bg-brown-500 rounded-full' />
          <li id='menuItem-support' className={`w-full py-8 text-center cursor-pointer ${currentState === HeaderItems.SUPPORT && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            پشتیبانی
          </li>
          <span className='w-full h-px bg-brown-500 rounded-full' />
          <li id='menuItem-contact' className={`w-full py-8 text-center cursor-pointer ${currentState === HeaderItems.CONTACT && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            ارتباط با ما
          </li>
          <span className='w-full h-px bg-brown-500 rounded-full' />
          <li id='menuItem-about' className={`w-full py-8 text-center cursor-pointer ${currentState === HeaderItems.ABOUT && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            درباره ما
          </li>
          <span className='w-full h-px bg-brown-500 rounded-full' />
          <li id='menuItem-blog' className={`w-full py-8 text-center cursor-pointer ${currentState === HeaderItems.BLOG && 'text-brown-400 underline'} hover:text-brown-300 hover:scale-105 active:scale-95`}>
            بلاگ
          </li>
        </ul>
      </div>

      <div
        id='blur'
        onClick={handleBlur}
        className='z-40 fixed hidden md:hidden inset-0 backdrop-blur-sm bg-brown-900/50 dark:bg-slate-800/50'
      />

    </div>
  )
}

export default Header