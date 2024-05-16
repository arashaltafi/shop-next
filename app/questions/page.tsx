"use client"

import React, { useEffect, useState } from 'react'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions = () => {
    const [question, setQuestion] = useState<{
        id: number,
        title: string,
        description: string,
    }[]>([])

    useEffect(() => {
        setQuestion([
            {
                id: 1,
                title: 'آیا قهوه آنلاین دارای مجوز اینترنتی می باشد؟',
                description: 'وبسایت قهوه آنلاین دارای تمامی مجوز های لازم از وزارت صنایع و معادن، انجمن کسب و کار های اینترنتی، ستاد ساماندهی کسب و کار های اینترنتی، و اتحادیه کشوری کسب و کار های اینترنتی می باشد و شما می توانید با خیال آسوده از سایت قهوه آنلاین، کالا و یا کالاهای مورد نظر خود را تهیه نمایید.'
            }, {
                id: 2,
                title: 'روش های ارسال و هزینه ارسال در فروشگاه به چه صورت می باشد؟',
                description: 'تمام سفارشات فروشگاه قهوه آنلاین از طریق شرکت پست به آنلاین و بسته به انتخاب شما مشتری گرامی ارسال می شود. تاکید این نکته که تمامی سفارشات بالای 500 هزار تومان در روش پرداخت آنلاین، به صورت رایگان و از طریق پست سفارشی ارسال می گردد.'
            }, {
                id: 3,
                title: 'آیا می توانم سفارش خود را بصورت تلفنی ثبت نمایم؟',
                description: 'اولویت فروشگاه اینترنتی قهوه آنلاین، ثبت سفارشات بصورت اینترنتی می باشد و دلیل این امر، ثبت کامل اطلاعات، تطبیق سفارش و تسهیل روند ارسال می باشد اما در صورتی که با سفارش اینترنتی مشکل دارید، می توانید با تماس یا ارسال پیام در واتساپ به شماره 09187677641 مشکل خود را به همکاران ما اعلام نمایید تا بتوانند شمارا برای ثبت سفارش راهنمایی کنند.'
            }, {
                id: 4,
                title: 'روش های پرداخت به چه شکل می باشد؟',
                description: `
                پرداخت آنلاین: در حال حاضر توسط درگاه های بانک سامان می باشد که با استفاده از تمامی کارت های بانکی عضو شبکه شتاب می توانید پرداخت خود را انجام دهید.
                نکته: لازم به ذکر می باشد، برای عزیزانی که به هر دلیلی قادر به انجام پرداخت آنلاین از طریق پرداخت به صورت واریز به حساب یا کارت به کارت نمی باشند، می توانند از طریق هماهنگ نمودن با همکاران ما در قسمت فروش و پشتیبانی، اقدام به ثبت سفارش خود کنند.
                `
            }, {
                id: 5,
                title: 'بسته پستی من به صورت آسیب دیده تحویل داده شده است؟!',
                description: `
                با توجه افزایش مرسولات پستی در سا ل های اخیر، در برخی موارد با توجه به اینکه سفارشات شهرستان به صورت پستی ارسال می شود، احتمال دارد محصول خریداری شده شما در فرایند حمل و نقل دچار آسیب شود، و با توجه به اینکه تمام مرسولات پستی در زمان ارسال بیمه می شوند، خواهش می کنیم در زمان تحویل مرسوله، از دریافت جعبه های آسیب دیده توسط پست خودداری نمایید و سریعا مساله را با شماره های فروشگاه در میان بگذارید.
                همچنین در صورتی که بسته در ظاهر دارای سلامت بود و محتویات بسته دچار آسیب دیدگی بودند، می توانید با شماره های فروشگاه تماس بگیرید تا مشکل شما بررسی و پیگیری شود.
                `
            }, {
                id: 6,
                title: 'سفارش من به اشتباه ارسال شده و یا اقلام سفارش کم است؟',
                description: 'به ندرت پیش می آید به دلیل حجم بالای سفارشات با همچین مشکلاتی روبه رو شویم، دراین موارد می توانید در تمام ساعات شبانه روز مشکلات خود را با پیشتیبانی سایت به شماره 09187677641 در واتساپ در میان بگذارید و مطمئنا مشکل شما حل خواهد شد.'
            }, {
                id: 7,
                title: 'من پس از پرداخت از طریق درگاه و انتقال به سایت با خطای " پرداخت ناموفق بوده" مواجه می شوم؟',
                description: 'گاهی در صورت مشکلات اینترنت، اتصال درگاه‌های پرداخت به وبسایت و مشکلات فنی سرور درگاه‌های بانکی، احتمال اینکه پرداخت شما ناموفق باشد وجود دارد، در صورتی که با این خطا روبرو شدید به هیچ وجه نگران نباشید، در صورت کسر مبلغ از حساب شما، وجه به صورت اتوماتیک بعد از ۷۲ ساعت، به صورت خودکار به حساب شما بازخواهد گشت. در صورت هرگونه مشکلی می‌توانید با شماره‌های پشتیبانی سایت قهوه آنلاین تماس حاصل نمایید.'
            }, {
                id: 8,
                title: 'من به چه شکل می توانم سفارش خود را پیگیری کنم؟',
                description: 'پس از ارسال سفارشات، حداکثر بعد از دو روز کاری، کد رهگیری سفارش شما در پنل کاربری­تان در سایت قرار می گیرد و همچنین این اطلاع رسانی از طریق پیامک نیز انجام می شود که شما عزیزان می توانید با مراجعه به پنل کاربری­تان به کد رهگیری خود دسترسی داشته باشید و خیلی راحت بسته خود رو از طریق سامانه پست که لینکش در داخل پنل کاربری تان هست پیگیری نمایید.'
            }, {
                id: 9,
                title: 'محصولی که می خواهم، بر روی سایت ناموجود می باشد!',
                description: 'در صورتی که محصول مورد نظرشما بر روی سایت قهوه آنلاین ناموجود می باشد، می توانید با تیک زدن گزینه * به من اطلاع بده* در صفحه محصول، از طریق پیامک، از موجود شدن محصول با خبر شوید و یا تماس با پشتیبانی فروشگاه (از طریق ایمیل و یا تلفن)، از زمان موجود شدن محصول مورد نظرتان باخبر شوید.'
            }, {
                id: 10,
                title: 'آیا موجودی انبار و تاریخ محصولات قهوه آنلاین بر روی سایت به روز یا واقعی می باشند؟',
                description: 'موجودی و تاریخ تمامی محصولات، روزانه بر روی سایت فروشگاه اینترنتی قهوه آنلاین به ­روز می شوند.'
            }
        ])
    }, [])

    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div className='select-none w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>سوالات متداول:</h2>
                <h4 dir='rtl' className='self-end text-brown-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>آیا مشکلی دارید و یا سوالی برایتان پیش آمده؟</h4>
                <h4 dir='rtl' className='self-end text-brown-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>پاسخ سوالات خود را در اینجا مشاهده نمایید.</h4>

                <div dir='rtl' className='w-full child:w-full flex flex-col gap-0.5 items-center justify-center'>
                    {
                        question?.map((item) => (
                            <Accordion
                                key={item.id}
                                sx={{
                                    backgroundColor: '#846358',
                                    color: 'white',
                                    '.MuiSvgIcon-root': {
                                        color: 'white'
                                    }
                                }}
                                expanded={expanded === 'panel' + item.id}
                                onChange={handleChange('panel' + item.id)}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${item.id}bh-content`}
                                    id={`panel${item.id}bh-header`}
                                >
                                    <p className='py-2 sm:py-3 lg:py-4 pe-8 text-justify text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>{item.title}</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className='py-2 sm:py-3 lg:py-4 pe-8 text-justify text-brown-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{item.description}</p>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Questions