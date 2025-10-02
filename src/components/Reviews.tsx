import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Jo alegria",
    rating: 5,
    text: "Excelente loja, já sou cliente há mais 29 anos, bom atendimento do vendedor Usama. Indiquei para meus familiares e amigos.",
    image: "/reviews/review-1.jpg",
  },
  {
    name: "Lucas Cardoso",
    rating: 5,
    text: "Atendimento excepcional da equipe Sambelar Usama com sua irmã Yasmin, nos atenderam muito bem trouxeram o melhor negócio com produtos de qualidade e preço justo será sempre a minha primeira procura quando se tratar de móveis.",
    image: "/reviews/review-2.jpg",
  },
  {
    name: "Fernanda Alves da Silva",
    rating: 5,
    text: "Atendimento impecável, produtos de altíssima qualidade com preço justo. Sempre volto pra comprar porque são produtos duráveis e com designer lindo. Recomendo demais essa loja ❤️",
    image: "/reviews/review-3.jpg",
  },
  {
    name: "Vanessa Antonia de sousa ferreira",
    rating: 5,
    text: "Yasmin boa tarde. Ficou muito lindo obrigada por ajudar na nossa escolha 🥰",
    image: "/reviews/review-4.jpg",
  },
  {
    name: "Débora Bocalini Oliveira",
    rating: 5,
    text: "Excelente atendimento pela Yasmin e seu irmão, atendendo todas as nossas expectativas em relação ao móvel que adquirimos. SAMBELAR MÓVEIS EU RECOMENDO DE OLHOS FECHADOS, NOTA 10 NO MEU CONCEITO. A entrega ocorreu conforme combinado na data certa, avisando com 1 dia de antecedência. Pra mim foi perfeito. Recomendo e muito.",
    image: "/reviews/review-5.jpg",
  },
  {
    name: "Rubens Javan",
    rating: 5,
    text: "A sambelar móveis é uma loja extremamente confiável e tem compromisso com o cliente. E o vendedor passa total transparência do produto 'prós e contras' em relação um ao outro. Com certeza já sou cliente e super indico. Ainda mais sabendo que o frete é a montagem inclusa no negócio.",
    image: "/reviews/review-6.jpg",
  },
];

const Reviews = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">O que nossos clientes dizem</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avaliações reais de clientes satisfeitos com nossos produtos e atendimento
            </p>
          </div>

          {/* Reviews Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="h-full hover:shadow-elegant transition-smooth">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                          "{review.text}"
                        </p>

                        {/* Reviewer Name */}
                        <div className="border-t pt-4">
                          <p className="font-semibold text-foreground">{review.name}</p>
                          <p className="text-xs text-muted-foreground">Cliente verificado</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Google Reviews Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-background border rounded-xl px-6 py-4 shadow-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">5.0 estrelas</p>
                <p className="text-sm text-muted-foreground">Baseado em avaliações reais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
