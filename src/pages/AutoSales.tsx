import { useState } from "react";
import { Link } from "react-router-dom";
import CarDetailModal from "@/components/CarDetailModal";
import { Search, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

import camryImg from "@/assets/cars/camry.jpg";
import civicImg from "@/assets/cars/civic.jpg";
import corollaImg from "@/assets/cars/corolla.jpg";
import elantraImg from "@/assets/cars/elantra.jpg";
import e300Img from "@/assets/cars/e300.jpg";
import x5Img from "@/assets/cars/x5.jpg";
import rangeroverImg from "@/assets/cars/rangerover.jpg";
import rx350Img from "@/assets/cars/rx350.jpg";
import kiarioImg from "@/assets/cars/kiario.jpg";
import almeraImg from "@/assets/cars/almera.jpg";
import focusImg from "@/assets/cars/focus.jpg";
import cayenneImg from "@/assets/cars/cayenne.jpg";
import pradoImg from "@/assets/cars/prado.jpg";
import q7Img from "@/assets/cars/q7.jpg";

type Category = "under5" | "mid" | "above10";

const cars: { id: number; name: string; price: string; category: Category; brand: string; img: string }[] = [
  // Under ₦5M
  { id: 1, name: "Kia Rio 2017", price: "₦3,200,000", category: "under5", brand: "Kia", img: kiarioImg },
  { id: 2, name: "Nissan Almera 2018", price: "₦4,100,000", category: "under5", brand: "Nissan", img: almeraImg },
  { id: 3, name: "Ford Focus 2016", price: "₦4,800,000", category: "under5", brand: "Ford", img: focusImg },
  // ₦5M – ₦10M (kept for context)
  { id: 4, name: "Toyota Camry 2020", price: "₦8,500,000", category: "mid", brand: "Toyota", img: camryImg },
  { id: 5, name: "Honda Civic 2019", price: "₦7,200,000", category: "mid", brand: "Honda", img: civicImg },
  { id: 6, name: "Toyota Corolla 2021", price: "₦9,800,000", category: "mid", brand: "Toyota", img: corollaImg },
  { id: 7, name: "Hyundai Elantra 2020", price: "₦6,500,000", category: "mid", brand: "Hyundai", img: elantraImg },
  // Above ₦10M
  { id: 8, name: "Mercedes-Benz E300 2022", price: "₦28,000,000", category: "above10", brand: "Mercedes", img: e300Img },
  { id: 9, name: "BMW X5 2021", price: "₦35,000,000", category: "above10", brand: "BMW", img: x5Img },
  { id: 10, name: "Range Rover Sport 2023", price: "₦65,000,000", category: "above10", brand: "Land Rover", img: rangeroverImg },
  { id: 11, name: "Lexus RX 350 2022", price: "₦22,000,000", category: "above10", brand: "Lexus", img: rx350Img },
  { id: 12, name: "Porsche Cayenne 2022", price: "₦55,000,000", category: "above10", brand: "Porsche", img: cayenneImg },
  { id: 13, name: "Toyota Land Cruiser Prado 2023", price: "₦48,000,000", category: "above10", brand: "Toyota", img: pradoImg },
  { id: 14, name: "Audi Q7 2022", price: "₦40,000,000", category: "above10", brand: "Audi", img: q7Img },
];

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
              <article key={car.id} className="group bg-card rounded-2xl border border-border overflow-hidden card-hover">
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
                    <Button size="sm" variant="ghost" className="rounded-full text-foreground hover:text-primary hover:bg-primary/10">
                      Details →
                    </Button>
                  </div>
                </div>
              </article>
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
