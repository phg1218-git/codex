import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function SurveyPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/api/auth/signin?callbackUrl=/survey");

  return (
    <main className="mx-auto max-w-3xl p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-slate-900">설문조사</h1>
      <p className="mt-2 text-sm text-slate-600">로그인 상태가 유지되며 설문 페이지에 접근됩니다.</p>
      <Link href="/match" className="mt-6 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm text-white">
        매칭 보기
      </Link>
    </main>
  );
}
