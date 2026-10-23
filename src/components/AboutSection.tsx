import React from 'react';
import { Heart, Palette, Sparkles, Gift } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2] text-[#2C1810] border-t border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 10-C: About GharGlow */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B263E] mb-3 block">
            Our Story &amp; Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C1810] tracking-tight leading-tight mb-6">
            More Than a Little Light — A Feeling of Home.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#553E45] leading-relaxed">
            <p>
              GharGlow brings together the beauty of handcrafted candles and the warmth of traditional Indian lighting rituals. Inspired by familiar fragrances, meaningful celebrations, and the comfort of home, our collection is created for moments worth remembering.
            </p>
            <p>
              From delicate rose-shaped candles to traditional pure-ghee ful vatis and panti diyas, every variety has its own place in the rituals, celebrations, and everyday moments we cherish.
            </p>
          </div>
        </div>

        {/* Section 10-D: Why Choose GharGlow (4 Columns) */}
        <div id="why-us" className="pt-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8C7688] font-medium block mb-2">
              Our Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1810]">
              Why Choose GharGlow
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-md hover:border-[#D98E9D] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FCE8EB] text-[#B84A62] flex items-center justify-center mb-4 shadow-inner">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2C1810] mb-2">
                Handmade with Care
              </h4>
              <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
                Thoughtfully prepared products for meaningful everyday moments and celebrations.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-md hover:border-[#D98E9D] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FFF2DE] text-[#B45309] flex items-center justify-center mb-4 shadow-inner">
                <Palette className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2C1810] mb-2">
                Distinctive Designs
              </h4>
              <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
                From floral candle shapes to traditional ghee-lighting varieties, find something that feels personal.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-md hover:border-[#D98E9D] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0EA] text-[#3D724D] flex items-center justify-center mb-4 shadow-inner">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2C1810] mb-2">
                A Touch of Tradition
              </h4>
              <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
                Lighting inspired by familiar Indian rituals, festive gatherings, and the comfort of home.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-md hover:border-[#D98E9D] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F3EBF9] text-[#7A3E8A] flex items-center justify-center mb-4 shadow-inner">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2C1810] mb-2">
                Thoughtful Gifting
              </h4>
              <p className="text-xs sm:text-sm text-[#6B555D] leading-relaxed">
                Little lights for housewarmings, festive celebrations, weddings, and people you hold close.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
