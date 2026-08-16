import { PARTIJEN, CONTACT } from "../data/content";
import { PageHeader } from "../components/ui/PageHeader";
import { Button } from "../components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";

export function PartijenPage() {
  return (
    <>
      <PageHeader overline="Feesten & events" title="Partijen">
        <p>Organiseer je feest, borrel of zakelijke bijeenkomst bij ons in Amstelveen.</p>
      </PageHeader>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://silversant.nl/wordpress/wp-content/uploads/2017/01/S5A9040M.jpg"
              alt="Silversant interieur"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="mt-0 inline-block">
              <span className="label-bar -mt-8 relative inline-block">Silversant</span>
            </div>
          </Reveal>

          <div>
            <Stagger className="space-y-6">
              {PARTIJEN.points.map((point) => (
                <StaggerItem key={point}>
                  <div className="flex gap-4 border-b border-white/8 pb-6">
                    <span className="font-display text-2xl text-accent">→</span>
                    <p className="text-lg text-muted">{point}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href={PARTIJEN.pdf} external variant="brass" className="w-full sm:w-auto">
                Download info PDF
              </Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto">
                Offerte aanvragen
              </Button>
            </Reveal>

            <Reveal className="mt-10 text-sm text-muted">
              <p>{CONTACT.reservationNote}</p>
              <p className="mt-2">
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
