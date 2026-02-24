import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl bg-white/90 shadow-sm ring-1 ring-rose-100", className)} {...props} />;
}
