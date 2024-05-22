import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const adminToken = request.cookies.has(process.env.ADMIN_TOKEN || '')
    const userToken = request.cookies.has(process.env.TOKEN || '')

    if (request.nextUrl.pathname.startsWith('/admin/auth')) {
        if (adminToken) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
        if (!adminToken) {
            return NextResponse.redirect(new URL('/admin/auth/login', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/auth')) {
        if (userToken) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/')) {
        if (userToken) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/category')) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/',
        '/category',
    ]
}