import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-3xl text-primary mb-4">BENJI SELLS EVERYTHING</h3>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            Your trusted hub for cars, digital services, media, and everyday products.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-xl text-primary mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Auto Sales", "Digital Services", "Media", "Store", "Contact"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-xl text-primary mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
            <span>Auto Sales</span>
            <span>Web Design & Branding</span>
            <span>Media & Marketing</span>
            <span>General Store</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-xl text-primary mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <span className="flex items-center gap-2"><Phone size={14} /> +234 800 000 0000</span>
            <span className="flex items-center gap-2"><Mail size={14} /> hello@benjisells.com</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Lagos, Nigeria</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 mt-12 pt-6 text-center text-xs text-secondary-foreground/50">
        &copy; {new Date().getFullYear()} Benji Sells Everything. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
