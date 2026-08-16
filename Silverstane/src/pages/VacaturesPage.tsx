import { VACATURE, CONTACT } from "../data/content";
import { PageHeader } from "../components/ui/PageHeader";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";

export function VacaturesPage() {
  return (
    <>
      <PageHeader overline="Werken bij" title="Vacatures">
        <p>Kom werken in een gezellig team midden in Amstelveen.</p>
      </PageHeader>

      <section className="section-pad">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <article className="border border-white/10 bg-mid">
              <div className="border-b border-white/10 bg-black px-6 py-4 md:px-10">
                <span className="label-bar !inline-block">{VACATURE.type}</span>
                <h2 className="mt-4 font-display text-3xl font-medium uppercase md:text-4xl">
                  {VACATURE.title}
                </h2>
              </div>

              <div className="grid gap-10 p-6 md:grid-cols-2 md:p-10">
                <div>
                  <h3 className="font-display text-sm uppercase tracking-[0.2em] text-accent">Wij bieden</h3>
                  <ul className="mt-4 space-y-3">
                    {VACATURE.offers.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted">
                        <span className="text-accent">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-sm uppercase tracking-[0.2em] text-accent">Jij hebt</h3>
                  <ul className="mt-4 space-y-3">
                    {VACATURE.requirements.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted">
                        <span className="text-accent">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-6 md:px-10">
                <p className="text-sm text-muted">
                  Stuur je CV met motivatiebrief naar{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">{CONTACT.email}</a>
                  {" "}of bel{" "}
                  <a href={`tel:${CONTACT.phoneRaw}`} className="text-accent hover:underline">{CONTACT.phone}</a>.
                </p>
                <div className="mt-6">
                  <Button href={`mailto:${CONTACT.email}?subject=Sollicitatie%20${encodeURIComponent(VACATURE.title)}`} variant="brass">
                    Solliciteer
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
