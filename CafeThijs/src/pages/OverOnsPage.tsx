import { ABOUT, ASSETS, BORREL, CONTACT } from "../data/content";
import { PageHeader } from "../components/ui/PageHeader";
import { Button } from "../components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";

export function OverOnsPage() {
  return (
    <>
      <PageHeader overline="Over ons" title="Café Thijs">
        <p>Voel je welkom bij de Amstelveense Bierambassade.</p>
      </PageHeader>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={ASSETS.interior}
              alt="Interieur Café Thijs"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="mt-0 inline-block">
              <span className="label-bar -mt-8 relative inline-block">Café Thijs</span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-accent">{ABOUT.title}</p>
              <h2 className="mt-3 font-display text-3xl font-medium uppercase md:text-4xl">{ABOUT.owner}</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">{ABOUT.intro}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{ABOUT.story}</p>
            </Reveal>

            <Stagger className="mt-10 space-y-6">
              {BORREL.points.map((point) => (
                <StaggerItem key={point}>
                  <div className="flex gap-4 border-b border-white/8 pb-6">
                    <span className="font-display text-2xl text-accent">→</span>
                    <p className="text-base text-muted">{point}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button to="/contact" variant="brass" className="w-full sm:w-auto">
                Borrel organiseren
              </Button>
              <Button to="/bieren" variant="outline" className="w-full sm:w-auto">
                Onze bieren
              </Button>
            </Reveal>

            <Reveal className="mt-10 text-sm text-muted">
              <p>
                Bel <a href={`tel:${CONTACT.phoneRaw}`} className="text-accent hover:underline">{CONTACT.phone}</a>{" "}
                of mail <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">{CONTACT.email}</a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
