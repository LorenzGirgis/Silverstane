import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../data/content";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader overline="Hulp" title="FAQ">
        <p>Veelgestelde vragen. Andere vragen? Bel, mail of gebruik het contactformulier.</p>
      </PageHeader>

      <section className="section-pad">
        <div className="mx-auto max-w-[800px]">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="font-display text-lg uppercase tracking-wide">{item.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    className="ml-4 shrink-0 font-display text-2xl text-accent"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
