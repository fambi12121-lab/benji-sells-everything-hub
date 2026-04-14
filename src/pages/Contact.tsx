import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="dark-section section-padding text-center">
        <h1 className="font-heading text-6xl md:text-7xl mb-4">Contact <span className="text-primary">Us</span></h1>
        <p className="text-secondary-foreground/70 max-w-xl mx-auto">Got a question or need our services? We'd love to hear from you.</p>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
              <Textarea placeholder="Your Message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              <Button type="submit" className="gold-gradient text-primary-foreground font-semibold px-10 py-6 text-base hover:opacity-90">
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </form>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-3xl mb-6">Get in <span className="text-primary">Touch</span></h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "+234 800 000 0000" },
                    { icon: Mail, label: "hello@benjisells.com" },
                    { icon: MapPin, label: "Lagos, Nigeria" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                        <c.icon size={20} className="text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-600 text-white rounded-lg px-6 py-4 hover:bg-emerald-700 transition-colors w-fit"
              >
                <MessageCircle size={24} />
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
