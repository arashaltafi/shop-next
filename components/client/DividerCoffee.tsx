import Image from 'next/image'
import React from 'react'

const DividerCoffee = () => {
    return (
        <Image
            src={'/images/divider-coffee.png'}
            width={500}
            height={500}
            className='w-full lg:w-2/3 h-16 sm:h-20 my-8 sm:my-16 md:my-20 lg:my-24 brightness-200'
            alt='coffee divider'
            priority
            loading='eager'
            quality={100}
        />
    )
}

export default DividerCoffee