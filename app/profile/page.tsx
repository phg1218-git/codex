import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/api/auth/signin?callbackUrl=/profile");

  return (
    <main className="mx-auto max-w-3xl p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-slate-900">내정보수정</h1>
      <p className="mt-2 text-sm text-slate-600">프로필 수정 화면(placeholder)입니다.</p>
    </main>
  );
}
