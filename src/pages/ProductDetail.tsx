import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Loader2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useShopifyCartStore } from "@/stores/shopifyCartStore";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useShopifyCartStore((s) => s.addItem);
  const isCartLoading = useShopifyCartStore((s) => s.isLoading);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        setProduct(data?.data?.product || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [handle]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center text-center">
          <div>
            <Package size={64} className="mx-auto text-muted-foreground/30 mb-4" />
            <h1 className="font-heading text-4xl mb-4">Product Not Found</h1>
            <Button asChild variant="outline"><Link to="/store">Back to Store</Link></Button>
          </div>
        </div>
      </Layout>
    );
  }

  const images = product.images?.edges || [];
  const variants = product.variants?.edges || [];
  const selectedVariant = variants[selectedVariantIdx]?.node;
  const currentImage = images[selectedImage]?.node;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
  };

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <Link to="/store" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Store
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                {currentImage ? (
                  <img src={currentImage.url} alt={currentImage.altText || product.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full"><Package size={64} className="text-muted-foreground/30" /></div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img: any, i: number) => (
                    <button key={i} onClick={() => setSelectedImage(i)} className={`w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}>
                      <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <h1 className="font-heading text-5xl mb-4">{product.title}</h1>
              {selectedVariant && (
                <p className="font-heading text-3xl text-primary mb-6">
                  {selectedVariant.price.currencyCode} {parseFloat(selectedVariant.price.amount).toLocaleString()}
                </p>
              )}
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Variant selector */}
              {variants.length > 1 && (
                <div className="mb-8">
                  {product.options?.map((option: any) => (
                    <div key={option.name} className="mb-4">
                      <label className="text-sm font-medium mb-2 block">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value: string) => {
                          const variantIdx = variants.findIndex((v: any) =>
                            v.node.selectedOptions.some((o: any) => o.name === option.name && o.value === value)
                          );
                          return (
                            <button
                              key={value}
                              onClick={() => setSelectedVariantIdx(variantIdx >= 0 ? variantIdx : 0)}
                              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                                selectedVariantIdx === variantIdx ? 'gold-gradient text-primary-foreground border-primary' : 'border-border hover:border-primary'
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button
                onClick={handleAddToCart}
                disabled={isCartLoading || !selectedVariant?.availableForSale}
                className="w-full gold-gradient text-primary-foreground font-semibold py-6 text-lg hover:opacity-90"
              >
                {isCartLoading ? <Loader2 size={20} className="mr-2 animate-spin" /> : <ShoppingCart size={20} className="mr-2" />}
                {selectedVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
