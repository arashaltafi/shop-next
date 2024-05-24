import { notFound } from 'next/navigation';
import React from 'react'

export default function RootLayout({
    children, params
}: Readonly<{
    children: React.ReactNode,
    params: { id: string }
}>) {
    params.id.length != 2 && notFound()

    return (
        <>
            {children}
        </>
    )
}

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
    const name = decodeURIComponent(params.id[1])
    return {
        title: `${name}`,
        description: `صفحه جزئیات محصول ${name}`
    }
}