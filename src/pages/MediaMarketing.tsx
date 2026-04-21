import { Link } from "react-router-dom";
import { Video, Camera, Mic, Share2, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const mediaServices = [
  { num: "01", icon: Video, title: "Video Editing", desc: "Professional video editing for commercials, social media, and events." },
  { num: "02", icon: Camera, title: "Photography", desc: "High-quality photography for products, portraits, and events." },
  { num: "03", icon: Mic, title: "Event Coverage", desc: "Full event documentation — video, photos, and live streaming." },
  { num: "04", icon: Share2, title: "Social Content", desc: "Engaging content creation for all social media platforms." },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE as unknown as [number, number, number, number] },
  }),
};

const MediaMarketing = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-background">
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container mx-auto relative">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow mb-4 md:mb-6">
          ▶ Media studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE as unknown as [number, number, number, number] }}
          className="font-heading text-[clamp(2.75rem,11vw,8rem)] leading-[0.92] text-balance max-w-5xl"
        >
          Stories worth
          <br />
          <span className="italic text-primary">watching</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE as unknown as [number, number, number, number] }}
          className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Professional photography, video, and content creation to elevate your brand presence — from intimate events to full commercial productions.
        </motion.p>
      </div>
    </section>

    {/* Services */}
    <section className="px-4 md:px-8 lg:px-16 pb-14 md:pb-20">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl md:rounded-3xl overflow-hidden border border-border"
        >
          {mediaServices.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={fadeUp} className="bg-card p-6 md:p-10">
              <div className="flex items-start justify-between mb-8 md:mb-10">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">— {s.num}</span>
                <s.icon size={22} className="text-primary opacity-70" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl leading-[1.05] mb-3 md:mb-4">
                {s.title.split(" ")[0]}
                {s.title.split(" ").slice(1).length > 0 && (
                  <span className="italic text-primary"> {s.title.split(" ").slice(1).join(" ")}</span>
                )}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Sample work */}
    <section className="section-padding dark-section grain">
      <div className="container mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} custom={0} className="eyebrow mb-4">Sample work</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,8vw,5rem)] text-secondary-foreground leading-[0.95] text-balance">
            Recent <span className="italic text-primary">productions</span>.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {["Event Highlight Reel", "Product Commercial", "Brand Story"].map((t, i) => (
            <motion.div key={t} custom={i} variants={fadeUp}>
              <div className="group relative aspect-video rounded-2xl overflow-hidden glass-dark cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform shadow-pop">
                    <Play size={22} className="text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-heading text-xl text-secondary-foreground">{t}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 md:mt-16">
          <Button asChild className="gold-gradient text-primary-foreground font-medium px-8 h-14 rounded-full shadow-pop hover:opacity-90 w-full sm:w-auto">
            <Link to="/contact">Book media services <ArrowUpRight size={18} className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default MediaMarketing;
