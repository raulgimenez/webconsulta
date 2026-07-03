import { NextResponse } from 'next/server'
import { defaultLocale, getLocaleFromPathname } from './src/lib/locale'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Verificar si ya hay un idioma en la ruta
  if (getLocaleFromPathname(pathname)) {
    // Si ya tiene idioma, continuar
    return NextResponse.next()
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Saltar todos los paths internos (_next, api, etc.)
    '/((?!$|_next|api|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
