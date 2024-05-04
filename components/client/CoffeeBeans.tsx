import Image from 'next/image'
import React from 'react'
const bean1 = '/images/coffee-beans-1.png';
const bean2 = '/images/coffee-beans-2.png';
const bean3 = '/images/coffee-beans-3.png';
const bean4 = '/images/coffee-beans-4.png';
const bean5 = '/images/coffee-beans-5.png';

const CoffeeBeans = () => {
    return (
        <>
            <Image
                className='size-8 absolute left-0 top-[60%]'
                width={10}
                height={10}
                src={bean1}
                alt="coffee-bean-1"
                quality={10}
                loading='lazy'
            />
            <Image
                className='size-8 absolute left-0 top-[70%]'
                width={10}
                height={10}
                src={bean2}
                alt="coffee-bean-2"
                quality={10}
                loading='lazy'
            />
            <Image
                className='size-8 absolute left-0 top-[80%]'
                width={10}
                height={10}
                src={bean3}
                alt="coffee-bean-3"
                quality={10}
                loading='lazy'
            />
            <Image
                className='size-8 absolute left-0 top-[90%]'
                width={10}
                height={10}
                src={bean4}
                alt="coffee-bean-4"
                quality={10}
                loading='lazy'
            />
            <Image
                className='size-8 absolute left-0 top-[100%]'
                width={10}
                height={10}
                src={bean5}
                alt="coffee-bean-5"
                quality={10}
                loading='lazy'
            />
        </>
    )
}

export default CoffeeBeans