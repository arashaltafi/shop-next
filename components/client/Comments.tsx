"use client"

import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, EffectCube } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
const wave1 = 'images/svg-wave-1.svg';

const Comments = () => {
  const [comments, setComments] = useState<{
    id: number, name: string, description: string, star: number
  }[]>([])

  useEffect(() => {
    setComments([
      {
        id: 1,
        name: 'لورم 1',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        star: 5.0
      }, {
        id: 2,
        name: 'لورم 2',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        star: 3.5
      }, {
        id: 3,
        name: 'لورم 3',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        star: 4.0
      }, {
        id: 4,
        name: 'لورم 4',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        star: 1.0
      }, {
        id: 5,
        name: 'لورم 5',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        star: 2.5
      }
    ])
  }, [])

  const handleClickProduct = (e: MouseEvent | TouchEvent | PointerEvent) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'undefined' || target.id === '' || target.id === null) return

    if (target.id.includes('comment')) {
      const targetId = parseInt(target.id.replace('comment-', '')) || 0
      console.log('comment clicked:', targetId)
    } else {
      return
    }
  }

  return (
    <div className='relative select-none md:mt-12 lg:mt-16 xl:mt-20 w-full flex flex-col items-center justify-center gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-8 md:gap-y-10 lg:gap-y-12 xl:gap-y-16 px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>

      <div
        className='absolute w-full h-full -z-10'
        style={{
          background: "url('/images/bg-5.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#3E2723",
          filter: 'blur(2px)'
        }}>

      </div>
      <h2 dir='rtl' className='w-full text-start text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-8 fontMorvarid'>
        نظریات مشتریان:
      </h2>

      <Swiper
        className="w-full flex flex-row flex-nowrap items-center justify-center gap-16"
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        modules={[Navigation, EffectCards, EffectCube]}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={{
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        }}
        pagination={{ clickable: true }}
        onClick={(_, e) => handleClickProduct(e)}
      >
        {
          comments.map((comment) => {
            return (
              <SwiperSlide key={comment.id} className="size-[200px] rounded-lg overflow-hidden">
                <div
                  key={comment.id}
                  className='relative bg-[#291a1e] cursor-pointer group text-start flex flex-col items-center justify-center gap-8 rounded-xl px-8 py-5 border-2 border-solid border-brown-700 text-brown-200 hover:text-brown-100 hover:bg-brown-900 transition-all duration-200'
                >
                  <h3 dir='rtl' className='w-full text-3xl line-clamp-1 text-ellipsis fontMorvarid'>
                    {comment.name}
                  </h3>

                  <Rating
                    value={comment.star}
                    readOnly={true}
                    precision={0.5}
                    size='large'
                    sx={{
                      '.MuiRating-icon': {
                        color: '#e0cec7'
                      },
                      '.MuiRating-iconFilled': {
                        color: '#EAB308'
                      }
                    }}
                  />

                  <p dir='rtl' className='w-full text-lg min-h-36 line-clamp-5 text-ellipsis text-justify font-light'>
                    {comment.description}
                  </p>
                  <span id={`comment-${comment.id}`} className='z-40 absolute inset-0' />
                  <Image
                    className='absolute bottom-0 w-full opacity-50'
                    src={wave1}
                    width={100}
                    height={100}
                    quality={100}
                    alt='background wave'
                    priority
                    loading='eager'
                  />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <div className='flex flex-row items-center justify-center gap-8 mb-2'>
        <Image
          className='size-12 swiper-button-prev1 cursor-pointer transition-all hover:scale-105 active:scale-95'
          src={'/images/arrow-left-circle.svg'}
          alt='arrow left'
          width={50}
          height={50}
          quality={100}
          priority
          loading='eager'
        />
        <Image
          className='size-12 swiper-button-next1 cursor-pointer transition-all hover:scale-105 active:scale-95'
          src={'/images/arrow-right-circle.svg'}
          alt='arrow right'
          width={50}
          height={50}
          quality={100}
          priority
          loading='eager'
        />
      </div>
    </div>
  )
}

export default Comments