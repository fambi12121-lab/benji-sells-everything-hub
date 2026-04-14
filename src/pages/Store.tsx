import { useState } from "react";
import { ShoppingCart, Smartphone, Shirt, Home, Watch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";

import earbudsImg from "@/assets/products/earbuds.jpg";
import smartwatchImg from "@/assets/products/smartwatch.jpg";
import speakerImg from "@/assets/products/speaker.jpg";
import poloImg from "@/assets/products/polo.jpg";
import handbagImg from "@/assets/products/handbag.jpg";
import sneakersImg from "@/assets/products/sneakers.jpg";
import desklampImg from "@/assets/products/desklamp.jpg";
import pillowsImg from "@/assets/products/pillows.jpg";
import walletImg from "@/assets/products/wallet.jpg";
import sunglassesImg from "@/assets/products/sunglasses.jpg";
import phonecaseImg from "@/assets/products/phonecase.jpg";
import powerbankImg from "@/assets/products/powerbank.jpg";
import backpackImg from "@/assets/products/backpack.jpg";
import mouseImg from "@/assets/products/mouse.jpg";
import mugsImg from "@/assets/products/mugs.jpg";
import wristwatchImg from "@/assets/products/wristwatch.jpg";
import chargerImg from "@/assets/products/charger.jpg";
import runningshoesImg from "@/assets/products/runningshoes.jpg";
import candleImg from "@/assets/products/candle.jpg";
import headphonesImg from "@/assets/products/headphones.jpg";

const categories = [
  { key: "all", label: "All", icon: Sparkles },
  { key: "electronics", label: "Electronics", icon: Smartphone },
  { key: "fashion", label: "Fashion", icon: Shirt },
  { key: "home", label: "Home Items", icon: Home },
  { key: "accessories", label: "Accessories", icon: Watch },
];

const products = [
  { id: 1, name: "Wireless Earbuds", price: "₦15,000", priceNum: 15000, category: "electronics", img: earbudsImg },
  { id: 2, name: "Smart Watch", price: "₦25,000", priceNum: 25000, category: "electronics", img: smartwatchImg },
  { id: 3, name: "Bluetooth Speaker", price: "₦12,000", priceNum: 12000, category: "electronics", img: speakerImg },
  { id: 4, name: "Men's Polo Shirt", price: "₦8,000", priceNum: 8000, category: "fashion", img: poloImg },
  { id: 5, name: "Women's Handbag", price: "₦18,000", priceNum: 18000, category: "fashion", img: handbagImg },
  { id: 6, name: "Sneakers", price: "₦22,000", priceNum: 22000, category: "fashion", img: sneakersImg },
  { id: 7, name: "LED Desk Lamp", price: "₦6,500", priceNum: 6500, category: "home", img: desklampImg },
  { id: 8, name: "Throw Pillows (set)", price: "₦9,000", priceNum: 9000, category: "home", img: pillowsImg },
  { id: 9, name: "Leather Wallet", price: "₦5,000", priceNum: 5000, category: "accessories", img: walletImg },
  { id: 10, name: "Sunglasses", price: "₦7,500", priceNum: 7500, category: "accessories", img: sunglassesImg },
  { id: 11, name: "Phone Case", price: "₦3,000", priceNum: 3000, category: "accessories", img: phonecaseImg },
  { id: 12, name: "Power Bank 20000mAh", price: "₦14,000", priceNum: 14000, category: "electronics", img: powerbankImg },
  { id: 13, name: "Laptop Backpack", price: "₦16,000", priceNum: 16000, category: "accessories", img: backpackImg },
  { id: 14, name: "Gaming Mouse RGB", price: "₦11,000", priceNum: 11000, category: "electronics", img: mouseImg },
  { id: 15, name: "Ceramic Mug Set", price: "₦7,000", priceNum: 7000, category: "home", img: mugsImg },
  { id: 16, name: "Gold Wristwatch", price: "₦45,000", priceNum: 45000, category: "accessories", img: wristwatchImg },
  { id: 17, name: "Wireless Charger", price: "₦8,500", priceNum: 8500, category: "electronics", img: chargerImg },
  { id: 18, name: "Running Shoes", price: "₦19,000", priceNum: 19000, category: "fashion", img: runningshoesImg },
  { id: 19, name: "Scented Candle", price: "₦4,500", priceNum: 4500, category: "home", img: candleImg },
  { id: 20, name: "Premium Headphones", price: "₦35,000", priceNum: 35000, category: "electronics", img: headphonesImg },
];

const Store = () => {
  const [cat, setCat] = useState("all");
  const { addItem } = useCart();
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
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="font-heading text-2xl text-primary mb-4">{p.price}</p>
                  <Button className="w-full gold-gradient text-primary-foreground hover:opacity-90" onClick={() => addItem({ id: p.id, name: p.name, price: p.price, priceNum: p.priceNum, img: p.img })}>
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
