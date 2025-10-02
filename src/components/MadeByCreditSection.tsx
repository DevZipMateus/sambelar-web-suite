import montesiteLogo from "@/assets/montesite-logo.png";

const MadeByCreditSection = () => {
  return (
    <section className="py-8 bg-background border-t">
      <div className="container mx-auto px-4">
        <a
          href="https://egestor.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 hover:opacity-80 transition-smooth"
        >
          <span className="text-muted-foreground text-lg">Feito por</span>
          <img src={montesiteLogo} alt="MonteSite" className="h-8 w-auto" />
        </a>
      </div>
    </section>
  );
};

export default MadeByCreditSection;
