import { cn } from "@/lib/cn";

/**
 * Small mono label. Colour is intentionally NOT set here — the caller passes
 * it, because a baked-in colour would beat the caller's on equal specificity.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}
