import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ExternalLink, Loader2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useShopifyCartStore } from "@/stores/shopifyCartStore";

const ShopifyCartSidebar = () => {
  const {
    items, isLoading, isSyncing, isOpen, setIsOpen,
    updateQuantity, removeItem, clearCart, getCheckoutUrl, syncCart,
    totalItems, totalPrice,
  } = useShopifyCartStore();

  const count = totalItems();
  const total = totalPrice();
  const currency = items[0]?.price.currencyCode || "NGN";

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-heading text-3xl flex items-center gap-2">
            <ShoppingBag size={24} className="text-primary" />
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag size={64} className="opacity-20" />
            <p className="text-lg">Your cart is empty</p>
            <Button onClick={() => setIsOpen(false)} variant="outline" asChild>
              <Link to="/store">Browse Store</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {items.map((item) => {
                const imgUrl = item.product.node.images?.edges?.[0]?.node?.url;
                return (
                  <div key={item.variantId} className="flex gap-3 bg-card rounded-lg p-3 border border-border">
                    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                      {imgUrl && <img src={imgUrl} alt={item.product.node.title} className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{item.product.node.title}</h4>
                      {item.selectedOptions.length > 0 && item.selectedOptions[0].value !== "Default Title" && (
                        <p className="text-xs text-muted-foreground">{item.selectedOptions.map(o => o.value).join(' • ')}</p>
                      )}
                      <p className="text-primary font-heading text-lg">{currency} {parseFloat(item.price.amount).toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} disabled={isLoading} className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50">
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} disabled={isLoading} className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50">
                          <Plus size={14} />
                        </button>
                        <button onClick={() => removeItem(item.variantId)} disabled={isLoading} className="ml-auto w-7 h-7 rounded-md flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-50">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 space-y-4">
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-heading text-2xl text-primary">{currency} {total.toLocaleString()}</span>
              </div>
              <Button onClick={handleCheckout} disabled={isLoading || isSyncing} className="w-full gold-gradient text-primary-foreground font-semibold py-6 text-base hover:opacity-90">
                {isLoading || isSyncing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                Checkout with Shopify
              </Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShopifyCartSidebar;
