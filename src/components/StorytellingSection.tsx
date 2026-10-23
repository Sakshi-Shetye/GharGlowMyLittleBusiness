import React from 'react';
import { Heart, Sparkles, Flame, Coffee, Moon } from 'lucide-react';

export const StorytellingSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7F2] text-[#2C1810] relative overflow-hidden">
      {/* Decorative floral watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAD2CF]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 10-B: The Feeling of Home */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4E8E1] border border-[#E8DACF] rounded-full text-xs text-[#8B263E]">
              <Heart className="w-3.5 h-3.5 text-[#B84A62] fill-current" />
              <span>The Emotion of Home</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C1810] tracking-tight leading-tight">
              Somewhere, a Little Light Feels Like Home.
            </h2>

            <p className="font-serif italic text-xl text-[#7A4050] leading-relaxed">
              “For the moments that make a place feel like home.”
            </p>

            <p className="text-sm sm:text-base text-[#5A454E] leading-relaxed">
              For the student missing home after a long day. For the family gathering around familiar traditions. For the quiet evenings when a familiar fragrance brings back a thousand memories. GharGlow celebrates the little lights that make ordinary moments feel special.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-2xl border border-[#EADBCC] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#FCE8EB] text-[#B84A62] flex items-center justify-center mb-2">
                  <Flame className="w-4 h-4 text-[#B84A62]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#2C1810] mb-1">A familiar fragrance</h4>
                <p className="text-xs text-[#7A616A]">Rose attar and pure cow ghee bring back the timeless nostalgia of festival mornings.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#EADBCC] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#FFF2DE] text-[#B45309] flex items-center justify-center mb-2">
                  <Moon className="w-4 h-4 text-[#B45309]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#2C1810] mb-1">Peaceful evenings</h4>
                <p className="text-xs text-[#7A616A]">A soft dancing flame that calms the mind after a demanding day in the city.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/src/assets/images/about_ghee_lighting_ritual_1792780644465.jpg"
                alt="Traditional brass panti diya with golden pure ghee flame and rose petals"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-serif italic text-sm sm:text-base">
                  Every pure-ghee flame carries a blessing of peace, warmth, and togetherness.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Section 10-E: Lifestyle Showcase */}
        <div className="bg-[#241326] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#3E2344]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#E8998D] font-semibold block mb-2">
              Lifestyle Showcase
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] tracking-tight mb-3">
              The Little Rituals That Bring Us Closer.
            </h3>
            <p className="text-sm sm:text-base text-[#D4C3D0] leading-relaxed">
              Whether floating in a festive brass urli with fresh jasmine or illuminating your prayer altar, GharGlow lights make every corner feel loved and sacred.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden bg-[#180E1C] border border-[#3E2344] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/images/hero_candlelit_evening_1792780642792.jpg"
                  alt="Candlelit festive dining table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-base text-[#FAF7F2] mb-1">Festive Celebrations</h4>
                <p className="text-xs text-[#A58BA0]">Warm ambient illumination for Diwali, Dhanteras, family feasts, and weddings.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#180E1C] border border-[#3E2344] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/images/lifestyle_festive_gifting_1792780643320.jpg"
                  alt="Thoughtful handmade candle gifting presentation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-base text-[#FAF7F2] mb-1">Heartfelt Gifting</h4>
                <p className="text-xs text-[#A58BA0]">Curated boxes that express care and warmth across distances.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#180E1C] border border-[#3E2344] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/product_rose_tealight.jpg"
                  alt="Rose scented tea lights arranged in heart formation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-base text-[#FAF7F2] mb-1">Everyday Serenity</h4>
                <p className="text-xs text-[#A58BA0]">Unwind into peace with natural rose attar and gentle candlelight.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
