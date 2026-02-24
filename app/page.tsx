import Link from "next/link";
import { getServerSession } from "next-auth";
import { Heart, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { HomeHeader } from "@/components/layout/home-header";
import { authOptions } from "@/lib/auth";

const features = [
  {
    title: "익명성 중심 설계",
    description: "실명 노출 없이 대화를 시작하고, 신뢰가 쌓인 뒤 공개 범위를 스스로 선택합니다.",
    icon: Lock
  },
  {
    title: "데이터 기반 매칭",
    description: "설문 응답과 성향 데이터를 가중치로 분석해, 감정적 소모를 줄인 만남을 제안합니다.",
    icon: Sparkles
  },
  {
    title: "안전한 연결",
    description: "최소 정보 원칙과 검증된 인증 플로우로, 편견보다 본질에 집중한 연결을 만듭니다.",
    icon: ShieldCheck
  }
] as const;

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = Boolean(session?.user?.id);

  const primaryHref = isAuthenticated ? "/survey" : "/api/auth/signin";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff1f5_0%,#fffafc_28%,#ffffff_62%)]">
      <HomeHeader isAuthenticated={isAuthenticated} />

      <section className="mx-auto w-full max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:pb-16">
        <div className="rounded-3xl border border-rose-100/80 bg-white/90 p-7 shadow-[0_20px_45px_-32px_rgba(15,23,42,0.28)] backdrop-blur sm:p-10">
          <p className="mb-4 inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium tracking-wide text-rose-700">
            이어줌 · Premium Matchmaking
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            이어줌(Connecting)
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            가벼운 관심보다, 오래가는 관계를 찾는 사람들을 위해. 익명성과 신뢰를 지키며 나와 잘 맞는 사람을 차분하게
            연결합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              설문 시작하기
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-700"
            >
              서비스 소개
            </a>
            {isAuthenticated && (
              <Link
                href="/match"
                className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-medium text-rose-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-100"
              >
                매칭 보기
              </Link>
            )}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-12 sm:grid-cols-3 sm:px-8 lg:pb-16">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <Icon className="h-5 w-5 text-rose-600" aria-hidden="true" />
            <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-6 py-6 sm:px-8">
          <h3 className="text-base font-semibold text-slate-900">신뢰를 중심에 둔 개인정보 보호</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            이어줌은 최소한의 개인정보만 사용하고, 매칭과 대화 과정에서 익명성을 우선합니다. 당신의 속도에 맞춰 안전하게
            관계를 시작할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="rounded-3xl border border-rose-200/70 bg-gradient-to-r from-white via-rose-50 to-white p-8 shadow-[0_20px_40px_-30px_rgba(190,24,93,0.35)] sm:p-10">
          <div className="flex items-center gap-2 text-rose-700">
            <Heart className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-medium tracking-wide">MATURE, CALM, REAL</span>
          </div>
          <h4 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            진짜 잘 맞는 사람을, 더 세련된 방식으로 만나보세요.
          </h4>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            지금 시작하면 설문 기반 추천으로 의미 있는 대화를 빠르게 시작할 수 있습니다.
          </p>
          <Link
            href={primaryHref}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-rose-700 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-800"
          >
            {isAuthenticated ? "매칭 시작하기" : "가입하고 시작하기"}
          </Link>
        </div>
      </section>
    </main>
  );
}
