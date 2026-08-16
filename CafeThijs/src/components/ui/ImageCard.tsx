import { motion } from "motion/react";
import { Link } from "react-router-dom";

type ImageCardProps = {
  image: string;
  label: string;
  subtitle?: string;
  href?: string;
  to?: string;
  external?: boolean;
  action?: string;
};

export function ImageCard({ image, label, subtitle, href, to, external, action = "Bekijk" }: ImageCardProps) {
  const inner = (
    <motion.article
      className="group relative overflow-hidden rounded-sm bg-mid shadow-sm"
      whileHover="hover"
      initial="rest"
    >
      {/* Foto */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={label}
          className="h-full w-full object-cover"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.06 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Label + actie-balk — altijd zichtbaar onder de foto */}
      <div className="flex flex-col gap-3 bg-dark px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
        <div className="min-w-0">
          <p className="font-body text-sm font-semibold text-white">
            {label}
          </p>
          {subtitle && (
            <p className="mt-0.5 text-xs text-muted">{subtitle}</p>
          )}
        </div>
        <span className="inline-flex min-h-11 shrink-0 items-center justify-center self-start bg-accent px-4 py-2.5 font-display text-[10px] font-medium uppercase tracking-[0.15em] text-[#f5f0e8] transition-colors group-hover:bg-accent-dim sm:self-auto">
          {action}
        </span>
      </div>
    </motion.article>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) {
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }

  return inner;
}
