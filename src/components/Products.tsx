import { Bed, UtensilsCrossed, Sofa, Baby, Armchair, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GalleryCarousel } from "./GalleryCarousel";
import ProductDetail from "./ProductDetail";

const products = [
  {
    icon: Bed,
    title: "Móveis para quarto",
    description: "Guarda-roupas, camas, cabeceiras e cômodas para seu conforto",
    items: ["Guarda-roupas", "Camas", "Cabeceiras", "Cômodas", "Criados-mudos"],
  },
  {
    icon: UtensilsCrossed,
    title: "Móveis para cozinha",
    description: "Armários, buffets e mesas para sua cozinha",
    items: ["Armários", "Buffets", "Mesas", "Cadeiras", "Balcões"],
  },
  {
    icon: Sofa,
    title: "Móveis para sala",
    description: "Sofás, racks e mesas de centro elegantes",
    items: ["Sofás", "Racks", "Mesas de centro", "Estantes", "Aparadores"],
  },
  {
    icon: Baby,
    title: "Móveis infantil",
    description: "Móveis seguros e coloridos para as crianças",
    items: ["Berços", "Cômodas", "Guarda-roupas", "Escrivaninhas", "Nichos"],
  },
  {
    icon: Armchair,
    title: "Sofás e poltronas",
    description: "Conforto e estilo para sua sala de estar",
    items: ["Sofás 2 lugares", "Sofás 3 lugares", "Sofás-cama", "Poltronas", "Reclinadores"],
  },
  {
    icon: Box,
    title: "Colchões e Box",
    description: "Conforto para uma boa noite de sono",
    items: ["Colchões ortopédicos", "Colchões de molas", "Box baú", "Box conjugado", "Travesseiros"],
  },
];

const Products = () => {
  return (
    <>
      <section id="produtos" className="py-12 sm:py-16 md:py-24 bg-background w-full overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-foreground mb-4">Nossos produtos</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Móveis de qualidade para todos os ambientes da sua casa
              </p>
            </div>

            {/* Gallery Carousel */}
            <GalleryCarousel />

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-smooth hover:shadow-elegant group"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                    <product.icon className="h-8 w-8 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  <ul className="space-y-2">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Encontrou o que procura? Entre em contato para conhecer nossa loja!
            </p>
            <a
              href="https://wa.me/5511971145712"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg shadow-elegant transition-smooth"
            >
              Consultar disponibilidade
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Product: Roupeiro Jupter */}
    <ProductDetail
      name="Roupeiro Jupter"
      images={[
        "/produtos/roupeiro-jupter-1.jpg",
        "/produtos/roupeiro-jupter-2.jpg",
        "/produtos/roupeiro-jupter-3.jpg",
        "/produtos/roupeiro-jupter-4.jpg",
        "/produtos/roupeiro-jupter-5.jpg",
      ]}
      description={[
        "Portas, Moldura e Frente Gavetas em MDF",
        "Corrediça telescópica 40cm",
        "Profundidade da gaveta 40cm",
        "Abertura total da gaveta",
        "Suporte cabide metálico",
        "Puxadores de madeira",
        "Gaveta com chave",
        "Produzido com chapa de 15mm",
        "Pé opcional",
        "Trilho antiquedas de portas",
      ]}
      dimensions={{
        height: "2,18m",
        heightWithFeet: "2,28m",
        width: "1,35m",
        depth: "0,52m",
      }}
    />
    </>
  );
};

export default Products;
