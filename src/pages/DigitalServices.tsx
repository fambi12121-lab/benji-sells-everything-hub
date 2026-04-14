import { Link } from "react-router-dom";
import { Globe, Palette, Layout as LayoutIcon, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  { icon: Globe, title: "Web Design", desc: "Beautiful, responsive websites that convert visitors into customers." },
  { icon: Palette, title: "Branding", desc: "Logo design, brand identity, and visual guidelines for your business." },
  { icon: LayoutIcon, title: "UI/UX Design", desc: "Intuitive interfaces and seamless user experiences." },
  { icon: Briefcase, title: "Business Websites", desc: "Full-featured websites with CMS, e-commerce, and analytics." },
];

const portfolio = [
  { title: "E-commerce Platform", category: "Web Design" },
  { title: "Restaurant Branding", category: "Branding" },
  { title: "Fitness App", category: "UI/UX" },
  { title: "Real Estate Website", category: "Web Design" },
  { title: "Music Label Identity", category: "Branding" },
  { title: "Logistics Dashboard", category: "UI/UX" },
];

const DigitalServices = () => (
  <Layout>
    <section className="dark-section section-padding text-center">
      <h1 className="font-heading text-6xl md:text-7xl mb-4">Digital <span className="text-primary">Services</span></h1>
      <p className="text-secondary-foreground/70 max-w-xl mx-auto">We craft stunning digital experiences that help your business stand out.</p>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card rounded-lg p-8 border border-border card-hover text-center">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                <s.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio */}
    <section className="section-padding dark-section">
      <div className="container mx-auto">
        <h2 className="font-heading text-5xl text-center mb-12">Our <span className="text-primary">Portfolio</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((p) => (
            <div key={p.title} className="group bg-dark-soft rounded-lg overflow-hidden card-hover border border-gold/10">
              <div className="h-48 bg-dark flex items-center justify-center">
                <LayoutIcon size={40} className="text-primary/30 group-hover:text-primary transition-colors" />
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-semibold uppercase">{p.category}</span>
                <h3 className="font-semibold text-secondary-foreground mt-1">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="gold-gradient text-primary-foreground font-semibold px-10 py-6 text-base hover:opacity-90">
            <Link to="/contact">Request a Website <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default DigitalServices;
