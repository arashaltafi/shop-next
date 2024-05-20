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

export const generateMetadata = async ({ params }: { params: { name: string } }) => {
    const name = decodeURIComponent(params.name)
    return {
        title: `${name}`,
        description: `صفحه ${name}`
    }
}