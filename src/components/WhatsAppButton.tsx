import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511949680764"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-elegant transition-smooth flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-3 bg-background text-foreground px-4 py-2 rounded-lg shadow-elegant whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
