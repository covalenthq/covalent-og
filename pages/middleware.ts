import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
  return response
}