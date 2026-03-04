import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Products = () => (
  <div className="overflow-hidden">
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Our Products"
          title="Tools that"
          titleAccent="empower businesses"
          description="We're building a suite of modern software products. Here's what's in the pipeline."
        />

        {/* ZenPOS - featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-6 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 group-hover:from-primary/10 transition-all duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" /> Launching Soon
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">ZenPOS</h3>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                A next-gen point-of-sale system designed specifically for restaurants. Fast, intuitive, and packed with features to streamline your operations.
              </p>
            </div>
            <Link
              to="/pos"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Coming soon cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {["ZenInventory", "ZenAnalytics"].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 md:p-8 flex items-center gap-4 opacity-60"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Clock size={20} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
