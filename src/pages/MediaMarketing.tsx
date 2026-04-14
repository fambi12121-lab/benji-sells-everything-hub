import { Link } from "react-router-dom";
import { Video, Camera, Mic, Share2, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const mediaServices = [
  { icon: Video, title: "Video Editing", desc: "Professional video editing for commercials, social media, and events." },
  { icon: Camera, title: "Photography", desc: "High-quality photography for products, portraits, and events." },
  { icon: Mic, title: "Event Coverage", desc: "Full event documentation — video, photos, and live streaming." },
  { icon: Share2, title: "Social Media Content", desc: "Engaging content creation for all social media platforms." },
];

const MediaMarketing = () => (
  <Layout>
    <section className="dark-section section-padding text-center">
      <h1 className="font-heading text-6xl md:text-7xl mb-4">Media / <span className="text-primary">Marketing</span></h1>
      <p className="text-secondary-foreground/70 max-w-xl mx-auto">Professional media services to elevate your brand presence.</p>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mediaServices.map((s) => (
            <div key={s.title} className="bg-card rounded-lg p-8 border border-border card-hover text-center">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                <s.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Video samples placeholder */}
        <h2 className="font-heading text-5xl text-center mb-8">Sample <span className="text-primary">Work</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Event Highlight Reel", "Product Commercial", "Brand Story"].map((t) => (
            <div key={t} className="group relative bg-secondary rounded-lg overflow-hidden aspect-video flex items-center justify-center card-hover cursor-pointer">
              <div className="absolute inset-0 bg-dark/70 group-hover:bg-dark/50 transition-colors" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={28} className="text-primary-foreground ml-1" />
                </div>
                <span className="text-secondary-foreground font-semibold text-sm">{t}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="gold-gradient text-primary-foreground font-semibold px-10 py-6 text-base hover:opacity-90">
            <Link to="/contact">Book Media Services <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default MediaMarketing;
