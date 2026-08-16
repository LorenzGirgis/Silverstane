import { PHOTO_ALBUMS } from "../data/content";
import { PageHeader } from "../components/ui/PageHeader";
import { ImageCard } from "../components/ui/ImageCard";
import { Stagger, StaggerItem } from "../components/ui/Reveal";

export function FotosPage() {
  return (
    <>
      <PageHeader overline="Impressie" title="Foto's">
        <p>Sfeerbeelden van het terras, feesten en openingen — meer op onze Flickr.</p>
      </PageHeader>

      <section className="bg-white section-pad text-black">
        <div className="mx-auto max-w-[1400px]">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTO_ALBUMS.map((album) => (
              <StaggerItem key={album.title}>
                <ImageCard
                  image={album.image}
                  label={album.title}
                  href={album.href}
                  external
                  action="Flickr album"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
