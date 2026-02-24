import Link from "next/link";
import { SignOutButton } from "@/components/layout/sign-out-button";

type HomeHeaderProps = {
  isAuthenticated: boolean;
};

export function HomeHeader({ isAuthenticated }: HomeHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-rose-100/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight text-slate-900">
          이어줌<span className="ml-1 text-sm font-normal text-slate-500">Connecting</span>
        </Link>

        <nav className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Link
                href="/profile"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-rose-200 hover:text-rose-700"
              >
                내정보수정
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                href="/api/auth/signin"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-rose-200 hover:text-rose-700"
              >
                로그인
              </Link>
              <Link
                href="/api/auth/signin"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                회원가입
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
