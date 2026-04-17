import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const linkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Auto Sales", to: "/auto-sales" },
      { label: "Digital Services", to: "/digital-services" },
      { label: "Media", to: "/media" },
      { label: "Store", to: "/store" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Auto Sales", to: "/auto-sales" },
      { label: "Web Design & Branding", to: "/digital-services" },
      { label: "Media & Marketing", to: "/media" },
      { label: "General Store", to: "/store" },
    ],
  },
];

const Footer = () => (
  <footer className="dark-section relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-28">
      {/* Top: oversized wordmark */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-6">
          <p className="eyebrow mb-6">Benji Sells Everything</p>
          <h2 className="font-heading italic text-6xl md:text-8xl leading-[0.95] text-secondary-foreground mb-8 text-balance">
            Let's build
            <br />
            something
            <br />
            <span className="text-primary">remarkable.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-secondary-foreground/90 hover:text-primary transition-colors group"
          >
            <span className="text-lg">Start a conversation</span>
            <span className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

        <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="eyebrow mb-5">{g.title}</h4>
              <div className="flex flex-col gap-3">
                {g.links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
              <a href="tel:+2348000000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={13} /> +234 800 000 0000
              </a>
              <a href="mailto:hello@benjisells.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={13} /> hello@benjisells.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={13} /> Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rule opacity-20" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-secondary-foreground/50">
        <span>&copy; {new Date().getFullYear()} Benji Sells Everything. All rights reserved.</span>
        <span className="font-heading italic text-base text-secondary-foreground/40">Lagos · Worldwide</span>
      </div>
    </div>
  </footer>
);

export default Footer;
