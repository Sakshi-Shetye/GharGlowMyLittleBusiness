import React, { useState } from 'react';
import { Product } from '../types';
import { MessageCircle, Mail, Instagram, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';

interface ContactSectionProps {
  products: Product[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ products }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Floating & Decorative Candles',
    productName: products[0]?.name || 'Rose-Design Floating Candles',
    quantity: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    const compiledMessage = `Namaste GharGlow! 🕯️

I would like to inquire about placing an order:
• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim() || 'Not provided'}
• Category: ${formData.category}
• Preferred Item: ${formData.productName}
• Quantity / Packs: ${formData.quantity}
${formData.message.trim() ? `• Message / Requirements: ${formData.message.trim()}\n` : ''}
Please let me know availability and pricing. Thank you!`;

    window.open(buildWhatsAppLink(compiledMessage), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] text-[#2C1810] border-t border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B263E] mb-2 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C1810] tracking-tight mb-3">
            Contact &amp; Custom Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-[#6B555D]">
            Have a custom festive hamper requirement, bulk wedding order, or general inquiry? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Business Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EADBCC] shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-2xl text-[#2C1810]">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={buildWhatsAppLink("Namaste GharGlow! I'd like to ask a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#F0FAF3] border border-[#C6ECD2] hover:bg-[#E2F7E9] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#20BA5A] font-bold uppercase tracking-wider block">
                      WhatsApp Orders
                    </span>
                    <span className="text-sm font-semibold text-[#18532F] group-hover:underline">
                      {siteConfig.whatsappDisplayNumber}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC] hover:bg-[#F2E8DC] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#8B263E] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8B263E] font-bold uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <span className="text-sm font-medium text-[#2C1810] group-hover:underline">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC] hover:bg-[#F2E8DC] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C13584] text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#C13584] font-bold uppercase tracking-wider block">
                      Instagram
                    </span>
                    <span className="text-sm font-medium text-[#2C1810] group-hover:underline">
                      {siteConfig.instagramHandle}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC]">
                  <div className="w-10 h-10 rounded-xl bg-[#6B555D] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6B555D] font-bold uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-medium text-[#2C1810]">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Note */}
              <div className="pt-4 border-t border-[#F2E8DC] text-xs text-[#8C7688] leading-relaxed">
                We handle each batch handcrafted with care. During peak Diwali and festive weeks, placing your requirements 2-4 days in advance helps ensure smooth preparation and dispatch.
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#EADBCC] shadow-md">
              <h3 className="font-serif font-bold text-2xl text-[#2C1810] mb-2">
                Send an Order Inquiry
              </h3>
              <p className="text-xs text-[#6B555D] mb-6">
                Fill out the details below. Clicking submit will automatically format and open your custom WhatsApp order message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1810] uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sakshi Shetye"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E5DACD] rounded-xl text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8B263E]/20 focus:border-[#8B263E]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1810] uppercase mb-1.5">
                      Contact / WhatsApp No.
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98200 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E5DACD] rounded-xl text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8B263E]/20 focus:border-[#8B263E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1810] uppercase mb-1.5">
                      Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E5DACD] rounded-xl text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8B263E]/20 focus:border-[#8B263E]"
                    >
                      <option value="Floating & Decorative Candles">Floating &amp; Decorative Candles</option>
                      <option value="Pure-Ghee Panti Diyas">Pure-Ghee Panti Diyas</option>
                      <option value="Pure-Ghee Ful Vatis">Pure-Ghee Ful Vatis</option>
                      <option value="Special Vatis">Special Vatis (Camphor)</option>
                      <option value="Lanterns & Gifts">Lanterns &amp; Gifts</option>
                    </select>
                  </div>

                  {/* Product */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1810] uppercase mb-1.5">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rose-Design Floating Candles"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E5DACD] rounded-xl text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8B263E]/20 focus:border-[#8B263E]"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-semibold text-[#2C1810] uppercase mb-1.5">
                    Estimated Quantity / Pack Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 boxes of 12 pieces"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E5DACD] rounded-xl text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8B263E]/20 focus:border-[#8B263E]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#2C1810] uppercase mb-1.5">
                    Specific Notes or Delivery Pincode
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention custom colour preferences, gifting date, or delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E5DACD] rounded-xl text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8B263E]/20 focus:border-[#8B263E]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0E7266] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#20BA5A] pt-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WhatsApp chat link generated and opened!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
