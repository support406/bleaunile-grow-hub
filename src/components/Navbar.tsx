import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold text-primary-foreground">
          Bleu Nile <span className="text-accent">LTD</span>
        </a>
        <div className="hidden sm:flex gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-primary-foreground/80 hover:text-accent transition-colors font-medium text-sm">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="sm:hidden text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="sm:hidden bg-primary border-t border-primary-foreground/10 px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
