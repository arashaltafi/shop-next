"use client"

import React, { useEffect } from 'react'
import Header from './Header'
import Image from 'next/image'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import { useRouter } from 'next/navigation'
const bg1 = '/images/bg-1.png'
const bg2 = '/images/bg-2.png'
const bg3 = '/images/bg-3.png'
const bg4 = '/images/bg-4.png'
const logo = '/images/logo.png';

const MainHeader = () => {
    const router = useRouter()

    // close menu on back click 
    useEffect(() => {
        window.addEventListener('popstate', () => {
            handleBlur()
        })
    }, [])

    const scrollToId = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const menu = document.getElementById("menu")
        const blur = document.getElementById("blur")
        if (menu && blur) {
            menu.classList.add("-translate-x-[1000px]")
            blur.classList.add("hidden")
        }
    }, [])

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
        //router.push(`#${targetId}`) todo

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

    return (
        <div className='select-none relative w-full h-[70vh] lg:h-[80vh] xl:h-[90vh] flex flex-row justify-between bg-gradient-to-bl from-[1%] to-[99%] from-[#7C573C] to-transparent customBorderBottom overflow-hidden'>
            <Header />
            <div className='flex flex-col items-center justify-center ps-8 gap-12'>
                <Image
                    className='w-full h-auto shake2'
                    width={300}
                    height={300}
                    src={bg3}
                    placeholder='blur'
                    blurDataURL={bg3}
                    alt="background3"
                    quality={100}
                    loading='lazy'
                />
                <h2 className='shadow-title text-center text-2xl lg:text-3xl xl:text-4xl blink fontMorvarid'>
                    خرید آنلاین انواع قهوه
                </h2>
                <p className='text-center text-brown-300 text-base lg:text-lg xl:text-xl'>
                    فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب
                </p>
            </div>
            <div className='relative w-full'>
                <Image
                    className='w-full h-full pt-16 lg:pt-12 xl:pt-8 z-20'
                    width={500}
                    height={500}
                    src={bg1}
                    placeholder='blur'
                    blurDataURL={bg1}
                    alt="background1"
                    quality={100}
                    loading='lazy'
                />
                <Image
                    className='absolute bottom-0 right-0 w-[90%] h-full -z-10 pt-36 shake3'
                    width={500}
                    height={500}
                    src={bg2}
                    placeholder='blur'
                    blurDataURL={bg2}
                    alt="background2"
                    quality={100}
                    loading='lazy'
                />
            </div>

            <div className='absolute top-4 left-4 md:hidden z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150'>
                <MenuRoundedIcon
                    onClick={handleMenu}
                />
            </div>

            <div
                id='menu'
                className='z-50 fixed top-0 left-0 bottom-0 w-3/4 flex flex-col items-center justify-start bg-brown-900/95 md:hidden transition-all duration-300 -translate-x-[1000px]'>

                <div
                    onClick={handleBlur}
                    className='absolute bottom-4 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150'>
                    <CancelRoundedIcon />
                </div>

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

                <ul
                    onClick={(e) => handleClickMenuItems(e)}
                    className='w-full mt-20 flex items-center justify-center flex-col child:text-lg child:lg:text-xl child:xl:text-2xl child:transition-all'>
                    <li id='menuItem-shop' className='w-full py-8 text-center cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
                        فروشگاه
                    </li>
                    <span className='w-full h-px bg-brown-500 rounded-full' />
                    <li id='menuItem-support' className='w-full py-8 text-center cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
                        پشتیبانی
                    </li>
                    <span className='w-full h-px bg-brown-500 rounded-full' />
                    <li id='menuItem-contactus' className='w-full py-8 text-center cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
                        ارتباط با ما
                    </li>
                    <span className='w-full h-px bg-brown-500 rounded-full' />
                    <li id='menuItem-aboutus' className='w-full py-8 text-center cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
                        درباره ما
                    </li>
                    <span className='w-full h-px bg-brown-500 rounded-full' />
                    <li id='menuItem-blog' className='w-full py-8 text-center cursor-pointer hover:text-brown-300 hover:scale-105 active:scale-95'>
                        بلاگ
                    </li>
                </ul>
            </div>

            <div
                id='blur'
                onClick={handleBlur}
                className='z-40 fixed hidden md:hidden inset-0 backdrop-blur-sm bg-brown-900/50 dark:bg-slate-800/50'
            />

            <Image
                className='hidden sm:block -z-10 w-full absolute top-0 bottom-0'
                src={bg4}
                width={500}
                height={500}
                placeholder='blur'
                blurDataURL={bg4}
                alt="background 4"
                quality={100}
                loading='lazy'
            />
        </div>
    )
}

export default MainHeader