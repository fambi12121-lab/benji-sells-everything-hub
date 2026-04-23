import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useShopifyCartStore } from "@/stores/shopifyCartStore";
import benjiLogo from "@/assets/benji-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Auto", to: "/auto-sales" },
  { label: "Digital", to: "/digital-services" },
  { label: "Media", to: "/media" },
  { label: "Store", to: "/store" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const totalItems = useShopifyCartStore((s) => s.totalItems)();
  const openCart = (v: boolean) => useShopifyCartStore.getState().setIsOpen(v);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "glass shadow-soft px-5 h-14"
              : "bg-transparent px-2 h-16"
          }`}
        >
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 pl-1">
            <img
              src={benjiLogo}
              alt="Benji Sells Everything mascot"
              className={`object-contain rounded-full transition-all duration-500 ${
                scrolled
                  ? "h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                  : "h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
              }`}
            />
            <span className="font-heading italic text-xl sm:text-2xl lg:text-[1.65rem] text-foreground leading-none">
              Benji
            </span>
            <span className="hidden md:inline text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Sells Everything
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    active
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2 pr-1">
            <button
              onClick={() => openCart(true)}
              aria-label="Open cart"
              className="relative h-10 w-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden h-10 w-10 rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-3xl glass shadow-soft overflow-hidden animate-fade-in">
          {navLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 text-base font-medium border-b border-border last:border-0 transition-colors ${
                  active
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
