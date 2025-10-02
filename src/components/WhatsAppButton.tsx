import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511971145712"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 shadow-elegant transition-smooth flex items-center justify-center group hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-10 w-10" />
      <span className="absolute right-full mr-3 bg-background text-foreground px-4 py-2 rounded-lg shadow-elegant whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
