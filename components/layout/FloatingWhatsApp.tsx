import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="btn-primary fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg lg:bottom-8 lg:right-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden />
    </a>
  );
}
