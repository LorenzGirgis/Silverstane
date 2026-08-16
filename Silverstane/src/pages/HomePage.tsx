import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ASSETS, CONTACT, HIGHLIGHTS, SPONSORS, MENU_PREVIEW_CARDS } from "../data/content";
import { Button } from "../components/ui/Button";
import { ImageCard } from "../components/ui/ImageCard";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";

export function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % ASSETS.hero.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="relative flex min-h-[calc(100dvh-var(--header-height))] items-end overflow-hidden">
        {ASSETS.hero.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            initial={false}
            animate={{ opacity: i === slide ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-12 pt-8 text-center sm:px-5 md:px-6 md:pb-24">
          <motion.p
            className="font-display text-[11px] uppercase tracking-[0.35em] text-accent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Eetcafé · Amstelveen
          </motion.p>

          <motion.h1
            className="mt-4 font-display text-[clamp(3.5rem,12vw,9rem)] font-medium uppercase leading-[0.85] tracking-wide text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Silver
            <br />
            sant
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-md text-sm uppercase tracking-[0.2em] text-muted/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            Borrel · Lunch · Diner · Terras
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button to="/contact" className="w-full sm:w-auto">Reserveren</Button>
            <Button to="/menu" variant="outline" className="w-full sm:w-auto">Menu</Button>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/5 bg-accent py-3">
        <motion.div
          className="flex whitespace-nowrap font-display text-[11px] font-medium uppercase tracking-[0.25em] text-black"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, copy) => (
            <span key={copy} className="mx-8 shrink-0">
              {CONTACT.hours.weekday} — {CONTACT.hours.weekend} — {CONTACT.reservationNote} — Gratis parkeren — Zonnig terras zuidwesten —&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── Waarom Silversant — editorial rijen ─── */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-2">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-accent">Waarom</p>
            <h2 className="mt-2 font-display text-3xl font-medium uppercase tracking-wide sm:text-4xl md:text-6xl">
              Silversant
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.n}
                className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-6 sm:py-6 md:py-7"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <div className="flex min-w-0 items-center gap-4 sm:gap-6 sm:flex-1">
                  <span className="w-6 shrink-0 font-display text-xs text-white/20 sm:w-8 md:text-sm">{item.n}</span>
                  <h3 className="min-w-0 flex-1 font-display text-lg font-medium uppercase tracking-wide transition-colors group-hover:text-accent sm:text-xl md:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                  <span className="shrink-0 font-display text-lg text-white/20 transition-all group-hover:translate-x-1 group-hover:text-accent sm:ml-auto md:hidden">→</span>
                </div>
                <p className="pl-10 text-sm leading-relaxed text-muted sm:max-w-xs sm:pl-0 md:block">{item.text}</p>
                <span className="ml-auto hidden shrink-0 font-display text-lg text-white/20 transition-all group-hover:translate-x-1 group-hover:text-accent md:inline">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Terras sectie ─── */}
      <section className="bg-dark">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-[3fr_2fr]">
          {/* Foto links */}
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] md:min-h-[560px]">
            <img
              src="/assets/terras.png"
              alt="Het terras van Silversant"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0">
              <span className="label-bar">Terras Silversant</span>
            </div>
          </div>
          {/* Tekst rechts */}
          <div className="flex flex-col justify-center section-pad !py-10 sm:!py-16">
            <Reveal>
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-accent">Sfeer</p>
              <h2 className="mt-3 font-display text-3xl font-medium uppercase leading-tight sm:text-4xl md:text-5xl">
                Zonnig terras<br />op het zuidwesten
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Of je nu komt voor een snelle lunch, een lange borrel of een diner met vrienden —
                ons terras is de hele dag in de zon. Binnen is het net zo gezellig.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button to="/fotos" className="w-full sm:w-auto">Foto's</Button>
                <Button to="/contact" variant="outline" className="w-full sm:w-auto">Contact</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-accent">Kaarten</p>
            <h2 className="mt-2 font-display text-4xl font-medium uppercase md:text-5xl">Ons menu</h2>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENU_PREVIEW_CARDS.map((card) => (
              <StaggerItem key={card.slug}>
                <ImageCard image={card.image} label={card.label} to="/menu" action="Bekijk menu" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-white/5 bg-dark section-pad">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-12 text-center">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-accent">Partners</p>
            <h2 className="mt-2 font-display text-4xl font-medium uppercase">Vrienden van Silversant</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted">
              Bedrijfsnaam promoten bij een groot publiek?{" "}
              <Link to="/contact" className="text-accent underline-offset-2 hover:underline">Neem contact op</Link>.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {SPONSORS.map((s) => (
              <StaggerItem key={s.name}>
                <div className="flex aspect-[3/2] items-center justify-center bg-white p-4">
                  <img src={s.image} alt={s.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
