import { cn } from "@/lib/cn";

/**
 * Wordmark. Two voices stacked: the family name set warm and italic in the
 * display serif, the category set cold and letterspaced in mono. That tension
 * — personal name over technical label — is the whole brand in two lines.
 *
 * Colour is inherited so the same mark works on masa and on espresso.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="font-[family-name:var(--font-display)] text-[1.375rem] font-semibold italic tracking-[-0.02em]">
        Chelita&rsquo;s
      </span>
      <span className="font-[family-name:var(--font-mono)] text-[0.5625rem] font-medium uppercase tracking-[0.42em] opacity-70">
        Taqueria
      </span>
    </span>
  );
}
