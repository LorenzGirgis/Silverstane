import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ASSETS, CONTACT, NAV } from "../../data/content";

function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="touch-target flex flex-col items-center justify-center gap-[5px] lg:hidden"
      aria-label={open ? "Menu sluiten" : "Menu openen"}
      aria-expanded={open}
    >
      <motion.span
        className="block h-px w-6 bg-ink"
        animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
      />
      <motion.span
        className="block h-px w-6 bg-ink"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.span
        className="block h-px w-6 bg-ink"
        animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
      />
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const half = Math.ceil(NAV.length / 2);
  const navLeft = NAV.slice(0, half);
  const navRight = NAV.slice(half);

  return (
    <>
      {/* ── Desktop: gesplitste nav met centraal logo ── */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/20 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">

        {/* Mobile balk */}
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={ASSETS.logo} alt="Café Thijs" className="h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="font-body text-[10px] uppercase tracking-wider text-muted hover:text-ink"
            >
              Bel
            </a>
            <MenuToggle open={open} onClick={() => setOpen(v => !v)} />
          </div>
        </div>

        {/* Desktop: nav-links links · logo midden · nav-links rechts */}
        <div className="hidden lg:flex items-center justify-center gap-0 px-6 py-5">
          {/* Links */}
          <nav className="flex items-center gap-1 flex-1 justify-end pr-10">
            {navLeft.map(item => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2 font-body text-xs uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Centraal logo */}
          <Link to="/" className="shrink-0">
            <img
              src={ASSETS.logo}
              alt="Café Thijs"
              className="h-20 w-auto transition-transform hover:scale-105"
            />
          </Link>

          {/* Rechts */}
          <nav className="flex items-center gap-1 flex-1 justify-start pl-10">
            {navRight.map(item => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2 font-body text-xs uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="ml-4 rounded-sm border border-accent/40 px-4 py-2 font-body text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              {CONTACT.phone}
            </a>
          </nav>
        </div>
      </header>

      {/* ── Mobiel menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-black lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/20 px-4 py-3">
              <Link to="/" onClick={() => setOpen(false)}>
              <img src={ASSETS.logo} alt="Café Thijs" className="h-12 w-auto" />
            </Link>
            <MenuToggle open={open} onClick={() => setOpen(v => !v)} />
            </div>

            <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-5 font-display text-2xl italic text-white hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 space-y-3"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 w-full items-center justify-center rounded-sm bg-accent font-body text-xs uppercase tracking-[0.18em] text-[#f5f0e8] hover:bg-accent-dim"
                >
                  Borrel organiseren
                </Link>
                <div className="pt-4 space-y-2 border-t border-white/10 text-sm text-muted">
                  <a href={`tel:${CONTACT.phoneRaw}`} className="block min-h-11 py-2 hover:text-ink">
                    {CONTACT.phone}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="block min-h-11 py-2 hover:text-ink">
                    {CONTACT.email}
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
