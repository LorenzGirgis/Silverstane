import { NEWS_ITEMS } from "../data/content";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";

export function NieuwsPage() {
  return (
    <>
      <PageHeader overline="Actueel" title="Nieuws">
        <p>Het laatste nieuws van Café Thijs — proeverijen, updates en meer.</p>
      </PageHeader>

      <section className="section-pad">
        <div className="mx-auto max-w-[1400px]">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <article className="group overflow-hidden border border-white/10 bg-mid">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-0 top-0 bg-black px-3 py-1.5 font-display text-[10px] uppercase tracking-wider text-accent">
                      {item.date}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h2 className="font-display text-xl font-medium uppercase tracking-wide">{item.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.excerpt}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 border-t border-white/10 pt-10 text-center">
            <p className="text-sm text-muted">
              Meer nieuws volgt binnenkort. Volg ons op social media of kom langs in de Dorpsstraat.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
