import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT } from "../data/content";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader overline="Contact" title="Borrel organiseren">
        <p>Wil je een borreltje organiseren? Vul het formulier in en we komen bij je terug.</p>
      </PageHeader>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-2">
            <div className="space-y-8">
              {[
                { label: "Telefoon", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
                { label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { label: "Adres", value: `${CONTACT.address}, ${CONTACT.city}`, href: undefined },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-[10px] uppercase tracking-[0.25em] text-accent">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-xl text-white hover:text-accent">{item.value}</a>
                  ) : (
                    <p className="mt-1 text-xl text-white">{item.value}</p>
                  )}
                </div>
              ))}
              <div>
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-accent">Openingstijden</p>
                <p className="mt-1 text-muted">{CONTACT.hours.weekday}</p>
                <p className="text-muted">{CONTACT.hours.weekend}</p>
                <p className="text-muted">{CONTACT.hours.sunday}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-accent/30 bg-mid p-10 text-center"
                >
                  <p className="font-display text-3xl uppercase">Bedankt</p>
                  <p className="mt-3 text-muted">We nemen zo snel mogelijk contact op.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="border border-white/10 bg-mid p-6 md:p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Naam" name="name" required className="sm:col-span-2" />
                    <Field label="E-mail" name="email" type="email" required />
                    <Field label="Telefoonnummer" name="phone" type="tel" />
                    <Field label="Datum" name="date" type="date" />
                    <Field label="Tijd" name="time" type="time" />
                    <Field label="Aantal personen" name="guests" type="number" min={1} />
                    <Field label="Gelegenheid" name="occasion" className="sm:col-span-2" />
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted">
                        Wensen / vragen / bijzonderheden
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full border border-white/10 bg-black px-4 py-3.5 text-white focus:border-accent/50 focus:outline-none"
                        placeholder="Vertel ons over je plannen..."
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="flex items-start gap-3 text-sm text-muted">
                        <input type="checkbox" name="consent" required className="mt-1 accent-accent" />
                        Akkoord op gebruik van gegevens voor contact
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 min-h-11 w-full bg-accent px-8 py-3.5 font-display text-xs uppercase tracking-[0.18em] text-black transition-colors hover:bg-accent-dim sm:w-auto"
                  >
                    Verstuur
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, className = "", ...rest
}: { label: string; name: string; type?: string; required?: boolean; className?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-white/10 bg-black px-4 py-3.5 text-white focus:border-accent/50 focus:outline-none"
        {...rest}
      />
    </div>
  );
}
