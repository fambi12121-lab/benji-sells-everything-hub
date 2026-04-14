import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";

const CartSidebar = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen, clearCart } = useCart();

  const formatPrice = (n: number) =>
    "₦" + n.toLocaleString();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-heading text-3xl flex items-center gap-2">
            <ShoppingBag size={24} className="text-primary" />
            Your Cart ({totalItems})
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
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-card rounded-lg p-3 border border-border">
                  <img src={item.img} alt={item.name} className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                    <p className="text-primary font-heading text-lg">{item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto w-7 h-7 rounded-md flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-4">
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-heading text-2xl text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <Button asChild className="w-full gold-gradient text-primary-foreground font-semibold py-6 text-base hover:opacity-90" onClick={() => setIsOpen(false)}>
                <Link to="/checkout">Proceed to Checkout</Link>
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

export default CartSidebar;
