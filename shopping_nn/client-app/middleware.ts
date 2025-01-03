import { NextRequest } from 'next/server';
import authenticated from './app/auth/authenticated';
import { unauthenticatedRoutes } from './app/common/constants/routes';

// const unauthorizedRoutes = ['/auth/login', '/auth/signup'];

export function middleware(request: NextRequest) {
  const auth = authenticated();

  if (
    !auth &&
    !unauthenticatedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route.path)
    )
  ) {
    return Response.redirect(new URL('/auth/login', request.url));
  } else if (
    auth &&
    unauthenticatedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route.path)
    )
  ) {
    return Response.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
