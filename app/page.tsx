import Link from "next/link";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-xl p-6">
      <Card className="space-y-4 p-6 text-center">
        <Heart className="mx-auto h-10 w-10 text-roseBrand-500" />
        <h1 className="text-2xl font-bold">이어줌 (Connecting)</h1>
        <p className="text-sm text-slate-600">익명 기반 궁합 중심 매칭 플랫폼</p>
        <div className="flex justify-center gap-3">
          <Link className="rounded-full bg-roseBrand-500 px-4 py-2 text-white" href="/api/auth/signin">
            로그인 시작
          </Link>
          <Link className="rounded-full border border-roseBrand-500 px-4 py-2 text-roseBrand-700" href="/complete-profile">
            프로필 작성
          </Link>
        </div>
      </Card>
    </main>
  );
}
