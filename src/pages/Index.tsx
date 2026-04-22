import { Link } from "react-router-dom";
import {
  Car, Monitor, Camera, ShoppingBag, ArrowRight, Star, ChevronDown, Heart, Shield,
  ArrowUpRight, Sparkles, MessageSquare, PenTool, Rocket, Plus, Mail, Phone, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import benjiMascot from "@/assets/benji-mascot.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import smartwatch from "@/assets/products/smartwatch-elite.jpg";
import headphones from "@/assets/products/headphones.jpg";
import sneakers from "@/assets/products/sneakers.jpg";
import sunglasses from "@/assets/products/sunglasses.jpg";
import speaker from "@/assets/products/speaker.jpg";
import handbag from "@/assets/products/handbag.jpg";

import camry from "@/assets/cars/camry.jpg";
import rangerover from "@/assets/cars/rangerover.jpg";
import rx350 from "@/assets/cars/rx350.jpg";

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

const featuredProducts = [
  { name: "Elite Smartwatch", price: "₦85,000", img: smartwatch, tag: "Bestseller" },
  { name: "Studio Headphones", price: "₦62,000", img: headphones, tag: "New" },
  { name: "Urban Sneakers", price: "₦45,000", img: sneakers, tag: "Hot" },
  { name: "Classic Sunglasses", price: "₦18,000", img: sunglasses, tag: "Trending" },
  { name: "Bluetooth Speaker", price: "₦35,000", img: speaker, tag: "Limited" },
  { name: "Leather Handbag", price: "₦55,000", img: handbag, tag: "Premium" },
];

const featuredCars = [
  { name: "Toyota Camry", year: "2020", price: "₦18.5M", img: camry },
  { name: "Range Rover Sport", year: "2021", price: "₦65M", img: rangerover },
  { name: "Lexus RX 350", year: "2022", price: "₦42M", img: rx350 },
];

const process = [
  { step: "01", icon: MessageSquare, title: "Reach out", desc: "Tell us what you need — a car, a website, media, or a product." },
  { step: "02", icon: PenTool, title: "We plan", desc: "We craft a clear quote and roadmap tailored to your goals." },
  { step: "03", icon: Sparkles, title: "We deliver", desc: "Quality work, on time, with our friendly Benji warmth." },
  { step: "04", icon: Rocket, title: "You grow", desc: "Ongoing support so the result keeps paying off." },
];

const testimonials = [
  { name: "Adebayo O.", text: "Bought my car through Benji — smooth process, great price.", role: "Business Owner" },
  { name: "Funke A.", text: "They designed our business website and it looks incredible.", role: "Entrepreneur" },
  { name: "Chidi N.", text: "Amazing media coverage for our wedding. Highly recommend.", role: "Happy Customer" },
];

const faqs = [
  { q: "Do you deliver outside Lagos?", a: "Yes — we deliver nationwide across Nigeria. Delivery times and fees depend on your location and the item." },
  { q: "Can I finance a car purchase?", a: "We work with trusted partners to offer flexible financing on select vehicles. Reach out and we'll walk you through the options." },
  { q: "How long does a website project take?", a: "Most business websites are completed within 2–4 weeks, depending on scope. Larger custom builds take longer." },
  { q: "Do you cover events outside Lagos?", a: "Absolutely. Our media team travels for weddings, corporate events, and shoots anywhere in Nigeria." },
  { q: "What payment methods do you accept?", a: "Bank transfer, card payments, and select crypto options. Everything is secure and receipted." },
];

const tickerWords = [
  "Cars", "Websites", "Branding", "Photography", "Gadgets", "Fashion",
  "Video", "Home goods", "UI/UX", "Events", "Accessories", "Hustle",
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
      {/* ─────────── Hero ─────────── */}
      <section ref={heroRef} className="relative min-h-[100svh] pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-background">
        <motion.div
          style={{ y: markY }}
          aria-hidden
          className="absolute -top-32 -right-32 w-[420px] h-[420px] md:w-[680px] md:h-[680px] rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          style={{ y: heroY, background: "hsl(var(--primary-glow) / 0.18)" }}
          aria-hidden
          className="absolute bottom-0 -left-32 w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE as unknown as [number, number, number, number] }}
            className="eyebrow mb-6 md:mb-8"
          >
            ◍ Your one-stop hub — Lagos, Nigeria
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center lg:items-end">
            <motion.div initial="hidden" animate="visible" className="lg:col-span-8 order-2 lg:order-1">
              <motion.h1
                custom={0}
                variants={fadeUp}
                className="font-heading text-[clamp(3rem,12vw,8.5rem)] lg:text-[9vw] leading-[0.9] text-foreground text-balance"
              >
                Benji sells
                <br />
                <span className="italic text-primary">everything</span>
                <span className="text-primary">.</span>
              </motion.h1>

              <motion.p
                custom={1}
                variants={fadeUp}
                className="drop-cap mt-8 md:mt-10 max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                A trusted hub for cars, digital services, media, and everyday products —
                crafted with care, delivered with conviction.
              </motion.p>

              <motion.div custom={2} variants={fadeUp} className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="gold-gradient text-primary-foreground font-medium px-7 sm:px-8 h-12 sm:h-14 rounded-full shadow-pop hover:opacity-90 w-full sm:w-auto justify-center">
                  <Link to="/auto-sales">Explore services <ArrowRight size={18} className="ml-2" /></Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-foreground hover:bg-muted h-12 sm:h-14 rounded-full px-6 w-full sm:w-auto justify-center">
                  <Link to="/store">
                    <span className="font-heading italic text-lg mr-2">Shop</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </Button>
              </motion.div>

              {/* Quick trust row */}
              <motion.div custom={3} variants={fadeUp} className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Shield size={14} className="text-primary" /> Verified sellers</div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-2"><Heart size={14} className="text-primary" /> 500+ happy clients</div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-2"><Star size={14} className="text-primary fill-primary" /> 4.9 average rating</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE as unknown as [number, number, number, number] }}
              className="lg:col-span-4 relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-8 md:-inset-10 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative w-52 sm:w-64 md:w-80 aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden ink-gradient grain p-6 md:p-8 flex items-end justify-center shadow-pop">
                  <img src={benjiMascot} alt="Benji mascot" className="w-full drop-shadow-2xl" />
                </div>
                <span className="absolute -top-3 -left-3 bg-card border border-border rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium shadow-soft whitespace-nowrap">
                  ★ 4.9 · 500+ reviews
                </span>
                <span className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold shadow-pop whitespace-nowrap">
                  Free delivery in Lagos
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

      {/* ─────────── Marquee ticker ─────────── */}
      <section aria-hidden className="border-y border-border bg-secondary text-secondary-foreground overflow-hidden">
        <div className="flex gap-10 py-5 sm:py-6 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => (
            <span key={i} className="font-heading italic text-2xl sm:text-3xl md:text-4xl flex items-center gap-10">
              {w}
              <Plus size={18} className="text-primary opacity-70" />
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* ─────────── Stats ─────────── */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-16 mt-12 md:mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="container mx-auto bg-card border border-border rounded-2xl md:rounded-3xl shadow-soft p-6 sm:p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-10 md:divide-x divide-border">
            {stats.map((s, i) => (
              <motion.div key={s.l} custom={i} variants={fadeUp} className="md:px-6">
                <s.icon size={18} className="text-primary mb-2 md:mb-3" />
                <div className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-foreground leading-none">{s.n}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────── Services ─────────── */}
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
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-balance">
                Four practices.
                <br />
                <span className="italic text-primary">One trusted name.</span>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-sm text-sm sm:text-base">
              From wheels to websites, media to merchandise — Benji's got you covered with the same level of care across every line.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl md:rounded-3xl overflow-hidden border border-border"
          >
            {services.map((s, i) => (
              <motion.div key={s.title} custom={i} variants={fadeUp}>
                <Link
                  to={s.link}
                  className="group block bg-card p-6 sm:p-8 md:p-10 h-full transition-colors hover:bg-muted/40"
                >
                  <div className="flex items-start justify-between mb-8 md:mb-10">
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">— {s.num}</span>
                    <s.icon size={22} className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.05] mb-3 md:mb-4 text-balance">
                    {s.title.split(" ")[0]}
                    {s.title.split(" ")[1] && <span className="italic text-primary"> {s.title.split(" ").slice(1).join(" ")}</span>}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-md text-sm sm:text-base">{s.desc}</p>
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

      {/* ─────────── Featured products ─────────── */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
          >
            <div className="max-w-2xl">
              <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">Featured drops</motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-balance">
                Things people <span className="italic text-primary">love</span>.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Button asChild variant="outline" className="rounded-full h-12 px-6">
                <Link to="/store">Browse the store <ArrowUpRight size={16} className="ml-1" /></Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {featuredProducts.map((p, i) => (
              <motion.article
                key={p.name}
                custom={i}
                variants={fadeUp}
                className="group bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden card-hover"
              >
                <Link to="/store" className="block">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-card text-foreground text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border border-border">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-heading text-base sm:text-lg leading-tight truncate">{p.name}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{p.price}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all shrink-0" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── Featured cars ─────────── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
          >
            <div className="max-w-2xl">
              <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">From the lot</motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-balance">
                Drive home <span className="italic text-primary">today</span>.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Button asChild variant="outline" className="rounded-full h-12 px-6">
                <Link to="/auto-sales">View all cars <ArrowUpRight size={16} className="ml-1" /></Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          >
            {featuredCars.map((c, i) => (
              <motion.article
                key={c.name}
                custom={i}
                variants={fadeUp}
                className="group bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden card-hover"
              >
                <Link to="/auto-sales" className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                      {c.year}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-heading text-xl sm:text-2xl leading-tight truncate">{c.name}</h3>
                      <p className="text-primary font-medium mt-1">{c.price}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all shrink-0" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── Process ─────────── */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14 md:mb-20"
          >
            <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">How it works</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl sm:text-5xl md:text-7xl text-balance">
              Simple, honest, <span className="italic text-primary">fast</span>.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                variants={fadeUp}
                className="relative bg-card border border-border rounded-2xl md:rounded-3xl p-6 sm:p-8 card-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading italic text-5xl sm:text-6xl text-primary/20">{p.step}</span>
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
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
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-7 order-2 lg:order-1">
              <p className="eyebrow mb-4 md:mb-5">About Benji</p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl text-secondary-foreground leading-[0.95] mb-6 md:mb-8 text-balance">
                Built on trust,
                <br />
                <span className="italic text-primary">delivered with hustle.</span>
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-4 md:mb-5 text-base md:text-lg max-w-xl">
                Benji Sells Everything started with a simple mission: make buying, selling, and digital services simple and accessible for everyone in Lagos and beyond.
              </p>
              <p className="text-secondary-foreground/60 leading-relaxed mb-8 md:mb-10 max-w-xl text-sm sm:text-base">
                Whether you need a reliable car, a stunning website, professional media content, or just want to shop for great deals — our friendly bear represents the warmth, trust, and hustle we bring to every transaction.
              </p>
              <Button asChild variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 h-12 sm:h-14 rounded-full px-7 w-full sm:w-auto justify-center">
                <Link to="/contact">Get in touch <ArrowUpRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="lg:col-span-5 relative order-1 lg:order-2 max-w-sm mx-auto lg:max-w-none w-full">
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden glass-dark p-6 sm:p-8 md:p-10 flex items-end justify-center">
                <img src={benjiMascot} alt="Benji" className="w-full drop-shadow-2xl" loading="lazy" />
                <span className="absolute top-5 left-5 md:top-6 md:left-6 font-heading italic text-secondary-foreground text-xl md:text-2xl">
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
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl sm:text-5xl md:text-7xl text-balance">
              Loved by <span className="italic text-primary">hundreds</span>.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                custom={i}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl md:rounded-3xl p-6 sm:p-8 card-hover"
              >
                <div className="flex gap-0.5 mb-5 md:mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="font-heading italic text-xl sm:text-2xl leading-snug text-foreground mb-6 md:mb-8 text-balance">
                  "{t.text}"
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5 md:pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-heading text-lg shrink-0">
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">Questions</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6 text-balance">
              Good to <span className="italic text-primary">know</span>.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-md text-sm sm:text-base mb-8">
              Can't find what you're after? Our team is one message away — happy to help you decide.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="rounded-full h-12 px-6">
                <Link to="/contact">Talk to us <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="font-heading text-lg sm:text-xl text-left hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── Newsletter ─────────── */}
      <section className="section-padding bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-border pt-12 md:pt-16">
            <motion.div variants={fadeUp} custom={0} className="md:col-span-7">
              <p className="eyebrow mb-4">Stay in the loop</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl leading-[0.95] text-balance">
                New drops, fresh cars, <span className="italic text-primary">first dibs</span>.
              </h2>
            </motion.div>
            <motion.form
              variants={fadeUp}
              custom={1}
              onSubmit={(e) => e.preventDefault()}
              className="md:col-span-5 flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-12 rounded-full px-5 bg-card"
              />
              <Button type="submit" className="rounded-full h-12 px-6 shrink-0">
                Subscribe <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.form>
          </div>

          {/* Contact strip */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-12 md:mt-16"
          >
            {[
              { icon: Mail, label: "Email us", value: "hello@benji.ng" },
              { icon: Phone, label: "Call us", value: "+234 800 000 0000" },
              { icon: MapPin, label: "Visit us", value: "Lagos, Nigeria" },
            ].map((c, i) => (
              <div key={c.label} className="bg-card border border-border rounded-2xl p-5 sm:p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="font-medium truncate">{c.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="container mx-auto relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] gold-gradient p-8 sm:p-12 md:p-20 text-center grain"
        >
          <motion.p variants={fadeUp} custom={0} className="text-primary-foreground/80 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold mb-4 md:mb-6">
            Ready when you are
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl sm:text-5xl md:text-8xl text-primary-foreground leading-[0.95] mb-6 md:mb-8 text-balance">
            Let's make
            <br />
            <span className="italic">it happen.</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center items-stretch sm:items-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full h-12 sm:h-14 px-7 sm:px-8 font-medium w-full sm:w-auto justify-center">
              <Link to="/contact">Start a conversation <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full h-12 sm:h-14 px-7 w-full sm:w-auto justify-center">
              <Link to="/store">Browse the store</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
