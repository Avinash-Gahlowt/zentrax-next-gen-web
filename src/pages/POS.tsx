import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Monitor, Smartphone, Wifi, BarChart3, Users, Receipt,
  Clock, ShieldCheck, ChevronRight
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Monitor, title: "Sleek Interface", desc: "Modern, touch-friendly UI that staff learn in minutes." },
  { icon: Smartphone, title: "Works Everywhere", desc: "Tablets, phones, desktops — any device, any browser." },
  { icon: Wifi, title: "Offline Mode", desc: "Keep taking orders even when internet goes down." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards for sales, inventory, and performance." },
  { icon: Users, title: "Staff Management", desc: "Roles, shifts, and permissions — all built in." },
  { icon: Receipt, title: "Smart Billing", desc: "Split bills, discounts, taxes — handled automatically." },
];

const POS = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" /> Launching Soon
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] text-foreground">
            The POS your
            <br />
            <span className="gradient-text">restaurant deserves</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            ZenPOS is a modern point-of-sale system built from scratch for restaurants. Fast, beautiful, and ridiculously easy to use.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-primary"
            >
              Join the Waitlist <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Features"
          title="Everything you need,"
          titleAccent="nothing you don't"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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

    {/* Why ZenPOS */}
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass rounded-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Clock, stat: "< 2 sec", label: "Average order time" },
              { icon: ShieldCheck, stat: "99.9%", label: "Uptime guarantee" },
              { icon: Users, stat: "∞", label: "Unlimited staff accounts" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default POS;
