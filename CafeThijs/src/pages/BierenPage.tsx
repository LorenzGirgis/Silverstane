import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";

type BeerItem = { name: string; note?: string };
type BeerSection = { title: string; items: BeerItem[] };
type BeerTab = { slug: string; label: string; image: string; note?: string; sections: BeerSection[] };

const BEERS: BeerTab[] = [
  {
    slug: "tap",
    label: "Van de tap",
    image: "https://cafethijs.nl/wp-content/uploads/2020/10/v2.jpg",
    note: "Ons aanbod rouleert continu — er staan altijd 12 speciaalbieren op tap. Vraag onze bierambassadeur George Thijs wat er vandaag schenkt.",
    sections: [
      {
        title: "Altijd op tap",
        items: [
          { name: "Wisselend speciaalbier", note: "12 taps — assortiment wisselt regelmatig" },
          { name: "Blond & tripel", note: "Belgische en Nederlandse klassiekers" },
          { name: "IPA & pale ale", note: "Hopbitter en fruitig" },
          { name: "Stout & porter", note: "Donker en vol" },
          { name: "Seizoensbieren", note: "Beperkt beschikbaar" },
        ],
      },
      {
        title: "Proeverij",
        items: [
          { name: "Bierproeverij op aanvraag", note: "Voor groepen — neem contact op" },
          { name: "Advies van de bierambassadeur", note: "George helpt je kiezen" },
        ],
      },
    ],
  },
  {
    slug: "flessen",
    label: "Flessen",
    image: "https://cafethijs.nl/wp-content/uploads/2022/03/2CB5F442-C876-4CDB-BF64-7354C78D6865-1024x1024.jpg",
    note: "Naast de tap hebben we een selectie speciaalbieren op fles. Vraag naar het actuele aanbod aan de bar.",
    sections: [
      {
        title: "Flessen",
        items: [
          { name: "Belgische abdijbieren" },
          { name: "Nederlandse craft bieren" },
          { name: "Duitse weizen & pils" },
          { name: "Seizoens- en limited editions" },
        ],
      },
    ],
  },
  {
    slug: "dranken",
    label: "Overige dranken",
    image: "https://cafethijs.nl/wp-content/uploads/2024/10/IMG_0436-scaled.jpg",
    sections: [
      {
        title: "Warm",
        items: [
          { name: "Koffie & thee", note: "Vanaf 15:00 uur" },
          { name: "Warme chocomel" },
        ],
      },
      {
        title: "Koud",
        items: [
          { name: "Frisdranken" },
          { name: "Jus d'orange" },
          { name: "Wijn per glas" },
        ],
      },
      {
        title: "Cocktails",
        items: [
          { name: "Gin tonic", note: "Zorgvuldig gebouwd" },
          { name: "Overige cocktails", note: "Vraag naar de kaart" },
        ],
      },
    ],
  },
];

export function BierenPage() {
  const [active, setActive] = useState(0);
  const tab = BEERS[active];

  return (
    <>
      <PageHeader overline="Café Thijs" title="Bieren">
        <p>12 speciaalbieren op tap — het assortiment rouleert. Altijd iets nieuws te ontdekken.</p>
      </PageHeader>

      <div className="sticky-below-header z-30 overflow-x-auto border-b border-white/10 bg-black/95 backdrop-blur-sm [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex max-w-[1400px] snap-x snap-mandatory gap-0 px-4 sm:px-5">
          {BEERS.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => setActive(i)}
              className={`relative shrink-0 snap-start px-4 py-3.5 font-display text-[10px] uppercase tracking-[0.14em] transition-colors sm:px-5 sm:py-4 sm:text-[11px] sm:tracking-[0.18em] ${
                i === active ? "text-accent" : "text-muted hover:text-white"
              }`}
            >
              {t.label}
              {i === active && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-32 overflow-hidden sm:h-40 md:h-56">
            <img src={tab.image} alt={tab.label} className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-4 sm:px-5 md:px-10 lg:px-16">
              <span className="label-bar text-sm sm:text-base md:text-xl">{tab.label}</span>
            </div>
          </div>

          <section className="section-pad">
            <div className="mx-auto max-w-[1400px]">
              {tab.note && (
                <Reveal>
                  <p className="mb-10 max-w-2xl border-l-2 border-accent pl-4 text-sm italic text-muted">
                    {tab.note}
                  </p>
                </Reveal>
              )}

              <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {tab.sections.map((section) => (
                  <Reveal key={section.title}>
                    <div>
                      <h2 className="mb-4 font-display text-xs uppercase tracking-[0.2em] text-accent sm:mb-5 sm:text-sm">
                        {section.title}
                      </h2>
                      <ul className="space-y-0 divide-y divide-white/8">
                        {section.items.map((item) => (
                          <li key={item.name} className="py-3">
                            <span className="text-sm text-white">{item.name}</span>
                            {item.note && (
                              <span className="mt-0.5 block text-xs text-muted/70 sm:mt-0 sm:inline sm:ml-2">{item.note}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
