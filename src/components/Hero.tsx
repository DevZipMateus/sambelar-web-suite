import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading - H1 */}
          <h1 className="text-foreground mb-6 animate-fade-in">
            Sambelar Móveis
          </h1>

          {/* Subtitle - H2 */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-normal animate-fade-in">
            Há mais de 30 anos entregando qualidade e conforto para sua casa!
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Encontre móveis perfeitos para cada ambiente: quarto, cozinha, sala e muito mais. Tradição e modernidade em cada peça.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant text-lg px-8 h-14 transition-smooth"
            >
              <a
                href="https://wa.me/5511949680764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Faça seu Orçamento
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 h-14 transition-smooth"
            >
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("produtos")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Ver Produtos
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">30+</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Clientes satisfeitos</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Qualidade garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
