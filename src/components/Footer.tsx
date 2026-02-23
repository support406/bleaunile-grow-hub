const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-display text-lg font-semibold">
          Bleu Nile <span className="text-accent">LTD</span>
        </p>
        <p className="text-sm text-primary-foreground/70">
          Registered in United Kingdom
        </p>
      </div>
    </footer>
  );
};

export default Footer;
