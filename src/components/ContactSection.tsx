import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "sales4reign@gmail.com", href: "mailto:sales4reign@gmail.com" },
  { icon: Phone, label: "Phone", value: "+44 7878 461196", href: "tel:+447878461196" },
  { icon: Globe, label: "Website", value: "www.bleaunile.com", href: "https://www.bleaunile.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
        >
          Get in <span className="text-accent">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground mb-14"
        >
          Ready to grow on Amazon? We'd love to hear from you.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "Website" ? "_blank" : undefined}
              rel={c.label === "Website" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex-1 bg-card rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-lg transition-shadow text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                <c.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{c.label}</p>
              <p className="font-semibold text-foreground">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
