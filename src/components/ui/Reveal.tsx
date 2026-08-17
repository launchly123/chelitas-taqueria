import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Marks a subtree for scroll-reveal. Renders normally in the SSR HTML — the
 * concealed state is applied by CSS only when the gate script has decided the
 * animation can finish. See globals.css.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure" | "header";
}) {
  return (
    <Tag
      data-reveal=""
      data-reveal-delay={delay || undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
