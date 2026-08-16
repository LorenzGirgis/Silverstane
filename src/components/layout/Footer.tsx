import { Link } from "react-router-dom";
import { CONTACT, NAV, SOCIAL } from "../../data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-dark">
      <div className="mx-auto max-w-[1400px] section-pad">

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 md:grid-cols-[1fr_auto_auto]">

          {/* Kolom 1: Silversant + uren + Kees compact */}
          <div>
            <p className="font-display text-2xl font-medium uppercase tracking-wider text-white sm:text-3xl">
              Silversant
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Eetcafé in Amstelveen — borrel, lunch en diner op een zonnig terras.
            </p>

            {/* Openingstijden */}
            <div className="mt-5 space-y-1.5">
              <div className="flex items-baseline gap-3">
                <span className="w-14 font-display text-[10px] uppercase tracking-[0.2em] text-accent">Zo–Do</span>
                <span className="text-sm text-white">10:00 – 00:00</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="w-14 font-display text-[10px] uppercase tracking-[0.2em] text-accent">Vr &amp; Za</span>
                <span className="text-sm text-white">10:00 – 01:00</span>
              </div>
            </div>

            {/* Kees — alleen naam en datum */}
            <div className="mt-6 border-t border-white/8 pt-5">
              <p className="font-display text-sm font-medium uppercase tracking-wide text-white/60">
                Kees Selderijk
              </p>
              <p className="mt-0.5 text-xs text-muted">16 juli 2021 ❤️</p>
            </div>
          </div>

          {/* Kolom 2: Navigatie */}
          <div>
            <p className="mb-4 font-display text-[10px] uppercase tracking-[0.25em] text-accent">Navigatie</p>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/faq" className="inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Contact */}
          <div>
            <p className="mb-4 font-display text-[10px] uppercase tracking-[0.25em] text-accent">Contact</p>
            <address className="space-y-2 text-sm not-italic text-muted">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.city}</p>
              <p>
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </p>
            </address>
            <div className="mt-5 flex gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-muted hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-[11px] text-muted/50">
        © {new Date().getFullYear()} Eetcafé Silversant · Amstelveen
      </div>
    </footer>
  );
}
