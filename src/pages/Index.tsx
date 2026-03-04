import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, BarChart3, Layers, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Products built with performance-first architecture." },
  { icon: Shield, title: "Enterprise Secure", desc: "Bank-grade security across every product we ship." },
  { icon: BarChart3, title: "Data Driven", desc: "Real-time analytics and insights baked into everything." },
  { icon: Layers, title: "Scalable", desc: "From single store to enterprise chains — we scale with you." },
];

const Index = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            ZenPOS launching soon
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground">
            Software that
            <br />
            <span className="gradient-text">moves business</span>
            <br />
            forward
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            ZentraxLabs builds modern, powerful tools for businesses that refuse to stay behind. Starting with the restaurant industry.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pos"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-primary"
            >
              Explore ZenPOS <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium text-sm hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why ZentraxLabs"
          title="Built different."
          titleAccent="Built better."
          description="We don't just build software — we craft experiences that businesses actually love to use."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to level up your business?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Our first product ZenPOS is launching soon. Be among the first to experience it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
            >
              Get Early Access <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
