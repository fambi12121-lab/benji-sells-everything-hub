import { useState } from "react";
import { Search } from "lucide-react";
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

const cars = [
  { id: 1, name: "Toyota Camry 2020", price: "₦8,500,000", category: "under10", brand: "Toyota", img: camryImg },
  { id: 2, name: "Honda Civic 2019", price: "₦7,200,000", category: "under10", brand: "Honda", img: civicImg },
  { id: 3, name: "Toyota Corolla 2021", price: "₦9,800,000", category: "under10", brand: "Toyota", img: corollaImg },
  { id: 4, name: "Hyundai Elantra 2020", price: "₦6,500,000", category: "under10", brand: "Hyundai", img: elantraImg },
  { id: 5, name: "Mercedes-Benz E300 2022", price: "₦28,000,000", category: "above10", brand: "Mercedes", img: e300Img },
  { id: 6, name: "BMW X5 2021", price: "₦35,000,000", category: "above10", brand: "BMW", img: x5Img },
  { id: 7, name: "Range Rover Sport 2023", price: "₦65,000,000", category: "above10", brand: "Land Rover", img: rangeroverImg },
  { id: 8, name: "Lexus RX 350 2022", price: "₦22,000,000", category: "above10", brand: "Lexus", img: rx350Img },
];

const AutoSales = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "under10" | "above10">("all");

  const filtered = cars.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <Layout>
      <section className="dark-section section-padding text-center">
        <h1 className="font-heading text-6xl md:text-7xl mb-4">Auto <span className="text-primary">Sales</span></h1>
        <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8">Find your perfect ride. Quality vehicles for every budget.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search cars..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-dark-soft border-gold/20 text-secondary-foreground" />
          </div>
          <div className="flex gap-2">
            {([["all", "All"], ["under10", "Under ₦10M"], ["above10", "Above ₦10M"]] as const).map(([k, l]) => (
              <Button key={k} variant={filter === k ? "default" : "outline"} onClick={() => setFilter(k)} className={filter === k ? "gold-gradient text-primary-foreground" : "border-gold/30 text-secondary-foreground"}>
                {l}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((car) => (
              <div key={car.id} className="bg-card rounded-lg border border-border card-hover overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={car.img} alt={car.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{car.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{car.brand}</p>
                  <p className="font-heading text-2xl text-primary">{car.price}</p>
                  <Button className="w-full mt-4 gold-gradient text-primary-foreground hover:opacity-90">View Details</Button>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No cars match your search.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AutoSales;
