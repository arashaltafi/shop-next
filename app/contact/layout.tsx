import { Metadata } from 'next';
import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
}

export const metadata: Metadata = {
    title: "ارتباط با ما",
    description: "صفحه ارتباط با ما"
}