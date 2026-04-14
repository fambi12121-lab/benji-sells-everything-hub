import { Link } from "react-router-dom";
import { Car, Monitor, Camera, ShoppingBag, ArrowRight, Star, ChevronDown, Zap, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import benjiMascot from "@/assets/benji-mascot.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: Car, title: "Auto Sales", desc: "Quality cars for every budget — from affordable rides to luxury vehicles.", link: "/auto-sales", cta: "View All Cars" },
  { icon: Monitor, title: "Digital Services", desc: "Web design, branding, UI/UX, and full business websites built to impress.", link: "/digital-services", cta: "Request a Website" },
  { icon: Camera, title: "Media & Marketing", desc: "Video editing, photography, event coverage, and social media content.", link: "/media", cta: "Book Media Services" },
  { icon: ShoppingBag, title: "Benji Store", desc: "Buy and sell electronics, fashion, home items, accessories, and more.", link: "/store", cta: "Visit Store" },
];

const stats = [
  { n: "500+", l: "Happy Clients", icon: Heart },
  { n: "100+", l: "Cars Sold", icon: Car },
  { n: "50+", l: "Websites Built", icon: Monitor },
  { n: "24/7", l: "Support", icon: Shield },
];

const testimonials = [
  { name: "Adebayo O.", text: "Bought my car through Benji — smooth process, great price!", role: "Business Owner" },
  { name: "Funke A.", text: "They designed our business website and it looks incredible.", role: "Entrepreneur" },
  { name: "Chidi N.", text: "Amazing media coverage for our wedding. Highly recommend!", role: "Happy Customer" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE as unknown as [number, number, number, number] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: EASE as unknown as [number, number, number, number] },
  }),
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={heroBg} alt="" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/90" />
        </motion.div>

        <motion.div
          className="relative container mx-auto px-4 flex flex-col md:flex-row items-center gap-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                <Zap size={14} /> Your One-Stop Hub
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-7xl md:text-9xl text-primary leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Benji Sells
              <br />
              <span className="text-secondary-foreground">Everything</span>
            </motion.h1>

            <motion.p
              className="text-secondary-foreground/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Your trusted hub for cars, digital services, media, and everyday products — all under one roof.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button asChild size="lg" className="gold-gradient text-primary-foreground font-semibold px-10 py-7 text-base hover:opacity-90 shadow-lg shadow-primary/20">
                <Link to="/auto-sales">Explore Services <ArrowRight size={18} className="ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/40 text-primary font-semibold px-10 py-7 text-base hover:bg-primary/10 backdrop-blur-sm">
                <Link to="/store">Shop Now</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
            <img src={benjiMascot} alt="Benji mascot" className="relative w-64 md:w-80 drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary-foreground/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-12 z-10 px-4 md:px-8 lg:px-16">
        <motion.div
          className="container mx-auto bg-card rounded-2xl border border-border shadow-2xl shadow-primary/5 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.l} custom={i} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-3">
                  <s.icon size={22} className="text-primary-foreground" />
                </div>
                <div className="font-heading text-4xl text-primary">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} custom={0} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Our Services
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-5xl md:text-7xl mb-4">
              What We <span className="text-primary">Offer</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From wheels to websites, media to merchandise — Benji's got you covered.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((s, i) => (
              <motion.div key={s.title} custom={i} variants={scaleIn}>
                <Link
                  to={s.link}
                  className="group block bg-card rounded-xl p-8 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 h-full"
                >
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <s.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{s.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                    {s.cta} <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding dark-section overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div className="flex-1" variants={fadeUp} custom={0}>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">About Us</span>
              <h2 className="font-heading text-5xl md:text-7xl mb-6">
                Why Choose <span className="text-primary">Benji</span>?
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-4 text-lg">
                Benji Sells Everything started with a simple mission: make buying, selling, and digital services simple and accessible for everyone.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed mb-8">
                Whether you need a reliable car, a stunning website, professional media content, or just want to shop for great deals — Benji's here for you. Our friendly bear mascot represents the warmth, trust, and hustle we bring to every transaction.
              </p>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 px-8 py-6">
                <Link to="/contact">Get in Touch <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex-shrink-0 relative"
              variants={scaleIn}
              custom={1}
            >
              <div className="absolute -inset-6 rounded-full bg-primary/5 blur-2xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl gold-gradient p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-3xl bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={benjiMascot} alt="Benji" className="w-56" loading="lazy" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} custom={0} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Testimonials
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-5xl md:text-7xl mb-4">
              What People <span className="text-primary">Say</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={scaleIn}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed text-lg italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-heading text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <motion.div
          className="container mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-heading text-5xl md:text-7xl text-primary-foreground mb-4">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
            Whether you're buying a car, need a website, or want to sell your products — Benji's got your back.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground font-semibold px-10 py-7 text-base hover:bg-dark-soft shadow-xl">
              <Link to="/contact">Let's Talk <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground font-semibold px-10 py-7 text-base hover:bg-primary-foreground/10">
              <Link to="/store">Browse Store</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
