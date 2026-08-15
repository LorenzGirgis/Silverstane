import { type ReactNode } from "react";
import { Reveal } from "../ui/Reveal";

type PageHeaderProps = {
  overline?: string;
  title: string;
  children?: ReactNode;
  dark?: boolean;
};

export function PageHeader({ overline, title, children, dark = true }: PageHeaderProps) {
  return (
    <section className={`section-pad ${dark ? "bg-dark border-b border-white/5" : "bg-white text-black"}`}>
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          {overline && (
            <p className={`mb-3 font-display text-[10px] uppercase tracking-[0.3em] ${dark ? "text-accent" : "text-accent-dim"}`}>
              {overline}
            </p>
          )}
          <h1 className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-wide md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {children && <div className={`mt-6 max-w-xl text-base leading-relaxed ${dark ? "text-muted" : "text-accent-dim"}`}>{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
