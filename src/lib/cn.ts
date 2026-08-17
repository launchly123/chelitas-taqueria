/**
 * Joins classnames. It does NOT merge conflicting Tailwind utilities — two
 * competing colour classes resolve by stylesheet order, not argument order.
 * So base components here leave colour unset and require the caller to pass
 * it, rather than baking in a default a caller then tries to override.
 */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
