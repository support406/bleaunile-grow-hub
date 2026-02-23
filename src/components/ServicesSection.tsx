import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, FileText } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Advertising Optimization",
    description:
      "Campaign setup and management for Sponsored Products, Brands & Display. We handle bid strategies, keyword research, and performance analysis to maximize your ROI.",
  },
  {
    icon: ShieldCheck,
    title: "Account Management",
    description:
      "Full Amazon account support — listing monitoring, policy compliance, and customer feedback management so you can focus on growing your business.",
  },
  {
    icon: FileText,
    title: "Cataloging & Product Listing",
    description:
      "Compelling product content creation, A+ / Enhanced Brand Content, SKU organization, and catalog optimization that converts browsers into buyers.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16"
        >
          Our <span className="text-accent">Services</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-[var(--card-shadow)] hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/15 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
