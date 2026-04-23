import { Link } from "react-router-dom";
import {
  Globe, Palette, Layout as LayoutIcon, Briefcase, ArrowUpRight,
  Search, ShoppingCart, Smartphone, Code2, Zap, Megaphone, Mail,
  PenTool, Rocket, Compass, Hammer, Sparkles, Check, Star, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const services = [
  { num: "01", icon: Globe, title: "Web Design", desc: "Beautiful, responsive websites that convert visitors into customers." },
  { num: "02", icon: Palette, title: "Branding", desc: "Logo design, brand identity, and visual guidelines for your business." },
  { num: "03", icon: LayoutIcon, title: "UI/UX Design", desc: "Intuitive interfaces and seamless user experiences for web and mobile." },
  { num: "04", icon: Briefcase, title: "Business Sites", desc: "Full-featured websites with CMS, e-commerce, and analytics built in." },
  { num: "05", icon: ShoppingCart, title: "E-commerce", desc: "Shopify and custom storefronts that turn browsers into loyal buyers." },
  { num: "06", icon: Smartphone, title: "Mobile Apps", desc: "iOS and Android apps designed and built for performance and delight." },
  { num: "07", icon: Search, title: "SEO & Growth", desc: "Technical SEO, content strategy, and analytics that move the needle." },
  { num: "08", icon: Code2, title: "Web Development", desc: "Modern stacks — React, Next.js, Node — engineered for scale and speed." },
];

const process = [
  { step: "01", icon: Compass, title: "Discover", desc: "We map your goals, audience, and competitors to define a clear strategy." },
  { step: "02", icon: PenTool, title: "Design", desc: "Wireframes, moodboards, and polished UI iterations — reviewed together." },
  { step: "03", icon: Hammer, title: "Build", desc: "Pixel-precise development with clean code, fast loads, and accessibility." },
  { step: "04", icon: Rocket, title: "Launch & Grow", desc: "Deploy, measure, and iterate with ongoing support and optimization." },
];

const stack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase",
  "Shopify", "WordPress", "Figma", "Framer Motion", "Vercel", "Stripe",
];

const packages = [
  {
    name: "Starter",
    price: "₦250k",
    tagline: "Launch a polished presence, fast.",
    features: [
      "5-page responsive website",
      "Custom design system",
      "Basic SEO setup",
      "Contact form & analytics",
      "2 weeks delivery",
    ],
    featured: false,
    cta: "Get started",
  },
  {
    name: "Business",
    price: "₦650k",
    tagline: "For brands ready to scale online.",
    features: [
      "Up to 12 pages + CMS",
      "Brand identity refresh",
      "Advanced SEO & schema",
      "Blog & lead capture",
      "3 rounds of revisions",
      "30 days post-launch support",
    ],
    featured: true,
    cta: "Most popular",
  },
  {
    name: "Commerce",
    price: "₦1.2M",
    tagline: "Full e-commerce, end to end.",
    features: [
      "Shopify or custom storefront",
      "Product photography styling",
      "Payment & shipping setup",
      "Email & SMS automations",
      "Conversion optimization",
      "60 days launch support",
    ],
    featured: false,
    cta: "Start selling",
  },
];

const addons = [
  { icon: Megaphone, title: "Social Media Kit", desc: "Templates, banners, and brand assets ready for every platform." },
  { icon: Mail, title: "Email Marketing", desc: "Newsletter design, automations, and campaign strategy." },
  { icon: Zap, title: "Speed Audit", desc: "Lighthouse-grade performance review with actionable fixes." },
  { icon: Sparkles, title: "Maintenance", desc: "Monthly retainers for updates, backups, and small improvements." },
];

const portfolio = [
  { title: "E-commerce Platform", category: "Web Design" },
  { title: "Restaurant Branding", category: "Branding" },
  { title: "Fitness App", category: "UI/UX" },
  { title: "Real Estate Website", category: "Web Design" },
  { title: "Music Label Identity", category: "Branding" },
  { title: "Logistics Dashboard", category: "UI/UX" },
];

const testimonials = [
  {
    quote: "Benji rebuilt our site in three weeks and our inbound leads doubled within a month. Effortless to work with.",
    name: "Adaeze O.",
    role: "Founder, Lush Interiors",
  },
  {
    quote: "The branding work felt bespoke from the first call. Our customers actually compliment the packaging now.",
    name: "Tunde A.",
    role: "CEO, Brewhaus Lagos",
  },
  {
    quote: "Clean code, fast site, and a team that genuinely cares about the result. We're already planning phase two.",
    name: "Ifeoma N.",
    role: "Marketing Lead, Stride Logistics",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites ship in 2 to 6 weeks depending on scope. We share a detailed timeline after the discovery call.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — every project includes a free support window, and we offer monthly retainers for updates, hosting, and small improvements.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Absolutely. We can build on your current identity or refresh it as part of the engagement — whichever serves the goal best.",
  },
  {
    q: "Which platforms do you build on?",
    a: "We pick the right tool for the job: React/Next.js for custom builds, Shopify for commerce, or WordPress when a CMS is essential.",
  },
  {
    q: "Do you handle hosting and domains?",
    a: "Yes. We set up hosting, domains, SSL, and email forwarding so you have one less thing to worry about.",
  },
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
        >
          <Button asChild className="gold-gradient text-primary-foreground font-medium px-8 h-12 rounded-full shadow-pop hover:opacity-90">
            <Link to="/contact">Start a project <ArrowUpRight size={18} className="ml-2" /></Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full h-12 px-8 border-border">
            <a href="#packages">See packages</a>
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 md:mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-primary text-primary" />)}
            <span className="ml-1.5">4.9 from 120+ reviews</span>
          </div>
          <span className="hidden sm:inline w-px h-4 bg-border" />
          <span>50+ websites shipped</span>
          <span className="hidden sm:inline w-px h-4 bg-border" />
          <span>Based in Lagos · serving worldwide</span>
        </motion.div>
      </div>
    </section>

    {/* Services grid */}
    <section className="section-padding bg-background pt-8 md:pt-12">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl md:rounded-3xl overflow-hidden border border-border"
        >
          {services.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={fadeUp} className="bg-card p-6 md:p-8 group hover:bg-muted/40 transition-colors">
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">— {s.num}</span>
                <s.icon size={22} className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl leading-[1.05] mb-3">
                {s.title.split(" ")[0]}
                {s.title.split(" ").slice(1).length > 0 && (
                  <span className="italic text-primary"> {s.title.split(" ").slice(1).join(" ")}</span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">How we work</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-balance">
            A clear path from
            <span className="italic text-primary"> idea to launch</span>.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {process.map((p, i) => (
            <motion.div key={p.title} custom={i} variants={fadeUp} className="relative bg-card border border-border rounded-2xl p-6 md:p-7 card-hover">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">— {p.step}</span>
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-2xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Tech stack */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Tech stack</p>
            <h2 className="font-heading text-[clamp(1.875rem,5vw,3rem)] leading-[1] text-balance">
              Modern tools, <span className="italic text-primary">crafted by hand</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            We pick the right tool for each job — fast, accessible, and easy to maintain after we hand it off.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 md:gap-3"
        >
          {stack.map((t, i) => (
            <motion.div key={t} custom={i} variants={fadeUp}>
              <Badge variant="outline" className="rounded-full px-4 py-2 text-sm border-border bg-card hover:border-primary hover:text-primary transition-colors">
                {t}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Packages */}
    <section id="packages" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">Packages</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-balance">
            Pick the path that
            <span className="italic text-primary"> fits your goals</span>.
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground">
            Transparent pricing, no surprises. Custom scopes available on request.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-3xl p-7 md:p-8 border flex flex-col ${
                p.featured
                  ? "bg-secondary text-secondary-foreground border-secondary shadow-pop"
                  : "bg-card border-border card-hover"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-3xl mb-1">{p.name}</h3>
              <p className={`text-sm mb-6 ${p.featured ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>{p.tagline}</p>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-heading text-4xl md:text-5xl">{p.price}</span>
                <span className={`text-xs ${p.featured ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>starting</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={16} className={`mt-0.5 shrink-0 ${p.featured ? "text-primary" : "text-primary"}`} />
                    <span className={p.featured ? "text-secondary-foreground/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={
                  p.featured
                    ? "gold-gradient text-primary-foreground rounded-full h-12 hover:opacity-90 w-full"
                    : "rounded-full h-12 w-full bg-foreground text-background hover:bg-foreground/90"
                }
              >
                <Link to="/contact">{p.cta} <ArrowUpRight size={16} className="ml-1.5" /></Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Add-ons */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="eyebrow mb-4">Add-ons</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-balance">
            Boost your launch with
            <span className="italic text-primary"> extras</span>.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {addons.map((a, i) => (
            <motion.div key={a.title} custom={i} variants={fadeUp} className="bg-card border border-border rounded-2xl p-6 card-hover">
              <a.icon size={24} className="text-primary mb-4" />
              <h3 className="font-heading text-xl mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
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
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="eyebrow mb-4">Kind words</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-balance">
            Trusted by founders
            <span className="italic text-primary"> who care</span>.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              custom={i}
              variants={fadeUp}
              className="bg-card border border-border rounded-2xl p-7 card-hover relative"
            >
              <Quote size={28} className="text-primary/30 mb-4" />
              <blockquote className="text-base text-foreground/90 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <div className="font-heading text-lg">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-balance">
            Questions, <span className="italic text-primary">answered</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-5 md:px-6"
            >
              <AccordionTrigger className="text-left font-heading text-base md:text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding dark-section grain">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="eyebrow mb-4">Ready when you are</p>
        <h2 className="font-heading text-[clamp(2.25rem,8vw,5rem)] text-secondary-foreground leading-[0.95] text-balance mb-6">
          Let's build something
          <span className="italic text-primary"> remarkable</span>.
        </h2>
        <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8">
          Tell us about your project — we'll reply within one business day with next steps and a clear plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <Button asChild className="gold-gradient text-primary-foreground font-medium px-8 h-12 sm:h-14 rounded-full shadow-pop hover:opacity-90">
            <Link to="/contact">Request a website <ArrowUpRight size={18} className="ml-2" /></Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full h-12 sm:h-14 px-8 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
            <a href="#packages">View packages</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default DigitalServices;
