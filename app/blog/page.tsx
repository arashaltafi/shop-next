import React from 'react'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import Image from 'next/image'
import DividerCoffee from '@/components/client/DividerCoffee'
const coffeeBeans6 = '/images/coffee-beans-6.png'
const coffeeBeans7 = '/images/coffee-beans-7.png'
const coffeeBeans8 = '/images/coffee-beans-8.png'
const coffeeBeans9 = '/images/coffee-cup-5.png'

const Blog = () => {
    return (
        <div className='w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>قهوه چیست؟</h2>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8'>
                    <Image
                        src={coffeeBeans6}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-125 cursor-pointer transition-all duration-150'
                        alt='coffee beans'
                        priority
                        loading='eager'
                        quality={100}
                    />
                    <div className='flex flex-col items-end justify-center w-full gap-6'>
                        <p dir='rtl' className='w-full text-brown-100 text-sm md:text-base font-light leading-6 sm:leading-8 md:leading-9 list-disc text-ellipsis text-center md:text-justify'>
                            قهوه یک نوشیدنی محبوب و معروف است که از دانه‌های خشک شده و آسیاب شده از گیاه قهوه تهیه می‌شود. دانه‌های قهوه از میوه‌های گیاه قهوه خشک می‌شوند و پس از خشک شدن، آسیاب می‌شوند تا به صورت ذراتی ریزتر تبدیل شوند.
                        </p>
                        <p dir='rtl' className='w-full text-brown-100 text-sm md:text-base font-light leading-6 sm:leading-8 md:leading-9  list-disc text-ellipsis text-center md:text-justify'>
                            قهوه دارای مواد تشکیل‌ دهنده‌ای مانند کافئین، اسیدها، روغن‌ها، و مواد معدنی است که به این نوشیدنی ویژگی‌ها و طعم‌های خاصی می‌بخشند. قهوه در انواع مختلف مانند اسپرسو، کاپوچینو، لاته و… به سرو می‌رسد و از طعم‌ها و شکلات‌های مختلفی برای تنوع و لذت بیشتر در مصرف آن استفاده می‌شود.
                        </p>
                        <p dir='rtl' className='w-full text-brown-100 text-sm md:text-base font-light leading-6 sm:leading-8 md:leading-9  list-disc text-ellipsis text-center md:text-justify'>
                            این نوشیدنی بی‌نظیر، نه تنها انرژی می‌دهد بلکه از طریق طعم و رایحه‌ای خاص، تجربه لذت‌بخشی ایجاد می‌کند. تنوع در تهیه و سرو قهوه امکان انتخاب بهترین طعم متناسب با سلیقه هر شخص را فراهم می‌کند و این از جذابیت‌های بی‌پایان قهوه است.
                        </p>
                        <p dir='rtl' className='w-full text-brown-100 text-sm md:text-base font-light leading-6 sm:leading-8 md:leading-9 list-disc text-ellipsis text-center md:text-justify'>
                            طعم قهوه می‌تواند از تلخ تا شیرین و ملایم متفاوت باشد و میل به مصرف قهوه به دلایل مختلفی از جمله برای لذت بردن از طعم آن، برای انرژی ‌زایی یا برای ایجاد احساس بیداری و تقویت کنترل تمرکز به صورت روزانه انجام می‌شود.
                        </p>
                    </div>
                </div>

                <DividerCoffee />

                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>انواع قهوه:</h2>
                <p dir='rtl' className='w-full text-brown-100 text-sm md:text-base font-light leading-6 sm:leading-8 list-disc text-ellipsis text-center md:text-justify'>
                    قهوه ها  دارای انواع متفاوت از نظر دم کردن و نوع دانه و نوع فراوری و..می باشند که در این مطلب ما به شما آموزش هایی برای خرید قهوه و شناخت انواع قهوه از نظر روش دم کردن خواهیم پرداخت:
                </p>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8'>
                    <Image
                        src={coffeeBeans9}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-125 cursor-pointer transition-all duration-150'
                        alt='coffee beans'
                        priority
                        loading='eager'
                        quality={100}
                    />

                    <ul dir='rtl' className='w-full px-6 sm:px-8 flex flex-col items-start justify-center gap-4 text-brown-100 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 child:list-decimal line-clamp-2 text-ellipsis text-justify'>
                        <li>
                            قهوه ترک
                        </li>
                        <li>
                            قهوه فرانسه
                        </li>
                        <li>
                            قهوه اسپرسو
                        </li>
                        <li>
                            قهوه های دمی
                        </li>
                        <li>
                            قهوه های فوری
                        </li>
                        <li>
                            اسپرسو دوپیو
                        </li>
                        <li>
                            اسپرسو لانگو
                        </li>
                        <li>
                            اسپرسو ریستریتو
                        </li>
                        <li>
                            اسپرسو ماکیاتو
                        </li>
                        <li>
                            اسپرسو کوبانو
                        </li>
                        <li>
                            لاته ماکیاتو
                        </li>
                        <li>
                            کافه لاته
                        </li>
                        <li>
                            کاپوچینو
                        </li>
                        <li>
                            اسپرسو کن پانا
                        </li>
                        <li>
                            کافه موکا
                        </li>
                        <li>
                            آمریکانو
                        </li>
                    </ul>
                </div>

                <DividerCoffee />

                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>خوردن قهوه برای چی خوبه؟</h2>
                <p dir='rtl' className='w-full text-brown-100 text-sm md:text-base font-light leading-6 sm:leading-8 list-disc text-ellipsis text-center md:text-justify'>
                    قهوه برای چه کسانی خوب است؟ مزایای قهوه برای بسیاری از افراد در سنین مختلف به اثبات رسیده است. علیرغم آنکه نوشیدن یک فنجان قهوه می تواند بسیار لذت بخش باشد، به دلیل خواص متعددی که برای سلامتی دارد، انگیزه افراد برای استفاده از این نوشیدنی محبوب را افزایش می دهد. بنابراین می توانید با فراق بال دو تا سه فنجان قهوه در روز مصرف کنید و از مزایای متعدد آن بهره مند شوید:
                </p>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8'>
                    <Image
                        src={coffeeBeans7}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-125 cursor-pointer transition-all duration-150'
                        alt='coffee beans'
                        priority
                        loading='eager'
                        quality={100}
                    />

                    <ul dir='rtl' className='w-full px-6 sm:px-8 flex flex-col items-start justify-center gap-4 text-brown-100 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 child:list-disc line-clamp-2 text-ellipsis text-justify'>
                        <li>
                            افزایش سطح انرژی و کاهش خواب آلودگی
                        </li>
                        <li>
                            کمک به افزایش فعالیت های فیزیکی و جلوگیری از بی حالی و کرختی در طول روز
                        </li>
                        <li>
                            کاهش توده چربی بدن و کمک به افزایش سوخت و ساز و در نتیجه لاغری
                        </li>
                        <li>
                            کاهش ریسک ابتلا به بیماری های کبدی نظیر کبد چرب و ...
                        </li>
                        <li>
                            کمک به کنترل بیماران دیابتی به ویژه دیابت نوع ۲
                        </li>
                        <li>
                            کاهش ریسک ابتلا به زوال عقل و آلزایمر
                        </li>
                        <li>
                            کاهش ریسک ابتلا به بیماری پارکینسون
                        </li>
                        <li>
                            افزایش سلامت و جنبندگی اسپرم ها و در نتیجه افزایش قدرت باروری در مردان
                        </li>
                        <li>
                            بهبود سلامت پوست به دلیل خواص ضد التهابی و ضد پیری
                        </li>
                        <li>
                            بهبود سلامت قلب با کاهش فشارخون
                        </li>
                        <li>
                            افزایش تنوع میکروبیوم های معده و روده و کمک به فرآیند هضم غذاها و بهبود سلامت گوارشی افراد
                        </li>
                        <li>
                            کاهش ریسک ابتلا به سنگ کیسه صفرا با پیشگیری از عوامل ابتلا به این بیماری (اگر مبتلا به سنگ کیسه صفرا هستید، از نوشیدن قهوه اجتناب کنید)
                        </li>
                        <li>
                            حاوی آنتی اکسیدان های زیاد و کمک به درمان سلول های آسیب دیده
                        </li>
                        <li>
                            پیشگیری از رشد سلول های سرطانی و کاهش التهاب ها در بدن که عامل انواع بیماری های خود ایمنی و ... هستند
                        </li>
                        <li>
                            کمک به پیشگیری و درمان افسردگی
                        </li>
                    </ul>
                </div>

                <DividerCoffee />

                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>مضرات قهوه برای سلامتی چیست؟</h2>
                <p dir='rtl' className='w-full text-brown-100 text-sm md:text-base font-light leading-6 sm:leading-8 list-disc text-ellipsis text-center md:text-justify'>
                    قهوه برای چه کسانی مضر است؟ بر خلاف فواید و خواص متعددی که مصرف قهوه دارد، مصرف این نوشیدنی دارای محدودیت هایی است و برای همه افراد مناسب نیست. برخی از مهمترین عوارض مصرف قهوه و اثرات قهوه بر بیماری های مختلف عبارتند از:
                </p>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8'>
                    <Image
                        src={coffeeBeans8}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-125 cursor-pointer transition-all duration-150'
                        alt='coffee beans'
                        priority
                        loading='eager'
                        quality={100}
                    />

                    <ul dir='rtl' className='w-full px-6 sm:px-8 flex flex-col items-start justify-center gap-4 text-brown-100 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 child:list-disc line-clamp-2 text-ellipsis text-justify'>
                        <li>
                            بی خوابی
                        </li>
                        <li>
                            استرس و اضطراب به دلیل کافئین بالا
                        </li>
                        <li>
                            ضرر قهوه برای افراد مستعد تپش قلب
                        </li>
                        <li>
                            سردرد و سرگیجه
                        </li>
                        <li>
                            افزایش خستگی در صورت مصرف مداوم و مکرر
                        </li>
                        <li>
                            افزاش فشار خون ( در صورت مصرف زیاد از حد)
                        </li>
                        <li>
                            سوزش معده
                        </li>
                        <li>
                            لرزش عضلات (یکی از نادر ترین ضررهای قهوه)
                        </li>
                        <li>
                            کم آبی بدن و تکرر ادرار
                        </li>
                        <li>
                            افزایش ریسک ابتلا به پوکی استخوان در صورت تغذیه نادرست و به ویژه برای خانم های یائسه
                        </li>
                        <li>
                            افزایش سطح کلسترول خون در مواردی که قهوه فیلتر نشده یا تصفیه نشده یا دم نشده مصرف کنید
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog