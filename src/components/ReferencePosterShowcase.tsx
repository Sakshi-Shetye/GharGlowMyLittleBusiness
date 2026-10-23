import React from 'react';
import { Product } from '../types';
import { Leaf, Heart, Sparkles, Gift, Home, ArrowUpRight, MessageCircle } from 'lucide-react';
import { buildProductWhatsAppMessage, buildWhatsAppLink } from '../config/siteConfig';

interface ReferencePosterShowcaseProps {
  products: Product[];
  onOpenProductModal: (product: Product) => void;
  onLaunch3DStudio: (productId: string) => void;
}

export const ReferencePosterShowcase: React.FC<ReferencePosterShowcaseProps> = ({
  products,
  onOpenProductModal,
  onLaunch3DStudio
}) => {
  const floatingCandle = products.find(p => p.id === 'rose-floating');
  const teaLightCandle = products.find(p => p.id === 'rose-tealight');
  const ladooCandle = products.find(p => p.id === 'ladoo-candles');

  const handleOrder = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultPack = product.packOptions[0]?.label || 'Standard Pack';
    const msg = buildProductWhatsAppMessage(
      product.name,
      product.categoryLabel,
      defaultPack,
      1,
      product.priceDisplay || '₹' + product.price
    );
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-20 bg-[#FDF9F3] text-[#2C1810] overflow-hidden border-b border-[#E8DCCF]">
      {/* Delicate floral / warm petal aesthetic background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#8B263E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Decorative floral blurs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#FAD2CF]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FEE9C8]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poster Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#9E3E53] -rotate-3 inline-block">
              Handmade with Love ♡
            </span>
          </div>

          <h2 className="font-serif italic font-normal text-4xl sm:text-6xl md:text-7xl text-[#3C1E28] tracking-tight mb-2">
            Scented Candles
          </h2>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold tracking-widest text-[#7C5A64] uppercase mb-4">
            <span>SMALL CANDLES</span>
            <span className="text-[#B84A62]">♥</span>
            <span>BIG VIBES</span>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#5A3844] max-w-xl mx-auto leading-relaxed">
            “Perfect for gifting, celebrations or just to make your every moment brighter!”
          </p>
        </div>

        {/* 3 Arched Signature Boutique Cards matching the exact Reference Poster layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-14">
          
          {/* Card 1: Rose Scented Floating Candles */}
          {floatingCandle && (
            <div 
              onClick={() => onOpenProductModal(floatingCandle)}
              className="group cursor-pointer rounded-t-[44px] rounded-b-3xl bg-gradient-to-b from-[#FDE8E5] to-[#FCE1DD] p-4 sm:p-5 flex flex-col justify-between border border-[#F3C5BD] shadow-lg shadow-[#E8998D]/10 hover:shadow-2xl hover:shadow-[#E8998D]/25 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div>
                {/* Product Image Window with Rounded Arch Top */}
                <div className="relative aspect-[4/4.4] rounded-t-[34px] rounded-b-2xl overflow-hidden bg-white shadow-inner mb-5">
                  <img
                    src={floatingCandle.image}
                    alt={floatingCandle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#8B263E] shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                    <span>Handcrafted</span>
                  </div>
                </div>

                {/* Title & Decorative Icon */}
                <div className="text-center px-2">
                  <div className="w-9 h-9 mx-auto mb-2 text-[#9E3E53] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
                      <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z" strokeDasharray="2 2" />
                      <path d="M12 7c2 2 3 3.5 3 5a3 3 0 0 1-6 0c0-1.5 1-3 3-5z" />
                    </svg>
                  </div>
                  
                  <h3 className="font-serif italic text-2xl text-[#5A1C2C] font-semibold leading-tight mb-2">
                    Rose Scented Floating Candles ♡
                  </h3>

                  <p className="font-serif italic text-sm text-[#6C3442] mb-4">
                    Float, glow, spread happiness. ♡
                  </p>
                </div>
              </div>

              {/* Price & Pieces Brush Badge */}
              <div className="pt-2">
                <div className="bg-[#D95B72] text-white py-2.5 px-4 rounded-full text-center shadow-md shadow-[#D95B72]/30 mb-3 group-hover:bg-[#C2455C] transition-colors">
                  <div className="text-[11px] tracking-wider uppercase font-semibold text-[#FFE6EB]">12 PIECES</div>
                  <div className="font-serif font-bold text-2xl leading-none mt-0.5">₹150</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLaunch3DStudio('rose-floating');
                    }}
                    className="py-2 px-3 bg-white/80 hover:bg-white text-[#5A1C2C] font-medium rounded-xl border border-[#F3C5BD] transition-colors flex items-center justify-center gap-1"
                  >
                    <span>3D View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => handleOrder(floatingCandle, e)}
                    className="py-2 px-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-xl shadow transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Rose Scented Candles (Tea-Lights) */}
          {teaLightCandle && (
            <div 
              onClick={() => onOpenProductModal(teaLightCandle)}
              className="group cursor-pointer rounded-t-[44px] rounded-b-3xl bg-gradient-to-b from-[#FCE5E8] to-[#FAD4DB] p-4 sm:p-5 flex flex-col justify-between border border-[#F3B7C3] shadow-lg shadow-[#E8998D]/15 hover:shadow-2xl hover:shadow-[#E8998D]/30 transition-all duration-300 transform hover:-translate-y-2 md:-translate-y-2 relative"
            >
              {/* Highlight ribbon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5A1C2C] text-[#FAF7F2] text-[10px] tracking-widest uppercase font-semibold py-1 px-3.5 rounded-full shadow-md z-10">
                Most Loved
              </div>

              <div>
                {/* Product Image Window */}
                <div className="relative aspect-[4/4.4] rounded-t-[34px] rounded-b-2xl overflow-hidden bg-white shadow-inner mb-5">
                  <img
                    src={teaLightCandle.image}
                    alt={teaLightCandle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#8B263E] shadow-sm flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#E11D48] fill-current" />
                    <span>Rose Aroma</span>
                  </div>
                </div>

                {/* Title & Decorative Icon */}
                <div className="text-center px-2">
                  <div className="w-9 h-9 mx-auto mb-2 text-[#9E3E53] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  
                  <h3 className="font-serif italic text-2xl text-[#5A1C2C] font-semibold leading-tight mb-2">
                    Rose Scented Candles ♡
                  </h3>

                  <p className="font-serif italic text-sm text-[#6C3442] mb-4">
                    Soft glow. Soothing fragrance. Pure happiness. ♡
                  </p>
                </div>
              </div>

              {/* Price & Pieces Brush Badge */}
              <div className="pt-2">
                <div className="bg-[#CF4E67] text-white py-2.5 px-4 rounded-full text-center shadow-md shadow-[#CF4E67]/30 mb-3 group-hover:bg-[#B83E55] transition-colors">
                  <div className="text-[11px] tracking-wider uppercase font-semibold text-[#FFE4EA]">12 PIECES</div>
                  <div className="font-serif font-bold text-2xl leading-none mt-0.5">₹160</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLaunch3DStudio('rose-tealight');
                    }}
                    className="py-2 px-3 bg-white/80 hover:bg-white text-[#5A1C2C] font-medium rounded-xl border border-[#F3B7C3] transition-colors flex items-center justify-center gap-1"
                  >
                    <span>3D View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => handleOrder(teaLightCandle, e)}
                    className="py-2 px-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-xl shadow transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Diwali Candles / Motichoor Ladoo */}
          {ladooCandle && (
            <div 
              onClick={() => onOpenProductModal(ladooCandle)}
              className="group cursor-pointer rounded-t-[44px] rounded-b-3xl bg-gradient-to-b from-[#FDF0DE] to-[#FBE2C1] p-4 sm:p-5 flex flex-col justify-between border border-[#F5CE9B] shadow-lg shadow-[#D97706]/10 hover:shadow-2xl hover:shadow-[#D97706]/20 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div>
                {/* Product Image Window */}
                <div className="relative aspect-[4/4.4] rounded-t-[34px] rounded-b-2xl overflow-hidden bg-white shadow-inner mb-5">
                  <img
                    src={ladooCandle.image}
                    alt={ladooCandle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#B45309] shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                    <span>Festive Edition</span>
                  </div>
                </div>

                {/* Title & Decorative Icon */}
                <div className="text-center px-2">
                  <div className="w-9 h-9 mx-auto mb-2 text-[#9A5B20] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
                      <path d="M12 2c-.5 2-2 4-2 7a4 4 0 0 0 8 0c0-3-1.5-5-2-7" />
                      <path d="M4 14c0 4 3.5 7 8 7s8-3 8-7H4z" />
                    </svg>
                  </div>
                  
                  <h3 className="font-serif italic text-2xl text-[#673B11] font-semibold leading-tight mb-2">
                    Diwali Candles ♡
                  </h3>

                  <p className="font-serif italic text-sm text-[#7D4919] mb-4">
                    Light up your Diwali with the warm glow of our handcrafted candles. ♡
                  </p>
                </div>
              </div>

              {/* Price & Pieces Brush Badge */}
              <div className="pt-2">
                <div className="bg-[#B87333] text-white py-2.5 px-4 rounded-full text-center shadow-md shadow-[#B87333]/30 mb-3 group-hover:bg-[#A36327] transition-colors">
                  <div className="text-[11px] tracking-wider uppercase font-semibold text-[#FDF0DE]">6 PIECES</div>
                  <div className="font-serif font-bold text-2xl leading-none mt-0.5">₹140</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLaunch3DStudio('ladoo-candles');
                    }}
                    className="py-2 px-3 bg-white/80 hover:bg-white text-[#673B11] font-medium rounded-xl border border-[#F5CE9B] transition-colors flex items-center justify-center gap-1"
                  >
                    <span>3D View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => handleOrder(ladooCandle, e)}
                    className="py-2 px-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-xl shadow transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 5 Icon-Led Brand Promises from Reference Poster */}
        <div className="bg-[#F2E8DC]/80 backdrop-blur-sm border border-[#E5D7C7] rounded-3xl p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            
            <div className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E4ECE4] text-[#4A6B53] flex items-center justify-center mb-2 shadow-sm">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-serif font-medium text-sm text-[#3E2420]">Premium Quality Wax</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FCE8EB] text-[#B84A62] flex items-center justify-center mb-2 shadow-sm">
                <Heart className="w-6 h-6 fill-[#B84A62]/20" />
              </div>
              <span className="font-serif font-medium text-sm text-[#3E2420]">Handmade with Love</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FFF2DE] text-[#B45309] flex items-center justify-center mb-2 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-serif font-medium text-sm text-[#3E2420]">Perfect for Gifting</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F3EBF9] text-[#7A3E8A] flex items-center justify-center mb-2 shadow-sm">
                <Gift className="w-6 h-6" />
              </div>
              <span className="font-serif font-medium text-sm text-[#3E2420]">Ideal for Celebrations</span>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col items-center p-3 rounded-2xl hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E5EEF5] text-[#2C5282] flex items-center justify-center mb-2 shadow-sm">
                <Home className="w-6 h-6" />
              </div>
              <span className="font-serif font-medium text-sm text-[#3E2420]">Festive & Everyday Use</span>
            </div>

          </div>
        </div>

        {/* Bottom Handwritten Signature Banner matching Poster */}
        <div className="text-center pt-2">
          <p className="font-handwriting text-2xl sm:text-3xl text-[#5A1C2C] flex items-center justify-center gap-2 flex-wrap">
            <span>Because every moment deserves a little glow ♡</span>
            <span className="bg-[#D95B72] text-white px-4 py-1 rounded-full text-base font-sans font-semibold tracking-wide shadow-md">
              DM now to place order ♡
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
