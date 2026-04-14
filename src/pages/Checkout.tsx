import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  const formatPrice = (n: number) => "₦" + n.toLocaleString();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    toast({ title: "Order placed!", description: "We'll contact you shortly to confirm." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding bg-background min-h-[60vh] flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <CheckCircle size={80} className="text-primary mx-auto mb-6" />
            <h1 className="font-heading text-5xl mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Thank you for your order. We'll reach out via WhatsApp or email to confirm delivery details.</p>
            <Button asChild className="gold-gradient text-primary-foreground font-semibold px-10 py-6 text-base hover:opacity-90">
              <Link to="/store">Continue Shopping</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  if (items.length === 0) {
    return (
      <Layout>
        <section className="section-padding bg-background min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-5xl mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Add some items before checking out.</p>
            <Button asChild className="gold-gradient text-primary-foreground font-semibold px-10 py-6 text-base hover:opacity-90">
              <Link to="/store">Browse Store</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="dark-section section-padding text-center">
        <h1 className="font-heading text-6xl md:text-7xl mb-4">Check<span className="text-primary">out</span></h1>
        <p className="text-secondary-foreground/70">Review your order and complete your purchase.</p>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <Link to="/store" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Store
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Order summary */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-heading text-3xl mb-4">Order Summary</h2>
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-card rounded-lg p-4 border border-border">
                  <img src={item.img} alt={item.name} className="w-24 h-24 rounded-md object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-primary font-heading text-xl">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="font-medium w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors">
                        <Plus size={14} />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-destructive hover:bg-destructive/10 p-2 rounded-md transition-colors">
                        <Trash2 size={16} />
                      </button>
                      <span className="font-heading text-lg text-primary">{formatPrice(item.priceNum * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h2 className="font-heading text-3xl mb-6">Your Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  <Input placeholder="Phone / WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                  <Input placeholder="Delivery Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-heading text-3xl text-primary">{formatPrice(totalPrice)}</span>
                  </div>

                  <Button type="submit" className="w-full gold-gradient text-primary-foreground font-semibold py-6 text-base hover:opacity-90">
                    Place Order
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We'll confirm your order via WhatsApp or email.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
