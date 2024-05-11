import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Coffe Shop',
        short_name: 'Coffe Shop',
        description: 'Coffe Shop Online',
        start_url: '/',
        display: 'standalone',
        background_color: '#f8f8f8',
        theme_color: '#f8f8f8',
        icons: [
            {
                src: '/images/logo.png',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}