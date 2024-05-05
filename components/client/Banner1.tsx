import Image from 'next/image';
import React from 'react'
const banner1 = '/images/banner-1.png';

const Banner1 = () => {
    return (
        <div className='select-none w-full flex flex-col gap-8 items-center justify-center'>
            <div className='relative flex flex-row gap-8 items-center justify-between w-[80%] px-16 py-8 bg-[#54372B] rounded-2xl border border-solid border-brown-500'>
                <Image
                    className='h-full w-auto -my-20 -ms-16 cursor-pointer'
                    src={banner1}
                    alt="banner 1"
                    width={500}
                    height={500}
                    quality={100}
                    loading='lazy'
                />

                <h2 dir='rtl' className='py-8 font-light text-xl leading-8 text-brown-200 text-justify'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </h2>

                <h3 className='absolute -right-5 -top-5 shadow-title-banner text-5xl fontMorvarid'>
                    خرید آنلاین انواع قهوه
                </h3>
            </div>
            <div className='w-full flex flex-row gap-8 items-center justify-center'>
                <span className='flex items-center justify-center text-center size-8 p-4 bg-brown-800 hover:bg-brown-900 transition-all rounded-full cursor-pointer' />
                <span className='flex items-center justify-center text-center size-8 p-4 bg-brown-500 hover:bg-brown-900 transition-all rounded-full cursor-pointer' />
                <span className='flex items-center justify-center text-center size-8 p-4 bg-brown-800 hover:bg-brown-900 transition-all rounded-full cursor-pointer' />
            </div>
        </div>
    )
}

export default Banner1