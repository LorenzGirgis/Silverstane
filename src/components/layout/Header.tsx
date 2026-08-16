import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ASSETS, CONTACT, NAV, SOCIAL } from "../../data/content";
import { Button } from "../ui/Button";

function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="touch-target flex flex-col items-center justify-center gap-1.5 lg:hidden"
      aria-label={open ? "Menu sluiten" : "Menu openen"}
      aria-expanded={open}
    >
      <motion.span
        className="block h-px w-5 bg-white"
        animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
      />
      <motion.span
        className="block h-px w-5 bg-white"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.span
        className="block h-px w-5 bg-white"
        animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
      />
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/95 backdrop-blur-sm supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
        <div className="hidden border-b border-white/5 md:block">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[11px] text-muted">
            <div className="flex gap-4">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="uppercase tracking-wider hover:text-white">
                  {s.label}
                </a>
              ))}
            </div>
            <div className="flex gap-6">
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-5 md:px-6">
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <img src={ASSETS.logo} alt="Silversant" className="h-8 sm:h-9 md:h-10" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdmenu">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 font-display text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="touch-target inline-flex items-center justify-center font-display text-[10px] uppercase tracking-wider text-muted hover:text-white lg:hidden"
              aria-label={`Bel ${CONTACT.phone}`}
            >
              Bel
            </a>
            <Button to="/contact" variant="brass" className="hidden !py-2.5 !text-[10px] sm:inline-flex">
              Reserveren
            </Button>
            <MenuToggle open={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-1 flex-col justify-center overflow-y-auto px-6 pb-8 pt-[calc(var(--header-height)+1rem)]">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-4 font-display text-2xl font-medium uppercase tracking-wider text-white sm:py-5 sm:text-3xl"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 space-y-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full min-h-11 items-center justify-center bg-accent px-6 py-3.5 font-display text-xs font-medium uppercase tracking-[0.18em] text-black hover:bg-accent-dim"
                >
                  Reserveren
                </Link>
                <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted">
                  <a href={`tel:${CONTACT.phoneRaw}`} className="min-h-11 py-2 hover:text-white">
                    {CONTACT.phone}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="min-h-11 py-2 hover:text-white">
                    {CONTACT.email}
                  </a>
                  <div className="flex gap-4 pt-1">
                    {SOCIAL.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-11 py-2 uppercase tracking-wider hover:text-accent"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
