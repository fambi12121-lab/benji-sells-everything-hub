import { useState, useEffect } from "react";
import { ShoppingCart, Smartphone, Shirt, Home, Watch, Sparkles, Loader2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useShopifyCartStore } from "@/stores/shopifyCartStore";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Keep local products as fallback when no Shopify products exist
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

const localProducts = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Store = () => {
  const [cat, setCat] = useState("all");
  const [shopifyProducts, setShopifyProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasShopifyProducts, setHasShopifyProducts] = useState(false);
  const addItem = useShopifyCartStore((s) => s.addItem);
  const isCartLoading = useShopifyCartStore((s) => s.isLoading);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 50 });
        const edges = data?.data?.products?.edges || [];
        if (edges.length > 0) {
          setShopifyProducts(edges);
          setHasShopifyProducts(true);
        }
      } catch (e) {
        console.error("Failed to fetch Shopify products:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredLocal = cat === "all" ? localProducts : localProducts.filter((p) => p.category === cat);

  const handleAddShopifyItem = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-background">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="container mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4 md:mb-6"
          >
            ◍ Benji store
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="font-heading text-[clamp(2.75rem,11vw,8rem)] leading-[0.92] text-balance max-w-5xl"
          >
            Buy & sell
            <br />
            <span className="italic text-primary">anything</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Electronics, fashion, home items, accessories, and curated everyday deals — all in one trusted place.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Shopify Products */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : hasShopifyProducts ? (
            <>
              <motion.div
                className="text-center mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.span variants={fadeUp} custom={0} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
                  Shopify Products
                </motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.25rem,7vw,4rem)] leading-[1]">
                  Shop <span className="text-primary">Online</span>
                </motion.h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                {shopifyProducts.map((product, i) => {
                  const imgUrl = product.node.images?.edges?.[0]?.node?.url;
                  const price = product.node.priceRange.minVariantPrice;
                  return (
                    <motion.div key={product.node.id} custom={i} variants={scaleIn}>
                      <div className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 h-full flex flex-col">
                        <Link to={`/product/${product.node.handle}`}>
                          <div className="h-52 overflow-hidden bg-muted group">
                            {imgUrl ? (
                              <img src={imgUrl} alt={product.node.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <div className="flex items-center justify-center h-full"><Package size={36} className="text-muted-foreground/30" /></div>
                            )}
                          </div>
                        </Link>
                        <div className="p-5 flex flex-col flex-1">
                          <Link to={`/product/${product.node.handle}`}>
                            <h3 className="font-semibold mb-1 hover:text-primary transition-colors">{product.node.title}</h3>
                          </Link>
                          <p className="font-heading text-2xl text-primary mb-4">{price.currencyCode} {parseFloat(price.amount).toLocaleString()}</p>
                          <div className="mt-auto">
                            <Button
                              className="w-full gold-gradient text-primary-foreground hover:opacity-90"
                              onClick={() => handleAddShopifyItem(product)}
                              disabled={isCartLoading}
                            >
                              {isCartLoading ? <Loader2 size={16} className="mr-2 animate-spin" /> : <ShoppingCart size={16} className="mr-2" />}
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </>
          ) : (
            <motion.div
              className="text-center py-12 mb-12 bg-card rounded-xl border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Package size={48} className="mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="font-heading text-2xl mb-2">No Shopify Products Yet</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Your Shopify store is connected but has no products. Tell me what products you'd like to add (name, price, description) and I'll create them for you!
              </p>
            </motion.div>
          )}

          {/* Local catalog */}
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} custom={0} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Browse Collection
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.25rem,7vw,4rem)] leading-[1] mb-6">
              Browse <span className="text-primary">Catalog</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 mb-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {categories.map((c) => (
              <Button key={c.key} variant={cat === c.key ? "default" : "outline"} onClick={() => setCat(c.key)} className={cat === c.key ? "gold-gradient text-primary-foreground" : ""}>
                <c.icon size={16} className="mr-2" /> {c.label}
              </Button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {filteredLocal.map((p, i) => (
              <motion.div key={p.id} custom={i % 8} variants={scaleIn}>
                <div className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 h-full">
                  <div className="h-48 overflow-hidden group">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold mb-1">{p.name}</h3>
                    <p className="font-heading text-2xl text-primary mb-4">{p.price}</p>
                    <p className="text-xs text-muted-foreground">Contact to purchase</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Store;
