import { Link } from "react-router-dom";
import { Globe, Palette, Layout as LayoutIcon, Briefcase, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const services = [
  { num: "01", icon: Globe, title: "Web Design", desc: "Beautiful, responsive websites that convert visitors into customers." },
  { num: "02", icon: Palette, title: "Branding", desc: "Logo design, brand identity, and visual guidelines for your business." },
  { num: "03", icon: LayoutIcon, title: "UI/UX Design", desc: "Intuitive interfaces and seamless user experiences." },
  { num: "04", icon: Briefcase, title: "Business Sites", desc: "Full-featured websites with CMS, e-commerce, and analytics." },
];

const portfolio = [
  { title: "E-commerce Platform", category: "Web Design" },
  { title: "Restaurant Branding", category: "Branding" },
  { title: "Fitness App", category: "UI/UX" },
  { title: "Real Estate Website", category: "Web Design" },
  { title: "Music Label Identity", category: "Branding" },
  { title: "Logistics Dashboard", category: "UI/UX" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE as unknown as [number, number, number, number] },
  }),
};

const DigitalServices = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-background">
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container mx-auto relative">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow mb-4 md:mb-6">
          ◐ Digital practice
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE as unknown as [number, number, number, number] }}
          className="font-heading text-[clamp(2.75rem,11vw,8rem)] leading-[0.92] text-balance max-w-5xl"
        >
          Stunning <span className="italic text-primary">digital</span>
          <br />
          experiences.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE as unknown as [number, number, number, number] }}
          className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          We craft websites, brands, and interfaces that help businesses stand out and convert. Considered, fast, and beautifully made.
        </motion.p>
      </div>
    </section>

    {/* Services grid */}
    <section className="section-padding bg-background pt-8 md:pt-12">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl md:rounded-3xl overflow-hidden border border-border"
        >
          {services.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={fadeUp} className="bg-card p-6 md:p-10">
              <div className="flex items-start justify-between mb-8 md:mb-10">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">— {s.num}</span>
                <s.icon size={22} className="text-primary opacity-70" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl leading-[1.05] mb-3 md:mb-4">
                {s.title.split(" ")[0]}
                {s.title.split(" ").slice(1).length > 0 && (
                  <span className="italic text-primary"> {s.title.split(" ").slice(1).join(" ")}</span>
                )}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Portfolio */}
    <section className="section-padding dark-section grain">
      <div className="container mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">Selected work</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,8vw,5rem)] text-secondary-foreground leading-[0.95] text-balance">
              Our recent
              <br />
              <span className="italic text-primary">portfolio</span>.
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {portfolio.map((p, i) => (
            <motion.div key={p.title} custom={i} variants={fadeUp}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-dark cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                  <LayoutIcon size={56} className="text-primary" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1.5">{p.category}</p>
                    <h3 className="font-heading text-2xl text-secondary-foreground">{p.title}</h3>
                  </div>
                  <ArrowUpRight size={18} className="text-secondary-foreground/70 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 md:mt-16">
          <Button asChild className="gold-gradient text-primary-foreground font-medium px-8 h-14 rounded-full shadow-pop hover:opacity-90 w-full sm:w-auto">
            <Link to="/contact">Request a website <ArrowUpRight size={18} className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default DigitalServices;
