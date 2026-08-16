import { Link } from "react-router-dom";
import { ASSETS, CONTACT, NAV } from "../../data/content";

export function Footer() {
  return (
    <footer className="bg-ink text-[#f5f0e8]">
      {/* Bovenste gedeelte — logo + tekst centraal */}
      <div className="section-pad !pb-10 text-center">
        <div className="mx-auto max-w-[1400px]">
          <img
            src={ASSETS.logo}
            alt="Café Thijs"
            className="mx-auto h-20 w-auto opacity-90"
          />
          <p className="mt-6 font-display text-4xl italic text-[#f5f0e8] sm:text-5xl">
            Café Thijs
          </p>
          <p className="mt-3 font-body text-sm text-[#f5f0e8]/60">
            De Amstelveense Bierambassade
          </p>

          {/* Openingstijden horizontaal */}
          <div className="mx-auto mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:divide-x sm:divide-[#f5f0e8]/20">
            <div className="sm:pr-6">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent">Ma – Do</p>
              <p className="mt-1 font-body text-sm text-[#f5f0e8]">15:00 – 00:00</p>
            </div>
            <div className="sm:px-6">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent">Vr &amp; Za</p>
              <p className="mt-1 font-body text-sm text-[#f5f0e8]">15:00 – 01:00</p>
            </div>
            <div className="sm:pl-6">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent">Zo</p>
              <p className="mt-1 font-body text-sm text-[#f5f0e8]">15:00 – 20:00</p>
            </div>
          </div>

          {/* Adres + contact */}
          <div className="mt-8 flex flex-col items-center gap-1 font-body text-sm text-[#f5f0e8]/60">
            <p>{CONTACT.address}, {CONTACT.city}</p>
            <div className="flex gap-4">
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-accent transition-colors">{CONTACT.phone}</a>
              <span>·</span>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">{CONTACT.email}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigatie balk onderaan */}
      <div className="border-t border-[#f5f0e8]/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-5">
          {NAV.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="font-body text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/50 transition-colors hover:text-[#f5f0e8]"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/faq" className="font-body text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/50 transition-colors hover:text-[#f5f0e8]">
            FAQ
          </Link>
        </div>
      </div>

      <div className="border-t border-[#f5f0e8]/5 py-4 text-center font-body text-[11px] text-[#f5f0e8]/30">
        © {new Date().getFullYear()} Café Thijs · Amstelveen
      </div>
    </footer>
  );
}
