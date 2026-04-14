import { useState, useEffect } from "react";
import { ShoppingCart, Smartphone, Shirt, Home, Watch, Sparkles, Loader2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useShopifyCartStore } from "@/stores/shopifyCartStore";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { Link } from "react-router-dom";

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

// Local fallback products (used when Shopify has no products yet)
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
      <section className="dark-section section-padding text-center">
        <h1 className="font-heading text-6xl md:text-7xl mb-4">Buy & Sell <span className="text-primary">Anything</span></h1>
        <p className="text-secondary-foreground/70 max-w-xl mx-auto">Electronics, fashion, home items, accessories, and random deals — all in one place.</p>
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
              <h2 className="font-heading text-4xl mb-8 text-center">Shop <span className="text-primary">Online</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {shopifyProducts.map((product) => {
                  const imgUrl = product.node.images?.edges?.[0]?.node?.url;
                  const price = product.node.priceRange.minVariantPrice;
                  return (
                    <div key={product.node.id} className="bg-card rounded-lg border border-border card-hover overflow-hidden">
                      <Link to={`/product/${product.node.handle}`}>
                        <div className="h-48 overflow-hidden bg-muted">
                          {imgUrl ? (
                            <img src={imgUrl} alt={product.node.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                          ) : (
                            <div className="flex items-center justify-center h-full"><Package size={36} className="text-muted-foreground/30" /></div>
                          )}
                        </div>
                      </Link>
                      <div className="p-5">
                        <Link to={`/product/${product.node.handle}`}>
                          <h3 className="font-semibold mb-1 hover:text-primary transition-colors">{product.node.title}</h3>
                        </Link>
                        <p className="font-heading text-2xl text-primary mb-4">{price.currencyCode} {parseFloat(price.amount).toLocaleString()}</p>
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
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-12 mb-12 bg-card rounded-lg border border-border">
              <Package size={48} className="mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="font-heading text-2xl mb-2">No Shopify Products Yet</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Your Shopify store is connected but has no products. Tell me what products you'd like to add (name, price, description) and I'll create them for you!
              </p>
            </div>
          )}

          {/* Local catalog (always shown as browse section) */}
          <h2 className="font-heading text-4xl mb-6 text-center">Browse <span className="text-primary">Catalog</span></h2>
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((c) => (
              <Button key={c.key} variant={cat === c.key ? "default" : "outline"} onClick={() => setCat(c.key)} className={cat === c.key ? "gold-gradient text-primary-foreground" : ""}>
                <c.icon size={16} className="mr-2" /> {c.label}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredLocal.map((p) => (
              <div key={p.id} className="bg-card rounded-lg border border-border card-hover overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="font-heading text-2xl text-primary mb-4">{p.price}</p>
                  <p className="text-xs text-muted-foreground">Contact to purchase</p>
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
