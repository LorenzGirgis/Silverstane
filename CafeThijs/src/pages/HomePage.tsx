import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ASSETS, CONTACT, HIGHLIGHTS, BEER_PREVIEW_CARDS } from "../data/content";
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
      {/* ─── Hero — gecentreerd, elegant ─── */}
      <section className="relative flex min-h-[calc(100dvh-var(--header-height))] items-center justify-center overflow-hidden">
        {ASSETS.hero.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            initial={false}
            animate={{ opacity: i === slide ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[#0a0d0a]/55" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.p
            className="font-body text-xs uppercase tracking-[0.4em] text-accent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Amstelveen · Bierambassade
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-[clamp(3rem,13vw,7.5rem)] italic leading-[1.05] text-[#f5f0e8]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Café Thijs
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-sm font-body text-sm leading-relaxed text-[#f5f0e8]/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Waar het bier vloeit, de muziek klinkt en George achter de toog staat.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <Button to="/contact" className="w-full sm:w-auto">Borrel organiseren</Button>
            <Button to="/bieren" variant="outline" className="w-full sm:w-auto">Onze bieren</Button>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="h-10 w-px bg-[#f5f0e8]/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ─── Openingstijden ticker ─── */}
      <div className="overflow-hidden border-y border-white/20 bg-accent py-3">
        <motion.div
          className="flex whitespace-nowrap font-body text-[11px] font-medium uppercase tracking-[0.25em] text-[#f5f0e8]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, copy) => (
            <span key={copy} className="mx-8 shrink-0">
              {CONTACT.hours.weekday} — {CONTACT.hours.weekend} — {CONTACT.hours.sunday} — 12 speciaalbieren — Dorpsstraat 64b Amstelveen —&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── Sfeer citaat ─── */}
      <section className="section-pad bg-dark">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-accent">Café Thijs</p>
            <blockquote className="mt-6 font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              "Daar waar het bier vloeit en de drank in de glazen stroomt. Waar de muziek op de achtergrond klinkt en de mensen op de voorgrond staan."
            </blockquote>
            <p className="mt-6 font-body text-sm text-muted">— George Thijs, bierambassadeur</p>
          </Reveal>
        </div>
      </section>

      {/* ─── Waarom Café Thijs — 2×2 grid ─── */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-accent">Waarom</p>
            <h2 className="mt-3 font-display text-3xl italic sm:text-4xl md:text-5xl">Café Thijs</h2>
          </Reveal>

          <div className="grid gap-px border border-white/20 bg-white/20 sm:grid-cols-2">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.07}>
                <div className="group flex flex-col gap-3 bg-black p-7 transition-colors hover:bg-dark sm:p-8">
                  <span className="font-body text-[10px] uppercase tracking-[0.3em] text-accent">{item.n}</span>
                  <h3 className="font-display text-xl italic text-white sm:text-2xl">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bar sectie — full-width foto ─── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[50vh] min-h-[320px] md:h-[60vh]">
          <img
            src={ASSETS.bar}
            alt="De bar van Café Thijs"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0a0d0a]/50" />
        </div>
        <div className="bg-dark section-pad !py-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl italic sm:text-4xl">De Amstelveense Bierambassade</h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-muted">
              Vanaf 15:00 voor een kop koffie, later voor een borreluur of speciaalbier. Van jong tot oud —
              iedereen is welkom bij George achter de 12 taps.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button to="/over-ons" className="w-full sm:w-auto">Over ons</Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto">Borrel organiseren</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Bieren preview ─── */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-accent">Assortiment</p>
            <h2 className="mt-3 font-display text-3xl italic sm:text-4xl">Onze bieren</h2>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BEER_PREVIEW_CARDS.map((card) => (
              <StaggerItem key={card.slug}>
                <ImageCard image={card.image} label={card.label} to="/bieren" action="Bekijk" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CTA onderaan ─── */}
      <section className="border-t border-white/20 bg-dark section-pad">
        <div className="mx-auto max-w-[1400px] text-center">
          <Reveal>
            <h2 className="font-display text-3xl italic sm:text-4xl">Kom gezellig langs</h2>
            <p className="mx-auto mt-4 max-w-md font-body text-sm text-muted">
              Nieuwsgierig? Houd de website in de gaten of kom gewoon langs.{" "}
              <Link to="/nieuws" className="text-accent hover:underline underline-offset-2">Bekijk nieuws</Link>.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button to="/contact" className="w-full sm:w-auto">Borrel organiseren</Button>
              <Button to="/bieren" variant="outline" className="w-full sm:w-auto">Onze bieren</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
