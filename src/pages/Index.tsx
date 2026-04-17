import { Link } from "react-router-dom";
import { Car, Monitor, Camera, ShoppingBag, ArrowRight, Star, ChevronDown, Heart, Shield, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import benjiMascot from "@/assets/benji-mascot.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { num: "01", icon: Car, title: "Auto Sales", desc: "Quality cars for every budget — from affordable rides to luxury vehicles.", link: "/auto-sales", cta: "View all cars" },
  { num: "02", icon: Monitor, title: "Digital Services", desc: "Web design, branding, UI/UX, and full business websites built to impress.", link: "/digital-services", cta: "Request a website" },
  { num: "03", icon: Camera, title: "Media & Marketing", desc: "Video editing, photography, event coverage, and social media content.", link: "/media", cta: "Book media services" },
  { num: "04", icon: ShoppingBag, title: "Benji Store", desc: "Buy and sell electronics, fashion, home items, accessories, and more.", link: "/store", cta: "Visit the store" },
];

const stats = [
  { n: "500+", l: "Happy clients", icon: Heart },
  { n: "100+", l: "Cars sold", icon: Car },
  { n: "50+", l: "Sites built", icon: Monitor },
  { n: "24/7", l: "Support", icon: Shield },
];

const testimonials = [
  { name: "Adebayo O.", text: "Bought my car through Benji — smooth process, great price.", role: "Business Owner" },
  { name: "Funke A.", text: "They designed our business website and it looks incredible.", role: "Entrepreneur" },
  { name: "Chidi N.", text: "Amazing media coverage for our wedding. Highly recommend.", role: "Happy Customer" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE as unknown as [number, number, number, number] },
  }),
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <Layout>
      {/* ─────────── Hero — editorial split ─────────── */}
      <section ref={heroRef} className="relative min-h-[100svh] pt-32 pb-20 overflow-hidden bg-background">
        {/* Background flourish */}
        <motion.div
          style={{ y: markY }}
          aria-hidden
          className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          style={{ y: heroY }}
          aria-hidden
          className="absolute bottom-0 -left-40 w-[520px] h-[520px] rounded-full bg-primary-glow/15 blur-3xl"
          // primary-glow not in tailwind; fallback handled via class below
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE as unknown as [number, number, number, number] }}
            className="eyebrow mb-8"
          >
            ◍ Your one-stop hub — Lagos, Nigeria
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial="hidden"
              animate="visible"
              className="lg:col-span-8"
            >
              <motion.h1
                custom={0}
                variants={fadeUp}
                className="font-heading text-[14vw] md:text-[10vw] lg:text-[9vw] leading-[0.88] text-foreground text-balance"
              >
                Benji sells
                <br />
                <span className="italic text-primary">everything</span>
                <span className="text-primary">.</span>
              </motion.h1>

              <motion.p
                custom={1}
                variants={fadeUp}
                className="mt-10 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                A trusted hub for cars, digital services, media, and everyday products —
                crafted with care, delivered with conviction.
              </motion.p>

              <motion.div custom={2} variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="gold-gradient text-primary-foreground font-medium px-8 h-14 rounded-full shadow-pop hover:opacity-90">
                  <Link to="/auto-sales">Explore services <ArrowRight size={18} className="ml-2" /></Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-foreground hover:bg-muted h-14 rounded-full px-6">
                  <Link to="/store">
                    <span className="font-heading italic text-lg mr-2">Shop</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE as unknown as [number, number, number, number] }}
              className="lg:col-span-4 relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative w-64 md:w-80 aspect-square rounded-[2.5rem] overflow-hidden ink-gradient grain p-8 flex items-end justify-center shadow-pop">
                  <img src={benjiMascot} alt="Benji mascot" className="w-full drop-shadow-2xl" />
                </div>
                <span className="absolute -top-3 -left-3 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium shadow-soft">
                  ★ 4.9 · 500+ reviews
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </section>

      {/* ─────────── Stats ─────────── */}
      <section className="px-4 md:px-8 lg:px-16 -mt-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="container mx-auto bg-card border border-border rounded-3xl shadow-soft p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-border">
            {stats.map((s, i) => (
              <motion.div key={s.l} custom={i} variants={fadeUp} className="md:px-6 first:pt-0 pt-6 md:pt-0">
                <s.icon size={18} className="text-primary mb-3" />
                <div className="font-heading italic text-5xl md:text-6xl text-foreground leading-none">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────── Services — editorial cards ─────────── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div className="max-w-2xl">
              <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">What we do</motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-5xl md:text-7xl leading-[0.95] text-balance">
                Four practices.
                <br />
                <span className="italic text-primary">One trusted name.</span>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-sm">
              From wheels to websites, media to merchandise — Benji's got you covered with the same level of care across every line.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border"
          >
            {services.map((s, i) => (
              <motion.div key={s.title} custom={i} variants={fadeUp}>
                <Link
                  to={s.link}
                  className="group block bg-card p-8 md:p-10 h-full transition-colors hover:bg-muted/40"
                >
                  <div className="flex items-start justify-between mb-10">
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">— {s.num}</span>
                    <s.icon size={22} className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading text-4xl md:text-5xl leading-[1.05] mb-4 text-balance">
                    {s.title.split(" ")[0]}
                    {s.title.split(" ")[1] && <span className="italic text-primary"> {s.title.split(" ").slice(1).join(" ")}</span>}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {s.cta}
                    <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── About ─────────── */}
      <section className="section-padding dark-section relative overflow-hidden grain">
        <div className="container mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-7">
              <p className="eyebrow mb-5">About Benji</p>
              <h2 className="font-heading text-5xl md:text-7xl text-secondary-foreground leading-[0.95] mb-8 text-balance">
                Built on trust,
                <br />
                <span className="italic text-primary">delivered with hustle.</span>
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-5 text-lg max-w-xl">
                Benji Sells Everything started with a simple mission: make buying, selling, and digital services simple and accessible for everyone in Lagos and beyond.
              </p>
              <p className="text-secondary-foreground/60 leading-relaxed mb-10 max-w-xl">
                Whether you need a reliable car, a stunning website, professional media content, or just want to shop for great deals — our friendly bear represents the warmth, trust, and hustle we bring to every transaction.
              </p>
              <Button asChild variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 h-12 rounded-full px-7">
                <Link to="/contact">Get in touch <ArrowUpRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="lg:col-span-5 relative">
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-dark p-10 flex items-end justify-center">
                <img src={benjiMascot} alt="Benji" className="w-full drop-shadow-2xl" loading="lazy" />
                <span className="absolute top-6 left-6 font-heading italic text-secondary-foreground text-2xl">
                  Est. <span className="text-primary">2024</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── Testimonials ─────────── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">Kind words</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-5xl md:text-7xl text-balance">
              Loved by <span className="italic text-primary">hundreds</span>.
            </motion.h2>
          </motion.div>

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
                className="bg-card border border-border rounded-3xl p-8 card-hover"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="font-heading italic text-2xl leading-snug text-foreground mb-8 text-balance">
                  "{t.text}"
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-heading text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="px-4 md:px-8 lg:px-16 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="container mx-auto relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] gold-gradient p-12 md:p-20 text-center grain"
        >
          <motion.p variants={fadeUp} custom={0} className="text-primary-foreground/80 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            Ready when you are
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-5xl md:text-8xl text-primary-foreground leading-[0.95] mb-8 text-balance">
            Let's make
            <br />
            <span className="italic">it happen.</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full h-14 px-8 font-medium">
              <Link to="/contact">Start a conversation <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full h-14 px-7">
              <Link to="/store">Browse the store</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
