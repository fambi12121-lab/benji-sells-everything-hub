import { useState } from "react";
import { ShoppingCart, Smartphone, Shirt, Home, Watch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const categories = [
  { key: "all", label: "All", icon: Sparkles },
  { key: "electronics", label: "Electronics", icon: Smartphone },
  { key: "fashion", label: "Fashion", icon: Shirt },
  { key: "home", label: "Home Items", icon: Home },
  { key: "accessories", label: "Accessories", icon: Watch },
];

const products = [
  { id: 1, name: "Wireless Earbuds", price: "₦15,000", category: "electronics" },
  { id: 2, name: "Smart Watch", price: "₦25,000", category: "electronics" },
  { id: 3, name: "Bluetooth Speaker", price: "₦12,000", category: "electronics" },
  { id: 4, name: "Men's Polo Shirt", price: "₦8,000", category: "fashion" },
  { id: 5, name: "Women's Handbag", price: "₦18,000", category: "fashion" },
  { id: 6, name: "Sneakers", price: "₦22,000", category: "fashion" },
  { id: 7, name: "LED Desk Lamp", price: "₦6,500", category: "home" },
  { id: 8, name: "Throw Pillows (set)", price: "₦9,000", category: "home" },
  { id: 9, name: "Leather Wallet", price: "₦5,000", category: "accessories" },
  { id: 10, name: "Sunglasses", price: "₦7,500", category: "accessories" },
  { id: 11, name: "Phone Case", price: "₦3,000", category: "accessories" },
  { id: 12, name: "Power Bank 20000mAh", price: "₦14,000", category: "electronics" },
];

const Store = () => {
  const [cat, setCat] = useState("all");
  const filtered = cat === "all" ? products : products.filter((p) => p.category === cat);

  return (
    <Layout>
      <section className="dark-section section-padding text-center">
        <h1 className="font-heading text-6xl md:text-7xl mb-4">Buy & Sell <span className="text-primary">Anything</span></h1>
        <p className="text-secondary-foreground/70 max-w-xl mx-auto">Electronics, fashion, home items, accessories, and random deals — all in one place.</p>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((c) => (
              <Button key={c.key} variant={cat === c.key ? "default" : "outline"} onClick={() => setCat(c.key)} className={cat === c.key ? "gold-gradient text-primary-foreground" : ""}>
                <c.icon size={16} className="mr-2" /> {c.label}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="bg-card rounded-lg border border-border card-hover overflow-hidden">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <ShoppingCart size={36} className="text-muted-foreground/30" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="font-heading text-2xl text-primary mb-4">{p.price}</p>
                  <Button className="w-full gold-gradient text-primary-foreground hover:opacity-90">
                    <ShoppingCart size={16} className="mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Store;
