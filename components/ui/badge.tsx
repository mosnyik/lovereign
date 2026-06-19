import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-lavender-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700",
        className
      )}
      {...props}
    />
  );
}
