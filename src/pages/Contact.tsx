import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="overflow-hidden">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                Let's <span className="gradient-text">talk</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                Have a question, want early access to ZenPOS, or just want to say hi? Drop us a line.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6 md:gap-8">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 space-y-4"
              >
                <div className="glass rounded-xl p-6">
                  <Mail size={20} className="text-primary mb-3" />
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">hello@zentraxlabs.com</p>
                </div>
                <div className="glass rounded-xl p-6">
                  <MapPin size={20} className="text-primary mb-3" />
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Remote-first, worldwide</p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubmit}
                className="md:col-span-3 glass rounded-xl p-6 md:p-8 space-y-4"
              >
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
