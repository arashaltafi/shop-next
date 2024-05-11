"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
const bgFooter = '/images/bg-footer.png'
const iconFooter1 = '/images/icon-footer-1.png'
const iconFooter2 = '/images/icon-footer-2.png'
const iconFooter3 = '/images/icon-footer-3.png'
const iconFooter4 = '/images/icon-footer-4.png'
const logo = '/images/logo.png'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded'
import { LinkType } from '@/utils/Enums'
import { openLink } from '@/utils/GlobalUtils'
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState<string>('')

  const handleClickLinks = (links: LinkType) => {
    switch (links) {
      case LinkType.TELEGRAM:
        openLink('https://t.me/arashaltafi1377')
        break;
      case LinkType.INSTAGRAM:
        openLink('https://instagram.com/arashaltafi')
        break;
      case LinkType.FACEBOOK:
        break;
      case LinkType.WEBSITE:
        openLink('https://app.arashaltafi.ir')
        break;
      default:
        break;
    }
  }

  const handleClickSubmitMail = () => {
    console.log('mail:', email)
    setEmail('')
  }

  return (
    <div className='relative select-none w-full flex flex-col items-center justify-between gap-8 px-2 sm:px-6 md:px-8 lg:px-14 xl:px-16 pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-4'>
      <Image
        className='absolute inset-0 size-full bg-gradient-to-r from-[10%] to-[90%] from-brown-900 to-transparent border-t border-solid border-brown-400 -z-10'
        src={bgFooter}
        alt='background footer'
        width={1000}
        height={1000}
        loading='lazy'
        quality={100}
      />

      <div className='w-full flex flex-col-reverse lg:flex-row gap-8 items-center justify-between'>
        <div className='xl:w-full flex flex-col gap-8 items-center justify-center'>
          <Image
            className='size-40 sm:size-48 cursor-pointer transition-all duration-150 hover:brightness-125'
            src={iconFooter1}
            alt='icon-footer'
            width={500}
            height={500}
            loading='lazy'
            quality={100}
          />
          <div className='w-full flex flex-row gap-4 items-center justify-center'>
            <Image
              className='size-20 sm:size-24 bg-brown-50 px-4 py-2 rounded-lg cursor-pointer hover:bg-brown-200 transition-all duration-150'
              src={iconFooter2}
              alt='icon-footer'
              width={500}
              height={500}
              loading='lazy'
              quality={100}
            />
            <Image
              className='size-20 sm:size-24 bg-brown-50 px-4 py-2 rounded-lg cursor-pointer hover:bg-brown-200 transition-all duration-150'
              src={iconFooter3}
              alt='icon-footer'
              width={500}
              height={500}
              loading='lazy'
              quality={100}
            />
            <Image
              className='size-20 sm:size-24 bg-brown-50 px-4 py-2 rounded-lg cursor-pointer hover:bg-brown-200 transition-all duration-150'
              src={iconFooter4}
              alt='icon-footer'
              width={500}
              height={500}
              loading='lazy'
              quality={100}
            />
          </div>
        </div>
        <div className='w-full flex flex-col gap-8 items-center justify-center'>
          <Image
            className='size-24 sm:size-28 self-end cursor-pointer transition-all duration-150 hover:brightness-125'
            src={logo}
            alt='logo'
            width={300}
            height={300}
            loading='lazy'
            quality={100}
          />
          <div className='w-full flex flex-col sm:flex-row gap-16 sm:gap-8 items-center justify-center'>
            <div className='w-full flex flex-col items-end justify-center gap-4 child:text-center child:sm:text-end child:sm:w-auto child:w-full'>
              <h5 className='text-lg text-brown-100 mb-4'>ارتباط با ما</h5>
              <Link
                href={'/about'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                درباره ما
              </Link>
              <Link
                href={'/support'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                پشتیبانی
              </Link>
              <Link
                href={'/guide'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                راهنمای خرید آنلاین
              </Link>
              <Link
                href={'/rules'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                قوانین و مقررات
              </Link>
            </div>
            <div className='w-full flex flex-col items-end justify-center gap-4 child:text-center child:sm:text-end child:sm:w-auto child:w-full'>
              <h5 className='text-lg text-brown-100 mb-4'>دسترسی سریع</h5>
              <Link
                href={'/coffee'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                قهوه
              </Link>
              <Link
                href={'/coffeeInstant'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                قهوه فوری
              </Link>
              <Link
                href={'/coffeeEquipment'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                تجهیزات قهوه
              </Link>
              <Link
                href={'/tea'}
                className='text-base font-light text-brown-200 hover:text-brown-300 transition-all'
              >
                چای و دمنوش
              </Link>
            </div>
            <div className='w-full flex flex-col items-end justify-center gap-4 child:text-center child:sm:text-end child:sm:w-auto child:w-full'>
              <h5 className='text-lg text-brown-100 mb-4'>آدرس</h5>
              <div className='flex flex-row items-center justify-center gap-2 transition-all text-brown-200 hover:text-brown-300'>
                <h6 className='text-base font-light'>
                  ایران، تهران
                </h6>
                <LocationOnRoundedIcon />
              </div>
              <div className='flex flex-row items-center justify-center gap-2 transition-all text-brown-200 hover:text-brown-300'>
                <h6 className='text-base font-light'>
                  شنبه - پنجشنبه
                </h6>
                <DateRangeRoundedIcon />
              </div>
              <div className='flex flex-row items-center justify-center gap-2 transition-all text-brown-200 hover:text-brown-300'>
                <h6 className='text-base font-light'>
                  arashaltafi1377@gmail.com
                </h6>
                <EmailRoundedIcon />
              </div>
              <div className='flex flex-row items-center justify-center gap-2 transition-all text-brown-200 hover:text-brown-300'>
                <h6 className='text-base font-light'>
                  +98 918 767 7641
                </h6>
                <PhoneAndroidRoundedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p dir='rtl' className='w-full text-brown-100 text-sm font-light leading-6 sm:leading-8 list-disc text-ellipsis text-justify'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>

      <div className='w-full flex flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-between bg-brown-100 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8 rounded-md sm:rounded-lg md:rounded-xl'>
        <div className='w-full flex flex-col-reverse sm:flex-row gap-y-2 gap-x-4 xl:gap-x-0 items-center justify-between bg-yellow-600 rounded-lg px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4'>
          <button className='btn btnBrown' onClick={handleClickSubmitMail}>
            ارسال
          </button>
          <div className='w-full flex flex-row gap-x-2 items-center justify-end'>
            <input
              dir='ltr'
              className='w-full xl:w-3/4 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-sm sm:rounded-md text-sm sm:text-base font-light text-black'
              key={'input-footer'}
              type="email"
              placeholder='Email ...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='hidden lg:block'>
              <EmailRoundedIcon />
            </div>
          </div>
        </div>

        <div dir='rtl' className='w-full flex gap-y-2 flex-col text-brown-900 text-center sm:text-start'>
          <h4 className='text-base sm:text-lg md:text-xl font-bold'>اطلاع رسانی</h4>
          <h6 className='text-sm sm:text-base md:text-lg font-light'>ایمیل‌تان را وارد کنید تا از تخفیف‌ها باخبر شوید.</h6>
        </div>
      </div>

      <span className='w-screen h-px sm:h-0.5 bg-brown-700 rounded-full' />

      <div className='w-full flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row items-center justify-center text-brown-100'>
        <div className='flex flex-row items-start justify-center gap-x-4 child:transition-all child:cursor-pointer child-hover:text-brown-400 child-hover:scale-105 child-active:scale-95'>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            title="وبسایت"
          >
            <div onClick={() => handleClickLinks(LinkType.WEBSITE)}>
              <PublicRoundedIcon />
            </div>
          </Tooltip>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            title="فیسبوک"
          >
            <div onClick={() => handleClickLinks(LinkType.FACEBOOK)}>
              <FacebookRoundedIcon />
            </div>
          </Tooltip>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            title="اینستاگرام"
          >
            <div onClick={() => handleClickLinks(LinkType.INSTAGRAM)}>
              <CameraAltRoundedIcon />
            </div>
          </Tooltip>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            title="تلگرام"
          >
            <div onClick={() => handleClickLinks(LinkType.TELEGRAM)}>
              <SendRoundedIcon />
            </div>
          </Tooltip>
        </div>
        <h6 dir='rtl' className='flex-1 text-sm sm:text-base font-light'>
          کلیه حقوق این سایت متعلق به آنلاین قهوه می باشد.
        </h6>
      </div>
    </div>
  )
}

export default Footer