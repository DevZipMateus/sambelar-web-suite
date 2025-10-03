import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check } from "lucide-react";

interface ProductDetailProps {
  name: string;
  images: string[];
  description: string[];
  dimensions: {
    height: string;
    heightWithFeet?: string;
    width: string;
    depth: string;
  };
}

const ProductDetail = ({ name, images, description, dimensions }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Product Header */}
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">{name}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images Carousel */}
            <div className="w-full">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Card 
                        className="border-2 overflow-hidden cursor-pointer hover:border-primary/50 transition-smooth"
                        onClick={() => setSelectedImage(image)}
                      >
                        <CardContent className="p-0">
                          <img
                            src={image}
                            alt={`${name} - Visualização ${index + 1}`}
                            className="w-full h-auto object-cover aspect-square"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer border-2 border-border hover:border-primary/50 rounded-lg overflow-hidden transition-smooth"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${name} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover aspect-square"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Descrição do Produto
                </h3>
                <ul className="space-y-3">
                  {description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dimensions */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Medidas
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span className="font-medium">Altura:</span>
                    <span>{dimensions.height}</span>
                  </p>
                  {dimensions.heightWithFeet && (
                    <p className="flex justify-between">
                      <span className="font-medium">Altura com pé:</span>
                      <span>{dimensions.heightWithFeet}</span>
                    </p>
                  )}
                  <p className="flex justify-between">
                    <span className="font-medium">Largura:</span>
                    <span>{dimensions.width}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Profundidade:</span>
                    <span>{dimensions.depth}</span>
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/5511971145712"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg shadow-elegant transition-smooth"
              >
                Consultar disponibilidade
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <img
            src={selectedImage || ""}
            alt={name}
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductDetail;
