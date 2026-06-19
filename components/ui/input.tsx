import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-xl border border-brand-200 bg-white px-4 text-[16px] text-ink placeholder:text-ink-muted/60 transition-colors focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-1 disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
