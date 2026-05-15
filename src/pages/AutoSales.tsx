import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { cars, type Category } from "@/data/cars";

const filters: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "above10", label: "Above ₦10M" },
  { key: "mid", label: "₦5M – ₦10M" },
  { key: "under5", label: "Under ₦5M" },
];

const AutoSales = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | Category>("all");

  const filtered = cars.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-background">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="container mx-auto relative">
          <p className="eyebrow mb-4 md:mb-6">◐ Auto sales</p>
          <h1 className="font-heading text-[clamp(2.75rem,11vw,8rem)] leading-[0.92] text-balance max-w-5xl">
            Find your <span className="italic text-primary">perfect</span>
            <br />
            ride.
          </h1>
          <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Quality vehicles for every budget — vetted, photographed, and ready to drive home today.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 max-w-3xl">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by model, brand…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11 h-12 rounded-full bg-card border-border"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full sm:w-auto">
              {filters.map((f) => (
                <Button
                  key={f.key}
                  variant={filter === f.key ? "default" : "outline"}
                  onClick={() => setFilter(f.key)}
                  className={`h-12 sm:h-14 rounded-full px-5 w-full sm:w-auto justify-center ${filter === f.key ? "gold-gradient text-primary-foreground border-0" : "bg-card"}`}
                >
                  {f.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground">
              <span className="font-mono text-foreground">{filtered.length.toString().padStart(2, "0")}</span> vehicles available
            </p>
            <p className="eyebrow">Listings</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((car) => (
              <Link
                key={car.id}
                to={`/auto-sales/${car.slug}`}
                className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={car.img}
                    alt={car.name}
                    loading="lazy"
                    width={768}
                    height={576}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{car.brand}</p>
                  <h3 className="font-heading text-2xl leading-tight mb-3">{car.name}</h3>
                  <div className="flex items-end justify-between">
                    <p className="font-heading italic text-3xl text-primary">{car.price}</p>
                    <span className="text-sm text-foreground group-hover:text-primary inline-flex items-center gap-1">
                      Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16 font-heading italic text-2xl">No cars match your search.</p>
          )}

          {/* Page CTAs */}
          <div className="mt-14 md:mt-20 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button
              onClick={() => { setFilter("all"); setSearch(""); }}
              size="lg"
              className="gold-gradient text-primary-foreground font-medium px-7 sm:px-8 h-12 sm:h-14 rounded-full shadow-pop hover:opacity-90 w-full sm:w-auto justify-center"
            >
              View all vehicles <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 sm:h-14 rounded-full px-7 w-full sm:w-auto justify-center bg-card">
              <Link to="/contact">Explore financing <ArrowUpRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AutoSales;
