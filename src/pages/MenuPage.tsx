import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";

type MenuItem = { name: string; price?: string; note?: string };
type MenuSection = { title: string; items: MenuItem[] };
type MenuTab = { slug: string; label: string; image: string; note?: string; sections: MenuSection[] };

const MENU: MenuTab[] = [
  {
    slug: "lunch",
    label: "Lunchkaart",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/silversantArt-600x550-copy.jpg",
    note: "De lunchgerechten worden geserveerd tot 17:00 uur. Apart afrekenen is helaas niet mogelijk.",
    sections: [
      {
        title: "Diverse broodjes",
        items: [
          { name: "Pistolet ossenworst royaal", price: "€8,50" },
          { name: "Pistolet gezond deluxe (ham en kaas)", price: "€8,50" },
          { name: "Rundercarpaccio met pesto", price: "€11,50" },
          { name: "Huisgemaakte tonijnsalade", price: "€10,50" },
          { name: "Gerookte zalm met roomkaas", price: "€13,50" },
          { name: "Warme geitenkaas", price: "€11,00" },
          { name: "Warme kip", price: "€12,95" },
          { name: "Oosterse beef", price: "€13,95" },
          { name: "Broodje met warm vlees", price: "€7,50", note: "met satésaus" },
          { name: "Broodje met warme beenham", price: "€7,50", note: "met honing-mosterdsaus" },
          { name: "Broodje huisgemaakte bal", price: "€7,95", note: "met satésaus" },
          { name: "Twee Oma Bobs kroketten", price: "€10,75" },
          { name: "Twee Oma Bobs Vegan kroketten", price: "€11,50" },
        ],
      },
      {
        title: "Sneetjes wit of bruinbrood",
        items: [
          { name: "Beef Burger met spek en kaas", price: "€10,95" },
          { name: "Tosti beenham en kaas", price: "€4,95" },
        ],
      },
      {
        title: "Uitsmijters en omeletten",
        items: [
          { name: "Spek met kaas", price: "€10,75" },
          { name: "Tomaat met kaas", price: "€10,75" },
          { name: "Rosbief", price: "€10,75" },
          { name: "Beenham met kaas", price: "€10,75" },
          { name: "Silversant Speciaal", price: "€11,75", note: "Eventueel ook vegetarisch" },
        ],
      },
    ],
  },
  {
    slug: "diner",
    label: "Dinerkaart",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/dinerSilversantArt-600x550.jpg",
    note: "Alle hoofdgerechten worden geserveerd met frieten en gemengde salade. Heeft u een allergie? Meld dit bij ons. Apart afrekenen is helaas niet mogelijk.",
    sections: [
      {
        title: "Voorgerechten",
        items: [
          { name: "Mandje molenaarsbrood met kruidenboter en dip", price: "€5,00" },
          { name: "Tomatensoep", price: "€7,25" },
          { name: "Franse uiensoep", price: "€7,25" },
          { name: "Soep van de dag", price: "v.a. €8,15" },
          { name: "Gebakken mosselen", price: "€11,50" },
          { name: "Gebakken kippenlevers", price: "€11,75" },
          { name: "Gamba's Pil Pil", price: "€13,50" },
          { name: "Escargots met kruidenboter", price: "€12,75", note: "dozijn" },
          { name: "Beef Tataki", price: "€14,75" },
          { name: "Caprese", price: "€11,75", note: "mozzarella, tomaat en basilicum" },
          { name: "Rundercarpaccio", price: "€15,50" },
          { name: "Gerookte paling met toast", price: "€19,95" },
          { name: "Gerookte zalm met toast", price: "€18,75" },
          { name: "Hollandse garnalencocktail", price: "€19,95" },
          { name: "Toast Zuiderzee", price: "€29,95", note: "Zalm, paling en Hollandse garnalen. Extra toast €1,00" },
        ],
      },
      {
        title: "Maaltijdsalades",
        items: [
          { name: "Salade met warme geitenkaas", price: "€15,25" },
          { name: "Salade met tonijnsalade", price: "€14,75" },
          { name: "Salade rundercarpaccio met pesto en Parmezaanse kaas", price: "€17,75" },
          { name: "Salade met gerookte zalm", price: "€18,95" },
          { name: "Salade met warme kip", price: "€19,25" },
          { name: "Salade met oosterse beef", price: "€20,50" },
        ],
      },
      {
        title: "Hoofdgerechten",
        items: [
          { name: "Varkenshaas saté met friet", price: "€19,35" },
          { name: "Varkenshaas saté met stokbrood", price: "€19,35" },
          { name: "Ossenhaassaté", price: "€22,75" },
          { name: "Kipsaté", price: "€19,15" },
          { name: "Vegetarische saté", price: "€18,95" },
          { name: "Wiener Schnitzel*", price: "€20,35" },
          { name: "XL-Burger met spek en kaas", price: "€16,95" },
          { name: "Vegetarische beyond burger", price: "€17,65" },
          { name: "Spareribs", price: "€25,25" },
          { name: "Steak Silversant (250g)*", price: "€23,50", note: "Kogelbiefstuk met gebakken uien en champignons" },
          { name: "Tournedos (250g)*", price: "€35,25", note: "Met groente en jus" },
          { name: "Ribe-eye (300g)*", price: "€33,50" },
        ],
      },
      {
        title: "Visgerechten",
        items: [
          { name: "Gebakken sliptongetjes", price: "€27,75" },
          { name: "Gebakken zalmfilet", price: "€24,75" },
          { name: "Salade met gegrilde tonijnsteak", price: "€27,50", note: "met wasabi-mayonaise en molenaarsbrood" },
        ],
      },
      {
        title: "Kleine gasten",
        items: [
          { name: "Stokje saté met friet en salade", price: "€9,95" },
          { name: "Kleine hamburger met friet en salade", price: "€9,95" },
          { name: "Spare rib met friet en salade", price: "€11,20" },
          { name: "Kleine schnitzel met friet en salade", price: "€11,20" },
          { name: "Kroket met friet en salade", price: "€9,50" },
          { name: "Kipstukjes met friet en salade", price: "€9,50" },
          { name: "Poffertjes", price: "€6,10" },
        ],
      },
    ],
  },
  {
    slug: "borrel",
    label: "Borrelkaart",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/borrelSilversantArt-600x550.jpg",
    note: "Alle porties gaan vanaf 6 stuks.",
    sections: [
      {
        title: "Gemengd warm",
        items: [
          { name: "Gemengd bittergarnituur 12 stuks", price: "€12,50" },
          { name: "Oma Bobs bitterballen", price: "€6,30" },
          { name: "Oma Bobs Vegan Bitterballen", price: "€6,95" },
          { name: "Kaassoufflés", price: "€6,00" },
          { name: "Kipkarage krokantjes", price: "€6,25" },
          { name: "Bekbrandertjes", price: "€5,75" },
          { name: "Bamiballen", price: "€5,75" },
          { name: "Kipnuggets", price: "€5,75" },
          { name: "Kaasstengels", price: "€6,50" },
          { name: "Mini frikandellen", price: "€5,75" },
          { name: "Butterfly garnalen", price: "€6,50" },
          { name: "Crunchy chicken wings", price: "€9,00" },
        ],
      },
      {
        title: "Gemengd koud",
        items: [
          { name: "Gemengd koud bittergarnituur", price: "€12,50" },
          { name: "Portie ossenworst", price: "€5,75" },
          { name: "Portie leverworst", price: "€5,25" },
          { name: "Portie oude kaasblokjes", price: "€5,25" },
        ],
      },
      {
        title: "Borrelhapjes",
        items: [
          { name: "Mandje molenaarsbrood met dip", price: "€5,00" },
          { name: "Borrelnootjes", price: "€3,00" },
          { name: "Stokje saté van de haas met brood", price: "€5,00" },
        ],
      },
      {
        title: "Gebak",
        items: [
          { name: "Appelgebak met slagroom", price: "€4,95" },
          { name: "Holtkamp lemon meringue", price: "€6,25" },
          { name: "Holtkamp cheesecake met warme kersen en slagroom", price: "€6,25" },
        ],
      },
    ],
  },
  {
    slug: "dessert",
    label: "Dessertkaart",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/dessertSilversantArt-600x550.jpg",
    sections: [
      {
        title: "Nagerechten",
        items: [
          { name: "Dame Blanche", price: "€7,25" },
          { name: "Vanille-ijs met warme kersen en slagroom", price: "€7,25" },
          { name: "Vanille-ijs met boerenjongens en slagroom", price: "€7,25" },
          { name: "Vanille-ijs met seizoenfruit en slagroom", price: "€7,50" },
          { name: "Vanille-ijs met advocaat en slagroom", price: "€7,25" },
          { name: "Appelgebak met slagroom", price: "€4,75" },
          { name: "Chocolade mousse met slagroom", price: "€6,75" },
          { name: "Cheesecake met warme kersen", price: "€5,95" },
          { name: "Red velvet cake met slagroom", price: "€6,15" },
          { name: "Brusselse wafel met kersen, ijs en slagroom", price: "€7,95" },
          { name: "Crème Brûlee", price: "€6,50" },
          { name: "Poffertjes met roomboter en poedersuiker", price: "€6,10" },
          { name: "Speciale toetje van de dag", price: "v.a. €7,75" },
        ],
      },
      {
        title: "Speciale koffies",
        items: [
          { name: "Irish Koffie", price: "€8,50", note: "Ierse whisky" },
          { name: "Spanish Koffie", price: "€8,50", note: "Tia Maria" },
          { name: "43 Koffie", price: "€8,50", note: "Licor 43" },
          { name: "French Koffie", price: "€8,50", note: "Grand Marnier" },
          { name: "Italian Koffie", price: "€8,50", note: "Disaronno Amaretto" },
          { name: "Mexican Koffie", price: "€8,50", note: "Kahlua" },
          { name: "Baileys Koffie", price: "€8,50", note: "Baileys" },
          { name: "Kiss of Fire", price: "€8,50", note: "Cointreau en Tia Maria" },
        ],
      },
      {
        title: "Cocktails",
        items: [
          { name: "Espresso Martini", price: "€11,25" },
          { name: "Pornstar Martini", price: "€11,25" },
          { name: "Mojito", price: "€11,25" },
        ],
      },
    ],
  },
  {
    slug: "dranken",
    label: "Drankenkaart",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/drankenSilversantArt-600x550.jpg",
    note: "Apart afrekenen is helaas niet mogelijk.",
    sections: [
      {
        title: "Warme dranken",
        items: [
          { name: "Thee", price: "€2,85" },
          { name: "Verse munthee", price: "€4,05" },
          { name: "Verse gemberthee", price: "€4,35" },
          { name: "Gember/munthee", price: "€4,50" },
          { name: "Koffie", price: "€3,10" },
          { name: "Cappuccino", price: "€3,40" },
          { name: "Koffie verkeerd", price: "€3,60" },
          { name: "Latte macchiato", price: "€4,10" },
          { name: "Espresso", price: "€3,10" },
          { name: "Espresso macchiato", price: "€3,35" },
          { name: "Dubbele espresso", price: "€5,05" },
          { name: "Flat White", price: "€5,05" },
          { name: "Warme chocomel", price: "€3,50" },
          { name: "Warme chocomel met slagroom", price: "€3,75" },
          { name: "Warme chocomel met bruine rum en slagroom", price: "€7,50" },
        ],
      },
      {
        title: "Koude dranken",
        items: [
          { name: "Diverse frisdranken", price: "€3,25", note: "Pepsi, Fanta, 7up, Rivella, etc." },
          { name: "Coca Cola / Coca Cola Zero", price: "€3,40" },
          { name: "Ice Tea / Ice Tea Green", price: "€3,40" },
          { name: "Appelsap / Tomatensap", price: "€3,40" },
          { name: "Kleine verse jus d'orange", price: "€4,25" },
          { name: "Grote verse jus d'orange", price: "€5,25" },
        ],
      },
      {
        title: "Bieren van de tap",
        items: [
          { name: "Kleintje Heineken 0,15 cl", price: "€3,25" },
          { name: "Fluitje Heineken 0,22 cl", price: "€3,60" },
          { name: "Vaasje Heineken 0,25 cl", price: "€3,75" },
          { name: "Pull Heineken 0,5 cl", price: "€7,50" },
          { name: "Heineken 0%", price: "€3,75" },
          { name: "LaChouffe", price: "€5,50" },
          { name: "IJwit", price: "€5,50" },
          { name: "Affligem Blond", price: "€5,50" },
          { name: "Texels Speciaal bier", price: "€5,50" },
          { name: "De Koninck", price: "€5,50" },
          { name: "Kanunnik (0,33 cl)", price: "€6,35" },
          { name: "Silversant Blond", price: "€5,50" },
          { name: "Diverse wisseltap", price: "v.a. €5,50" },
        ],
      },
      {
        title: "Bieren in fles",
        items: [
          { name: "Corona", price: "€6,25" },
          { name: "Wilderen Kriek", price: "€4,15" },
          { name: "Amstel Radler 2%/0%", price: "€4,15" },
          { name: "Duvel", price: "€5,50" },
          { name: "Affligem Dubbel/Tripel", price: "€5,25" },
          { name: "Affligem Blond/Wit 0,0%", price: "€5,25" },
        ],
      },
      {
        title: "Gin Tonics",
        items: [
          { name: "Bobby's gin met Fever tree tonic", price: "v.a. €11,25" },
          { name: "Bulldog gin met Fever tree tonic", price: "v.a. €11,25" },
          { name: "Bombay gin met Fever tree tonic", price: "v.a. €11,25" },
          { name: "Hendricks gin met Fever tree tonic", price: "v.a. €11,25" },
        ],
      },
      {
        title: "Cocktails",
        items: [
          { name: "Espresso Martini", price: "€11,25" },
          { name: "Pornstar Martini", price: "€11,25" },
          { name: "Mojito", price: "€11,25" },
          { name: "Aperol Spritz", price: "€8,95" },
        ],
      },
      {
        title: "Likeuren",
        items: [
          { name: "Tia Maria", price: "€5,95" },
          { name: "Amarulla", price: "€5,95" },
          { name: "Amaretto", price: "€5,95" },
          { name: "Gran Marnier", price: "€5,95" },
        ],
      },
    ],
  },
  {
    slug: "wijn",
    label: "Wijnkaart",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/wijnenSilversantArt-600x550.jpg",
    sections: [
      {
        title: "Witte wijnen",
        items: [
          { name: "Lanzos Verdejo, Rueda – Spanje", price: "Glas €5,15 / Fles €24,25", note: "Verdejo · Citrus / Appel / Tropisch" },
          { name: "Il Capannone Pinot Grigio, Veneto – Italië", price: "Glas €5,35 / Fles €25,75", note: "Pinot Grigio · Aromatisch / Wit fruit" },
          { name: "Ocho Chardonnay, Curico Valley – Chili", price: "Glas €5,55 / Fles €27,50", note: "Chardonnay · Perzik / Rijk / Sappig" },
          { name: "Six Degrees Oak Aged Chardonnay, California", price: "Glas €6,50 / Fles €31,00", note: "Romig met zijdezachte finish" },
          { name: "Marcel et Blanche Chablis, Bourgogne – Frankrijk", price: "Glas €9,00 / Fles €51,50", note: "Droge klassieker bij vis" },
          { name: "Borgo Stajnbech Sauvignon Blanc, Veneto – Italië", price: "Fles €39,50", note: "Citrusfruit & appel / Mineralig / Fris" },
          { name: "Adegas Galega Albarino, Rias Baixas – Spanje", price: "Fles €34,50", note: "Fris / Mineraal / Levendig" },
          { name: "Regis Jouan Sancerre, Loire – Frankrijk", price: "Fles €49,50", note: "Sauvignon Blanc · Mineraal en vol" },
          { name: "Weingut Pfaffl Grüner Veltliner, Weinviertel – Oostenrijk", price: "Fles €30,50", note: "Fris & levendig / licht kruidig" },
        ],
      },
      {
        title: "Rode wijnen",
        items: [
          { name: "8cho Cabernet Sauvignon, Colchagua Valley – Chili", price: "Glas €5,15 / Fles €24,25", note: "Kersen & pruimen / body" },
          { name: "Les Vignes Merlot, Languedoc – Frankrijk", price: "Glas €5,55 / Fles €27,25", note: "Romig / kruidig / bessen" },
          { name: "Casir Dos Santos Reserva Malbec, Mendoza – Argentinië", price: "Glas €6,85 / Fles €33,50", note: "Zwart fruit / cacao & vanille" },
          { name: "Conde de San Cristobal Reserva, Ribera del Duero – Spanje", price: "Glas €8,30 / Fles €41,50", note: "Cassis / cederhout / elegant" },
          { name: "Terre Del Bruno Gorgoli, Toscane – Italië", price: "Fles €47,50", note: "Super Tuscan blend" },
          { name: "Il Capannone Primitivo, Puglia – Italië", price: "Fles €26,50", note: "Sappig / zongerijpt" },
          { name: "Vina Ijabla Graciano, Rioja – Spanje", price: "Fles €39,50", note: "Fruitig / rond / complex" },
          { name: "Chateau Perron Lalande de Pomerol, Bordeaux – Frankrijk", price: "Fles €52,00", note: "Klassiek / elegant / complex" },
        ],
      },
      {
        title: "Rosé wijnen",
        items: [
          { name: "Laborie Rosé, Languedoc – Frankrijk", price: "Glas €5,15 / Fles €24,25", note: "Grenache · Aardbei & framboos" },
        ],
      },
    ],
  },
];

export function MenuPage() {
  const [active, setActive] = useState(0);
  const tab = MENU[active];

  return (
    <>
      <PageHeader overline="Eetcafé Silversant" title="Menu">
        <p>Lunch, diner, borrel, dessert, dranken en wijn.</p>
      </PageHeader>

      {/* Tab-balk */}
      <div className="sticky top-[88px] z-30 overflow-x-auto border-b border-white/10 bg-black/95 backdrop-blur-sm md:top-[120px]">
        <div className="mx-auto flex max-w-[1400px] gap-0 px-5">
          {MENU.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => setActive(i)}
              className={`relative shrink-0 px-5 py-4 font-display text-[11px] uppercase tracking-[0.18em] transition-colors ${
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
          {/* Hero-afbeelding van het kaarttype */}
          <div className="relative h-40 overflow-hidden md:h-56">
            <img
              src={tab.image}
              alt={tab.label}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-5 md:px-10 lg:px-16">
              <span className="label-bar text-base md:text-xl">{tab.label}</span>
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

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {tab.sections.map((section) => (
                  <Reveal key={section.title}>
                    <div>
                      <h2 className="mb-5 font-display text-sm uppercase tracking-[0.2em] text-accent">
                        {section.title}
                      </h2>
                      <ul className="space-y-0 divide-y divide-white/8">
                        {section.items.map((item) => (
                          <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                            <div>
                              <span className="text-sm text-white">{item.name}</span>
                              {item.note && (
                                <span className="ml-2 text-xs text-muted/70">{item.note}</span>
                              )}
                            </div>
                            {item.price && (
                              <span className="shrink-0 font-display text-sm text-accent">
                                {item.price}
                              </span>
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
