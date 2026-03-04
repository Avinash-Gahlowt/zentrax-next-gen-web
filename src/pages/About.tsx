import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Purpose-Driven", desc: "Every product we build solves a real, painful problem." },
  { icon: Lightbulb, title: "Innovation First", desc: "We challenge conventions and build what should exist." },
  { icon: Rocket, title: "Ship Fast", desc: "Speed matters. We iterate fast and ship faster." },
];

const About = () => (
  <div className="overflow-hidden">
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] text-foreground">
            We build software
            <br />
            <span className="gradient-text">people actually love</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            ZentraxLabs is a software company focused on creating modern, elegant products that help businesses operate smarter. We're starting with restaurants — and we're just getting started.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading title="Our" titleAccent="values" />
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              ZentraxLabs was born from a simple frustration: why is business software so outdated? We set out to build tools that are as intuitive and beautiful as the consumer apps we use every day. Our first product, ZenPOS, reimagines the restaurant POS experience from the ground up — and we have big plans for what comes next.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
