import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, titleAccent, description, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
  >
    {badge && (
      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
      {title}
      {titleAccent && <span className="gradient-text"> {titleAccent}</span>}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
