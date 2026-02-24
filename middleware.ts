import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) return NextResponse.next();

  const profileCompleted = (token as { profileCompleted?: boolean }).profileCompleted;
  if (!profileCompleted && !req.nextUrl.pathname.startsWith("/complete-profile")) {
    return NextResponse.redirect(new URL("/complete-profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"]
};
