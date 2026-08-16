import { Link } from "react-router-dom";
import { type ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center font-body text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 rounded-sm";

const variants = {
  brass: `${base} bg-accent px-6 py-3.5 text-[#f5f0e8] hover:bg-accent-dim`,
  outline: `${base} border border-white/40 px-6 py-3.5 text-white hover:border-accent hover:text-accent`,
  ghost: `${base} px-4 py-2 text-muted hover:text-ink`,
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  to?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
};

export function Button({ variant = "brass", href, to, external, children, className = "" }: ButtonProps) {
  const cls = `${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return <button type="button" className={cls}>{children}</button>;
}
