import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
        >
          Bleau Nile <span className="text-accent">LTD</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-primary-foreground/85 font-body mb-10 leading-relaxed"
        >
          Helping brands grow on Amazon with expertise, care, and a personal touch.
        </motion.p>
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="inline-block bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg shadow-[var(--accent-glow)] hover:brightness-110 transition-all"
        >
          Explore Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
