import { Award, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-24 bg-secondary/50 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Sobre a Sambelar Móveis</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais de três décadas transformando casas em lares acolhedores
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-primary">
                Tradição e qualidade desde 1989
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Sambelar Móveis nasceu com o propósito de oferecer móveis de qualidade excepcional
                para transformar cada ambiente da sua casa em um espaço especial.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Com mais de 35 anos de experiência no mercado, construímos nossa reputação baseada
                em três pilares fundamentais: qualidade dos produtos, atendimento personalizado e
                compromisso com a satisfação dos nossos clientes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Localizada na Rua Marechal Deodoro, 2250, atendemos famílias de toda a região,
                oferecendo uma ampla variedade de móveis para todos os ambientes da casa.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-background p-6 rounded-xl shadow-elegant transition-smooth hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Qualidade garantida
                    </h3>
                    <p className="text-muted-foreground">
                      Trabalhamos apenas com marcas reconhecidas e produtos de alta durabilidade
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-elegant transition-smooth hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Atendimento personalizado
                    </h3>
                    <p className="text-muted-foreground">
                      Nossa equipe está pronta para ajudar você a encontrar o móvel perfeito
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-elegant transition-smooth hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Confiança e tradição
                    </h3>
                    <p className="text-muted-foreground">
                      Mais de 35 anos construindo relacionamentos duradouros com nossos clientes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
