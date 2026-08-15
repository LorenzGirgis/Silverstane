export const ASSETS = {
  logo: "https://silversant.nl/wordpress/wp-content/uploads/2016/10/silversant_dakje_whiteglow.png",
  hero: [
    "https://silversant.nl/wordpress/wp-content/uploads/2017/01/DJI_0014M.jpg",
    "https://silversant.nl/wordpress/wp-content/uploads/2017/01/IMG_4018M.jpg",
    "https://silversant.nl/wordpress/wp-content/uploads/2017/01/S5A9040M.jpg",
  ],
  // Echte terrasfoto (lokaal geüpload door klant)
  terras: "/assets/terras.png",
  terrasKoningsdag: "/assets/terras.png",
  interior: "https://silversant.nl/wordpress/wp-content/uploads/2017/01/S5A9040M.jpg",
} as const;

export const CONTACT = {
  address: "Noorddammerlaan 119",
  city: "1187 AC Amstelveen",
  phone: "+31 20 641 4851",
  phoneRaw: "+31206414851",
  email: "info@silversant.nl",
  hours: {
    weekday: "Zo t/m do · 10:00 – 00:00",
    weekend: "Vr & za · 10:00 – 01:00",
  },
  reservationNote: "Reserveren vanaf 6 personen",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/partijen", label: "Partijen" },
  { to: "/vacatures", label: "Vacatures" },
  { to: "/fotos", label: "Foto's" },
  { to: "/contact", label: "Contact" },
] as const;

export const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/Silversant/" },
  { label: "TripAdvisor", href: "https://www.tripadvisor.nl/Restaurant_Review-g1024752-d4311813-Reviews-Silversant-Amstelveen_North_Holland_Province.html" },
] as const;

export const HIGHLIGHTS = [
  { n: "01", title: "Zonnig terras", text: "Zuidwesten — de hele dag zon op het terras." },
  { n: "02", title: "Gratis parkeren", text: "Ruim en vrij, direct bij de deur." },
  { n: "03", title: "Groepen welkom", text: "Reserveren vanaf 6 personen, binnen of buiten." },
  { n: "04", title: "Cash & pin", text: "Geen creditcards. Facturatie voor bedrijven." },
] as const;

export const MENU_PREVIEW_CARDS = [
  {
    slug: "lunch",
    label: "Lunch",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/silversantArt-600x550-copy.jpg",
  },
  {
    slug: "diner",
    label: "Diner",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/dinerSilversantArt-600x550.jpg",
  },
  {
    slug: "borrel",
    label: "Borrel",
    image: "https://silversant.nl/wordpress/wp-content/uploads/2020/05/borrelSilversantArt-600x550.jpg",
  },
] as const;

export const PARTIJEN = {
  pdf: "https://silversant.nl/wordpress/wp-content/uploads/2025/03/Infomatie-Partijen-Silversant-2025.pdf",
  points: [
    "Feesten en partijen voor groepen",
    "Zakelijke lunches en borrels",
    "Facturatie mogelijk voor bedrijven",
    "Ruim terras en parkeergelegenheid",
  ],
} as const;

export const VACATURE = {
  title: "Zelfstandig werkend kok",
  type: "Part-time of full-time",
  offers: [
    "Passend salaris",
    "4 dagen per week op full-time basis",
    "Team vol gezellige collega's",
    "Goede fooi",
  ],
  requirements: [
    "Ruime ervaring in de horeca",
    "Ervaring met diverse kook- en snijtechnieken",
    "Flexibel in werkuren, ook in het weekend",
    "Stressbestendig als de situatie erom vraagt",
  ],
} as const;

export const PHOTO_ALBUMS = [
  {
    title: "Koningsdag 2021",
    image: "https://live.staticflickr.com/65535/51155867489_75d482a811_h.jpg",
    href: "https://www.flickr.com/photos/127678334@N02/albums/72157719095896767",
  },
  {
    title: "Silversant van boven",
    image: "https://live.staticflickr.com/5800/30341383164_b165ce7341_b.jpg",
    href: "https://www.flickr.com/photos/127678334@N02/albums/72157676818984636",
  },
  {
    title: "Silversant by night",
    image: "https://live.staticflickr.com/7602/16958007442_1a3f28e92e_h.jpg",
    href: "https://www.flickr.com/photos/127678334@N02/albums/72157651201086789",
  },
  {
    title: "Opening 2008",
    image: "https://live.staticflickr.com/3859/15048988647_cfd90b7d54_c.jpg",
    href: "https://www.flickr.com/photos/127678334@N02/albums/72157647583571072",
  },
  {
    title: "Opening 2010",
    image: "https://live.staticflickr.com/3863/15048911998_9b0dc95c3d_c.jpg",
    href: "https://www.flickr.com/photos/127678334@N02/albums/72157647599076535",
  },
  {
    title: "Opening 2011",
    image: "https://live.staticflickr.com/3884/15048706580_b62fcac9be_c.jpg",
    href: "https://www.flickr.com/photos/127678334@N02/albums/72157647177495109",
  },
  {
    title: "Opening 2012",
    image: "https://live.staticflickr.com/5559/15048768767_09b3781a0a_c.jpg",
    href: "https://www.flickr.com/photos/127678334@N02/albums/72157647177244519",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Openbaar vervoer",
    a: "Silversant is te bereiken per bus 171. Haltes om de hoek: Zwarte Pad en Pastoor J W Brouwserslaan.",
  },
  {
    q: "Waar kan ik parkeren?",
    a: "Er is ruime, gratis parkeergelegenheid rondom het eetcafé — voor feesten, borrels en zakelijke lunches.",
  },
  {
    q: "Hoe kan ik betalen?",
    a: "Contant of met pin. Geen creditcards. Voor bedrijven is facturatie mogelijk — vraag het bedienend personeel.",
  },
  {
    q: "Hoe kan ik reserveren?",
    a: "Via het contactformulier, e-mail of telefoon. Ook ter plekke bij ons bedienend personeel. Vanaf 6 personen.",
  },
] as const;

export const SPONSORS = [
  { name: "Wijnschuur", image: "https://silversant.nl/wordpress/wp-content/uploads/2022/03/wijnschuur.jpg" },
  { name: "Palteam", image: "https://silversant.nl/wordpress/wp-content/uploads/2016/10/palteam.jpg" },
  { name: "Fontijn", image: "https://silversant.nl/wordpress/wp-content/uploads/2016/10/fontijn.jpg" },
  { name: "De Bo", image: "https://silversant.nl/wordpress/wp-content/uploads/2016/10/debo.jpg" },
  { name: "Accuraat", image: "https://silversant.nl/wordpress/wp-content/uploads/2016/10/accuraat.jpg" },
  { name: "Schipper Kozijnen", image: "https://www.schipperkozijnen.nl/img/logo.svg" },
] as const;
