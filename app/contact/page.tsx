import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import React from 'react'
import Image from 'next/image'
import DividerCoffee from '@/components/client/DividerCoffee'
import FormContact from '@/components/client/FormContact'

const Contact = () => {
    return (
        <div className='select-none w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>ارتباط با ما:</h1>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8'>
                    <Image
                        src={'/images/coffee-cup-2.png'}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-110 cursor-pointer transition-all duration-150'
                        alt='coffee cup'
                        priority
                        loading='eager'
                        quality={100}
                    />

                    <p dir='rtl' className='w-full text-brown-100 text-sm font-light leading-6 sm:leading-8 list-disc text-ellipsis text-center md:text-justify'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>

                <DividerCoffee />

                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>فرم تماس با ما:</h2>
                <h5 dir='rtl' className='self-end text-brown-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>خوشحال می شویم نظرات خودتان را با ما در میان بگذارید.</h5>
                <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-x-16 items-center justify-center'>
                    <Image
                        src={'/images/coffee-cup-5.png'}
                        width={500}
                        height={500}
                        className='w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto hover:brightness-125 cursor-pointer transition-all duration-150'
                        alt='coffee cup'
                        priority
                        loading='eager'
                        quality={100}
                    />
                    <FormContact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact