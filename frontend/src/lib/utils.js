import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Link corto — para botones de contacto general (navbar, hero)
export const WHATSAPP_URL = "https://wa.me/message/5Y7N5GYEJ4EXL1";

// Número completo — para formularios con mensaje precargado
const WHATSAPP_NUMBER = "50762281656";

export function openWhatsAppWithMessage(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
