import React from 'react'
import NextTopLoader from 'nextjs-toploader';

const CustomProgress = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NextTopLoader
                color="#bfa094"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={200}
                shadow="0 0 10px #bfa094,0 0 5px #bfa094"
            />
            {children}
        </>
    )
}

export default CustomProgress