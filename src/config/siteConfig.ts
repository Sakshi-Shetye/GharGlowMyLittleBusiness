export const siteConfig = {
  brandName: "GharGlow",
  brandSubtitle: "Artisan Candles & Traditional Pure-Ghee Lights",
  tagline: "For the moments that make a place feel like home.",
  supportingLine: "For the evenings that feel familiar, the traditions that bring us closer, and the people who make any place feel like home.",
  heroPoem: "Some evenings remind us of home. Some traditions bring our families closer. And sometimes, all it takes is a little light to make anywhere feel familiar.",
  
  // Central WhatsApp number configuration (No spaces or plus in raw number for wa.me URL)
  // Format for wa.me: Country code without '+' followed by number, e.g. "919876543210"
  whatsappNumber: "919820123456", 
  whatsappDisplayNumber: "+91 98201 23456",
  isWhatsAppConfigured: true, // Marked as configurable by owner
  
  email: "gharglow.candles@gmail.com",
  instagramHandle: "@gharglow_official",
  instagramUrl: "https://instagram.com",
  location: "Mumbai, Maharashtra, India",
  
  deliveryNote: "Local Mumbai delivery, pickup by arrangement, and Pan-India courier dispatch available. Packaging and dispatch timelines are confirmed with you directly on WhatsApp."
};

/**
 * Helper to generate official WhatsApp chat link with properly encoded message
 */
export function buildWhatsAppLink(message: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate standard product inquiry message
 */
export function buildProductWhatsAppMessage(
  productName: string,
  categoryLabel: string,
  packLabel: string,
  quantity: number,
  priceText: string,
  customNotes?: string
): string {
  return `Namaste GharGlow! 🕯️

I would like to place an order from your collection:
• Brand: GharGlow
• Product: ${productName}
• Category: ${categoryLabel}
• Pack: ${packLabel}
• Quantity: ${quantity}
• Price: ${priceText}
${customNotes ? `• Note / Request: ${customNotes}\n` : ''}
Please let me know product availability, delivery charges, and payment options for my pincode. Thank you!`;
}
