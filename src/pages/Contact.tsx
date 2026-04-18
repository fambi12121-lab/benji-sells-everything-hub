import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent.", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-background">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="container mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE as unknown as [number, number, number, number] }}
            className="eyebrow mb-6"
          >
            ✦ Let's talk
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE as unknown as [number, number, number, number] }}
            className="font-heading text-6xl md:text-9xl leading-[0.92] text-balance max-w-4xl"
          >
            Say <span className="italic text-primary">hello</span>.
            <br />
            We're listening.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE as unknown as [number, number, number, number] }}
            className="drop-cap mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Got a question, a project, or just a curious idea? Drop us a note — we usually reply within a day.
          </motion.p>
        </div>
      </section>

      {/* Form + info */}
      <section className="px-4 md:px-8 lg:px-16 pb-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form card */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE as unknown as [number, number, number, number] }}
              className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft space-y-6"
            >
              <div>
                <p className="eyebrow mb-2">01 — Your details</p>
                <h2 className="font-heading text-3xl md:text-4xl">Tell us about <span className="italic text-primary">you</span>.</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="h-12 rounded-xl" />
                <Input placeholder="Email address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="h-12 rounded-xl" />
              </div>
              <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="h-12 rounded-xl" />
              <Textarea placeholder="Tell us a little about your project or question…" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="rounded-xl resize-none" />
              <Button type="submit" className="gold-gradient text-primary-foreground font-medium px-8 h-13 py-6 rounded-full shadow-pop hover:opacity-90 w-full sm:w-auto">
                <Send size={16} className="mr-2" /> Send message
              </Button>
            </motion.form>

            {/* Info column */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE as unknown as [number, number, number, number] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-card border border-border rounded-3xl p-8">
                <p className="eyebrow mb-2">02 — Reach us</p>
                <h3 className="font-heading text-3xl mb-8">Direct <span className="italic text-primary">channels</span>.</h3>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: "Call us", value: "+234 800 000 0000", href: "tel:+2348000000000" },
                    { icon: Mail, label: "Email", value: "hello@benjisells.com", href: "mailto:hello@benjisells.com" },
                    { icon: MapPin, label: "Studio", value: "Lagos, Nigeria" },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <c.icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                        <p className="font-medium">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 dark-section rounded-3xl p-6 hover:opacity-95 transition-opacity"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary-foreground/60">Instant</p>
                    <p className="font-medium text-secondary-foreground">Chat on WhatsApp</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-secondary-foreground/70 group-hover:rotate-45 transition-transform" />
              </a>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
