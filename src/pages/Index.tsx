import { Link } from "react-router-dom";
import { Car, Monitor, Camera, ShoppingBag, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import benjiMascot from "@/assets/benji-mascot.png";

const services = [
  { icon: Car, title: "Auto Sales", desc: "Quality cars for every budget — from affordable rides to luxury vehicles.", link: "/auto-sales", cta: "View All Cars" },
  { icon: Monitor, title: "Digital Services", desc: "Web design, branding, UI/UX, and full business websites built to impress.", link: "/digital-services", cta: "Request a Website" },
  { icon: Camera, title: "Media & Marketing", desc: "Video editing, photography, event coverage, and social media content.", link: "/media", cta: "Book Media Services" },
  { icon: ShoppingBag, title: "Benji Store", desc: "Buy and sell electronics, fashion, home items, accessories, and more.", link: "/store", cta: "Visit Store" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 animate-fade-in">
          <h1 className="font-heading text-6xl md:text-8xl text-primary leading-none mb-4">
            Benji Sells<br />Everything
          </h1>
          <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-lg mb-8">
            Your trusted hub for cars, digital services, media, and everyday products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="gold-gradient text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90">
              <Link to="/auto-sales">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary font-semibold px-8 py-6 text-base hover:bg-primary hover:text-primary-foreground">
              <Link to="/store">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-secondary-foreground/30 text-secondary-foreground font-semibold px-8 py-6 text-base hover:bg-secondary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 animate-scale-in">
          <img src={benjiMascot} alt="Benji mascot" className="w-64 md:w-80 drop-shadow-2xl" />
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="font-heading text-5xl md:text-6xl text-center mb-4">What We <span className="text-primary">Offer</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">From wheels to websites, media to merchandise — Benji's got you covered.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.link}
              className="group bg-card rounded-lg p-8 card-hover border border-border"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center mb-6">
                <s.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                {s.cta} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="section-padding dark-section">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-heading text-5xl md:text-6xl mb-4">About <span className="text-primary">Benji</span></h2>
          <p className="text-secondary-foreground/80 leading-relaxed mb-4">
            Benji Sells Everything started with a simple mission: make buying, selling, and digital services simple and accessible for everyone. Whether you need a reliable car, a stunning website, professional media content, or just want to shop for great deals — Benji's here for you.
          </p>
          <p className="text-secondary-foreground/80 leading-relaxed mb-6">
            Our friendly bear mascot represents the warmth, trust, and hustle we bring to every transaction. With Benji, you're not just a customer — you're family.
          </p>
          <div className="flex gap-6">
            {[{ n: "500+", l: "Happy Clients" }, { n: "100+", l: "Cars Sold" }, { n: "50+", l: "Websites Built" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-heading text-3xl text-primary">{s.n}</div>
                <div className="text-xs text-secondary-foreground/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-64 h-64 rounded-full gold-gradient p-1">
            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              <img src={benjiMascot} alt="Benji" className="w-48" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-5xl md:text-6xl mb-12">What People <span className="text-primary">Say</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Adebayo O.", text: "Bought my car through Benji — smooth process, great price!" },
            { name: "Funke A.", text: "They designed our business website and it looks incredible." },
            { name: "Chidi N.", text: "Amazing media coverage for our wedding. Highly recommend!" },
          ].map((t) => (
            <div key={t.name} className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
              <p className="font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gold-gradient text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Whether you're buying a car, need a website, or want to sell your products — Benji's got your back.</p>
        <Button asChild className="bg-secondary text-secondary-foreground font-semibold px-10 py-6 text-base hover:bg-dark-soft">
          <Link to="/contact">Let's Talk</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
