import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Entre em contato</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visite nossa loja ou entre em contato. Estamos prontos para atender você!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de contato
              </h3>

              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-elegant transition-smooth">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Marechal Deodoro, 2250<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-elegant transition-smooth">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <a
                    href="https://wa.me/5511949680764"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    (11) 94968-0764
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-elegant transition-smooth">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <a
                    href="mailto:usamazei@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    usamazei@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-elegant transition-smooth">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horário de funcionamento</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a sábado: 9:30 às 19h</p>
                    <p>Domingo: 10h às 16h</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-elegant transition-smooth">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Redes sociais</h4>
                  <a
                    href="https://instagram.com/sambelarmoveis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    @sambelarmoveis
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[500px] rounded-xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0974358607843!2d-46.63592!3d-23.5629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ2LjQiUyA0NsKwMzgnMDkuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Sambelar Móveis"
              />
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
              Pronto para transformar sua casa?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Visite nossa loja ou fale conosco pelo WhatsApp
            </p>
            <a
              href="https://wa.me/5511949680764"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold text-lg shadow-glow transition-smooth"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
