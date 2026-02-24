import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PREFIXES = ["/survey", "/match", "/chat", "/profile"];

/**
 * Root cause fix:
 * - We should only enforce auth on protected pages.
 * - Home/marketing pages must remain public.
 * - For DB session strategy, checking next-auth session cookie presence is the most stable middleware guard.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  if (!isProtected) return NextResponse.next();

  const hasSessionCookie =
    req.cookies.has("next-auth.session-token") || req.cookies.has("__Secure-next-auth.session-token");

  if (!hasSessionCookie) {
    const signInUrl = new URL("/api/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/survey/:path*", "/match/:path*", "/chat/:path*", "/profile/:path*"]
};
