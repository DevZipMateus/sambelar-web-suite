import { Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Sambelar Móveis" className="h-20 sm:h-24 md:h-28 w-auto mb-4" loading="lazy" />
            <p className="text-primary-foreground/80 mb-4">
              Há mais de 30 anos entregando qualidade e conforto para sua casa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511971145712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  <Phone className="h-4 w-4" />
                  (11) 97114-5712
                </a>
              </li>
              <li>
                <a
                  href="mailto:sambelar@hotmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  <Mail className="h-4 w-4" />
                  sambelar@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sambelarmoveis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  <Instagram className="h-4 w-4" />
                  @sambelarmoveis
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Sambelar Móveis. Todos os direitos reservados.
            </p>
            <p>CNPJ: 55.968.234/0001-19</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
