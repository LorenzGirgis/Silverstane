import { Link } from "react-router-dom";
import { type ReactNode } from "react";

const base =
  "inline-flex items-center justify-center font-display text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200";

const variants = {
  brass: `${base} bg-accent px-6 py-3.5 text-black hover:bg-accent-dim`,
  outline: `${base} border border-white/25 px-6 py-3.5 text-white hover:border-white/50 hover:bg-white/5`,
  ghost: `${base} px-4 py-2 text-muted hover:text-white`,
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
