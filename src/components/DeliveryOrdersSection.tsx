import React from 'react';
import { Truck, MapPin, PackageCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';

export const DeliveryOrdersSection: React.FC = () => {
  const handleStartOrder = () => {
    const msg = `Namaste GharGlow! 🕯️ I would like to place an order. Please let me know what varieties are ready for dispatch.`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="delivery" className="py-24 bg-[#F5ECE1] text-[#2C1810] border-t border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 10-G: How to Order (3 Steps) */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B263E] mb-2 block">
              Simple &amp; Personal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1810] tracking-tight mb-3">
              How to Order in 3 Simple Steps
            </h2>
            <p className="text-xs sm:text-sm text-[#6B555D]">
              Direct boutique ordering with personal assistance over WhatsApp for every order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm relative group hover:border-[#8B263E] transition-all">
              <div className="text-3xl font-serif font-bold text-[#E5D7C7] group-hover:text-[#8B263E] transition-colors mb-4">
                01
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C1810] mb-2">
                Explore Your Favourites
              </h3>
              <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
                Browse candles, traditional pure-ghee products, and gift-worthy varieties in our catalog or 3D studio.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm relative group hover:border-[#8B263E] transition-all">
              <div className="text-3xl font-serif font-bold text-[#E5D7C7] group-hover:text-[#8B263E] transition-colors mb-4">
                02
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C1810] mb-2">
                Message Us on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
                Share the product name, pack size, quantity, and any custom requirements directly with our team.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm relative group hover:border-[#8B263E] transition-all">
              <div className="text-3xl font-serif font-bold text-[#E5D7C7] group-hover:text-[#8B263E] transition-colors mb-4">
                03
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C1810] mb-2">
                Confirm Your Order
              </h3>
              <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
                Confirm availability, price, delivery charges, payment, and dispatch arrangements directly before payment.
              </p>
            </div>

          </div>
        </div>

        {/* Section 10-F: Delivery & Orders Service Modes */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EADBCC] shadow-md">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#8B263E] font-semibold block mb-2">
              Dispatch &amp; Fulfillment
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1810] mb-3">
              Delivery &amp; Collection Options
            </h3>
            <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
              Every handcrafted piece is packed with delicate bubble wrap and protective boxing to preserve fragile wax petals and diya shells.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC]">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0EA] text-[#3D724D] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#2C1810] mb-1.5">
                Local Delivery
              </h4>
              <p className="text-xs text-[#6B555D] leading-relaxed">
                Available across Mumbai and selected suburban locations. Courier partners and hyper-local delivery arranged on request.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC]">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2DE] text-[#B45309] flex items-center justify-center mb-3">
                <PackageCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#2C1810] mb-1.5">
                Pickup by Arrangement
              </h4>
              <p className="text-xs text-[#6B555D] leading-relaxed">
                Convenient local pickup can be coordinated directly in Mumbai after order packing confirmation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC]">
              <div className="w-10 h-10 rounded-xl bg-[#F3EBF9] text-[#7A3E8A] flex items-center justify-center mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#2C1810] mb-1.5">
                Courier Dispatch
              </h4>
              <p className="text-xs text-[#6B555D] leading-relaxed">
                Pan-India postal and courier dispatch available for bulk gifting, corporate Diwali hampers, and family orders.
              </p>
            </div>

          </div>

          {/* Direct Notice & CTA */}
          <div className="pt-6 border-t border-[#EADBCC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#7A616A] max-w-xl">
              * Note: Delivery availability, exact freight costs, festive packaging, and dispatch timelines are calculated and confirmed with you directly before payment is accepted.
            </p>

            <button
              onClick={handleStartOrder}
              className="py-3 px-6 bg-[#8B263E] hover:bg-[#721F32] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md flex items-center gap-2 shrink-0 cursor-pointer transition-colors"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
