import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이어줌 (Connecting)",
  description: "Anonymous compatibility-first matchmaking platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
