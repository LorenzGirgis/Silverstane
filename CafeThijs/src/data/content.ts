export const ASSETS = {
  logo: "https://cafethijs.nl/wp-content/uploads/2020/02/groen-logo.jpeg",
  hero: [
    "https://cafethijs.nl/wp-content/uploads/2020/10/v1.jpg",
    "https://cafethijs.nl/wp-content/uploads/2020/10/v2.jpg",
    "https://cafethijs.nl/wp-content/uploads/2022/03/2CB5F442-C876-4CDB-BF64-7354C78D6865-1024x1024.jpg",
    "https://cafethijs.nl/wp-content/uploads/2024/10/IMG_0436-scaled.jpg",
  ],
  interior: "https://cafethijs.nl/wp-content/uploads/2020/10/v1.jpg",
  bar: "https://cafethijs.nl/wp-content/uploads/2020/10/v2.jpg",
} as const;

export const CONTACT = {
  address: "Dorpsstraat 64 b",
  city: "1182 JE Amstelveen",
  phone: "+31 20 640 89 72",
  phoneRaw: "+31206408972",
  email: "info@cafethijs.nl",
  hours: {
    weekday: "Ma t/m do · 15:00 – 00:00",
    weekend: "Vr & za · 15:00 – 01:00",
    sunday: "Zo · 15:00 – 20:00",
  },
  reservationNote: "Borrel organiseren? Neem contact op",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/bieren", label: "Bieren" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/nieuws", label: "Nieuws" },
  { to: "/contact", label: "Contact" },
] as const;

export const SOCIAL: ReadonlyArray<{ label: string; href: string }> = [];

export const HIGHLIGHTS = [
  { n: "01", title: "12 bieren op tap", text: "Sinds 2020 staan er 12 taps — de selectie rouleert continu." },
  { n: "02", title: "Bierambassadeur", text: "George Thijs kent zijn vak en helpt je de juiste keuze te maken." },
  { n: "03", title: "Gezellig & toegankelijk", text: "Van jong tot oud — iedereen is welkom vanaf 15:00 uur." },
  { n: "04", title: "Speciaal & verrassend", text: "Van koffie in de middag tot gin tonic en speciaal bier in de avond." },
] as const;

export const BEER_PREVIEW_CARDS = [
  {
    slug: "tap",
    label: "Van de tap",
    image: "https://cafethijs.nl/wp-content/uploads/2020/10/v2.jpg",
  },
  {
    slug: "flessen",
    label: "Flessen",
    image: "https://cafethijs.nl/wp-content/uploads/2022/03/2CB5F442-C876-4CDB-BF64-7354C78D6865-1024x1024.jpg",
  },
  {
    slug: "borrel",
    label: "Borrel",
    image: "https://cafethijs.nl/wp-content/uploads/2024/10/IMG_0436-scaled.jpg",
  },
] as const;

export const ABOUT = {
  owner: "George Thijs",
  title: "Uw Amstelveense Bierambassadeur",
  intro:
    "Sinds de zomer van 2020 heeft de bar een upgrade gekregen en staan er nu 12 taps in plaats van de originele 8. Het idee is echter hetzelfde gebleven: de bieren blijven altijd rouleren. Zo staat er altijd wel ééntje tussen die je nog kent.",
  story:
    "Daar waar het bier vloeit en de drank in de glazen stroomt. Waar de wijnen geschonken worden en gin tonics zorgvuldig worden gebouwd. Waar de gezelligheid wordt gecreëerd door de mensen die het café vullen. Welkom bij Café Thijs!",
} as const;

export const BORREL = {
  points: [
    "Borrel organiseren voor groepen",
    "Privéruimte op aanvraag",
    "Speciaalbieren van de tap",
    "Gelegenheid op maat — van verjaardag tot bedrijfsborrel",
  ],
} as const;

export const NEWS_ITEMS = [
  {
    title: "Online Bierproeverij",
    date: "2024",
    excerpt: "Proef mee met onze online bierproeverij — ontdek speciaalbieren vanuit huis.",
    image: "https://cafethijs.nl/wp-content/uploads/2022/03/2CB5F442-C876-4CDB-BF64-7354C78D6865-1024x1024.jpg",
  },
  {
    title: "12 taps sinds 2020",
    date: "2020",
    excerpt: "De bar kreeg een upgrade: van 8 naar 12 speciaalbieren op de tap. Het assortiment blijft rouleren.",
    image: "https://cafethijs.nl/wp-content/uploads/2020/10/v1.jpg",
  },
  {
    title: "Welkom bij Café Thijs",
    date: "2019",
    excerpt: "In de gemoedelijke sfeer van Café Thijs is iedereen van harte welkom — van koffie tot speciaal bier.",
    image: "https://cafethijs.nl/wp-content/uploads/2020/10/v2.jpg",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Wanneer is Café Thijs open?",
    a: "Maandag t/m donderdag 15:00 – 00:00, vrijdag en zaterdag 15:00 – 01:00, zondag 15:00 – 20:00.",
  },
  {
    q: "Waar kan ik parkeren?",
    a: "Er is parkeergelegenheid in de buurt van de Dorpsstraat in Amstelveen.",
  },
  {
    q: "Kan ik een borrel organiseren?",
    a: "Ja! Vul het contactformulier in met datum, tijd en aantal personen — we nemen contact met je op.",
  },
  {
    q: "Hoeveel bieren staan er op tap?",
    a: "Er staan 12 speciaalbieren op tap. Het aanbod rouleert regelmatig — kom langs of volg ons voor updates.",
  },
] as const;
