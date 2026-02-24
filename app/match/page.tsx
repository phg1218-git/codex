import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function MatchPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/api/auth/signin?callbackUrl=/match");

  return (
    <main className="mx-auto max-w-3xl p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-slate-900">매칭</h1>
      <p className="mt-2 text-sm text-slate-600">인증된 사용자만 접근 가능한 매칭 화면입니다.</p>
      <Link href="/survey" className="mt-6 inline-flex rounded-full bg-rose-700 px-4 py-2 text-sm text-white">
        설문으로 이동
      </Link>
    </main>
  );
}
