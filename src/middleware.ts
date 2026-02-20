import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || ''
  const url = req.nextUrl.clone()

  // الدومين الرئيسي
  const mainDomain = 'qrmenu.it.com'

  // استخراج الـ subdomain
  const subdomain = hostname.replace(`.${mainDomain}`, '').replace('www.', '')

  // إذا كان الطلب على الدومين الرئيسي أو www - اتركه كما هو
  if (
    hostname === mainDomain ||
    hostname === `www.${mainDomain}` ||
    hostname === 'localhost:3000' ||
    subdomain === hostname // يعني ما في subdomain
  ) {
    return NextResponse.next()
  }

  // إذا كان فيه subdomain - حول لصفحة المنيو
  if (subdomain && subdomain !== mainDomain) {
    url.pathname = `/menu/${subdomain}${url.pathname === '/' ? '' : url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // تجاهل الملفات الثابتة والـ API
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
}
