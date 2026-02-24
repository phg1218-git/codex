import Link from "next/link";
import { ArrowRight, Lock, MessageCircleHeart, Sparkles } from "lucide-react";

const features = [
  {
    title: "정교한 궁합 매칭",
    description: "구조화된 설문과 가중치 기반 점수로, 취향보다 가치관 중심의 연결을 제안합니다.",
    icon: Sparkles
  },
  {
    title: "익명성 우선 대화",
    description: "신뢰가 쌓일 때까지 개인정보를 보호하며, 편안한 속도로 관계를 시작할 수 있습니다.",
    icon: Lock
  },
  {
    title: "성숙한 연결 경험",
    description: "20–30대를 위한 간결하고 안정적인 UX로 진지한 만남에 집중할 수 있도록 설계했습니다.",
    icon: MessageCircleHeart
  }
] as const;

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#fce7f3_0%,#ffffff_40%,#ffffff_100%)]" />

      <section className="mx-auto w-full max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:pb-16">
        <div className="animate-fade-up rounded-3xl border border-rose-100/80 bg-white/80 p-7 shadow-[0_18px_45px_-28px_rgba(190,24,93,0.35)] backdrop-blur sm:p-10">
          <p className="mb-4 inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium tracking-wide text-rose-700">
            이어줌 · CONNECTING
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            가벼운 스와이프보다,
            <br className="hidden sm:block" />
            <span className="text-rose-700">깊이 있는 연결</span>에 집중하세요.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            이어줌은 익명성과 신뢰를 지키면서, 생활 방식과 가치관 데이터를 바탕으로 진지한 관계로 이어질 가능성이 높은
            사람을 제안합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/api/auth/signin"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              Start Connecting
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/(marketing)"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-12 sm:grid-cols-3 sm:px-8 lg:pb-16">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="animate-fade-up rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <Icon className="h-5 w-5 text-rose-600" aria-hidden="true" />
            <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-6 py-6 sm:px-8">
          <h3 className="text-base font-semibold text-slate-900">신뢰를 전제로 한 만남</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            프로필 노출은 최소화하고, 대화는 익명으로 시작합니다. 개인정보는 보호하면서도 상대를 이해할 수 있는 충분한
            맥락을 제공합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="rounded-3xl bg-gradient-to-r from-rose-100 via-white to-rose-50 p-8 ring-1 ring-rose-100 sm:p-10">
          <h4 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">진짜 인연, 더 차분하게 시작해보세요.</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">오늘 가입하고 나와 잘 맞는 사람을 데이터 기반으로 만나보세요.</p>
          <Link
            href="/api/auth/signin"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-rose-700 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          >
            지금 시작하기
          </Link>
        </div>
      </section>
    </main>
  );
}
