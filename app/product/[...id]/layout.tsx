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

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
    const name = decodeURIComponent(params.id[1])
    return {
        title: `${name}`,
        description: `صفحه محصول ${name}`
    }
}