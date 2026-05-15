import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Car as CarIcon,
  Fuel,
  Gauge,
  MessageCircle,
  Palette,
  Send,
  Settings2,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cars, getCarBySlug, getSpecs } from "@/data/cars";

const EASE = [0.22, 1, 0.36, 1] as const;

const VehicleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const car = slug ? getCarBySlug(slug) : undefined;
  const { toast } = useToast();
  const [activeImg, setActiveImg] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  if (!car) return <Navigate to="/auto-sales" replace />;

  const specs = getSpecs(car.brand);
  const specItems = [
    { icon: Settings2, label: "Engine", value: specs.engine },
    { icon: Fuel, label: "Fuel", value: specs.fuel },
    { icon: CarIcon, label: "Transmission", value: specs.transmission },
    { icon: Gauge, label: "Mileage", value: specs.mileage },
    { icon: Palette, label: "Color", value: specs.color },
    { icon: Shield, label: "Drivetrain", value: specs.drive },
  ];

  // Build a small gallery from related brand cars (fallback uses same image)
  const related = cars.filter((c) => c.brand === car.brand && c.id !== car.id).slice(0, 3);
  const gallery = [car.img, ...related.map((r) => r.img)];
  while (gallery.length < 4) gallery.push(car.img);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry sent.",
      description: `We'll be in touch about the ${car.name} shortly.`,
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-10 md:pb-14 px-4 md:px-8 lg:px-16 overflow-hidden bg-background">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="container mx-auto relative">
          <Link
            to="/auto-sales"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-3">◐ {car.brand}</p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE as unknown as [number, number, number, number] }}
                className="font-heading text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95] text-balance"
              >
                {car.name}
              </motion.h1>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Asking price</p>
              <p className="font-heading italic text-4xl md:text-5xl text-primary">{car.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE as unknown as [number, number, number, number] }}
            className="rounded-2xl md:rounded-3xl overflow-hidden border border-border bg-card aspect-[16/10] md:aspect-[21/9]"
          >
            <img
              src={gallery[activeImg]}
              alt={`${car.name} — view ${activeImg + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="mt-4 grid grid-cols-4 gap-2 md:gap-3">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                  activeImg === i ? "border-primary" : "border-border opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`${car.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + Contact form */}
      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
            {/* Specs */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="eyebrow mb-3">Specifications</p>
                <h2 className="font-heading text-3xl md:text-5xl mb-6">
                  Built for the <span className="italic text-primary">road</span>.
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {specItems.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-border bg-card p-4 md:p-5"
                    >
                      <s.icon size={18} className="text-primary mb-3" />
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        {s.label}
                      </p>
                      <p className="text-sm md:text-base font-medium">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="eyebrow mb-3">Overview</p>
                <p className="text-muted-foreground leading-relaxed">
                  This {car.name.toLowerCase()} has been carefully inspected, serviced, and detailed by
                  our team. With a {specs.engine.toLowerCase()} powertrain paired to a{" "}
                  {specs.transmission.toLowerCase()} gearbox, it delivers a refined drive suitable for
                  daily commutes and long highway runs alike. Documentation is complete and ready for
                  immediate transfer.
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <Calendar size={14} className="text-primary" />
                  Listed 2024 · Inspection passed
                </div>
              </div>
            </div>

            {/* Contact form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE as unknown as [number, number, number, number] }}
              className="lg:col-span-5 bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-soft space-y-5 h-fit lg:sticky lg:top-28"
            >
              <div>
                <p className="eyebrow mb-2">Inquire</p>
                <h3 className="font-heading text-2xl md:text-3xl">
                  Reserve this <span className="italic text-primary">vehicle</span>.
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Send us a message and our team will reach out within a day.
                </p>
              </div>

              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                className="h-12 rounded-xl"
              />
              <Input
                placeholder="Email address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                className="h-12 rounded-xl"
              />
              <Input
                placeholder="Phone (optional)"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={30}
                className="h-12 rounded-xl"
              />
              <Textarea
                placeholder={`I'm interested in the ${car.name}…`}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                maxLength={1000}
                className="rounded-xl resize-none"
              />

              <Button
                type="submit"
                className="gold-gradient text-primary-foreground font-medium h-12 rounded-full shadow-pop hover:opacity-90 w-full"
              >
                <Send size={16} className="mr-2" /> Send inquiry
              </Button>

              <a
                href={`https://wa.me/2348000000000?text=${encodeURIComponent(
                  `Hi, I'm interested in the ${car.name} (${car.price}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 rounded-full border border-border bg-background hover:bg-muted/40 transition-colors text-sm font-medium"
              >
                <MessageCircle size={16} className="text-emerald-500" /> Chat on WhatsApp
              </a>
            </motion.form>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20 md:mt-28">
              <div className="flex items-end justify-between mb-6">
                <h3 className="font-heading text-2xl md:text-4xl">
                  More from <span className="italic text-primary">{car.brand}</span>
                </h3>
                <Link to="/auto-sales" className="text-sm text-muted-foreground hover:text-primary">
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to={`/auto-sales/${r.slug}`}
                    className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={r.img}
                        alt={r.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{r.brand}</p>
                      <h4 className="font-heading text-xl mb-2">{r.name}</h4>
                      <div className="flex items-center justify-between">
                        <p className="font-heading italic text-2xl text-primary">{r.price}</p>
                        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VehicleDetail;
