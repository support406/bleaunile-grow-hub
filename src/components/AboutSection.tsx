import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8"
        >
          Who We <span className="text-accent">Are</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          At Bleu Nile LTD, we're passionate about helping brands thrive on Amazon.
          We combine deep marketplace expertise with genuine care for every client we work with.
          Whether you're launching your first product or scaling an established brand,
          we deliver measurable results while keeping communication clear, honest, and friendly.
          Think of us as an extension of your team — one that truly has your back.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
