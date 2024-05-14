import Image from 'next/image'
import React from 'react'

const DividerCoffee = () => {
    return (
        <Image
            src={'/images/divider-coffee.png'}
            width={500}
            height={500}
            className='w-full md:w-2/3 h-16 sm:h-20 my-16 sm:my-24 md:my-32 brightness-200'
            alt='coffee divider'
            priority
            loading='eager'
            quality={100}
        />
    )
}

export default DividerCoffee