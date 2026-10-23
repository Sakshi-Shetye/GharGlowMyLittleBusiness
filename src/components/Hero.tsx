import React from 'react';
import { Sparkles, Flame, Heart, ArrowDown, Gift } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onExploreClick: () => void;
  onLightCandleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onLightCandleClick
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#120816] text-[#FAF7F2]">
      {/* Background Image with Dark Atmospheric Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_candlelit_evening_1792780642792.jpg"
          alt="Candlelit evening ambiance with handcrafted diyas and florals"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] scale-105 animate-in fade-in duration-1000"
        />
        {/* Gradients to blend smoothly with dark aubergine palette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-[#120816]/60 to-[#120816]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#120816_85%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        
        {/* Brand Kicker / Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B192E]/60 border border-[#6B283A]/70 text-xs sm:text-sm text-[#F7D6D0] backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span className="font-medium tracking-wide">Artisan Candles &amp; Traditional Pure-Ghee Lights</span>
        </div>

        {/* Main Brand Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#FAF7F2] mb-5 drop-shadow-md">
          GharGlow
        </h1>

        {/* Primary Tagline */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F9D2C6] font-normal mb-6 max-w-3xl mx-auto leading-tight">
          “{siteConfig.tagline}”
        </p>

        {/* Supporting Emotional Line */}
        <p className="text-sm sm:text-base md:text-lg text-[#E2D4DE] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {siteConfig.heroPoem}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D95B72] to-[#B84A62] hover:from-[#C2455C] hover:to-[#9E3E53] text-white font-serif text-base font-semibold rounded-full shadow-xl shadow-[#D95B72]/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Explore Collection
          </button>

          <button
            onClick={onLightCandleClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#25172A]/80 hover:bg-[#38203E] text-[#FAF7F2] font-serif text-base font-medium rounded-full border border-[#5E325F] backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
          >
            <Flame className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]/30" />
            <span>Light a Candle</span>
          </button>
        </div>

      </div>

      {/* Bottom 3 Icon-Led Brand Promises from Section 3 */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[#3E2344]/60 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
          
          <div className="flex items-center justify-center sm:justify-start gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-[#2C182B] border border-[#522946] flex items-center justify-center text-[#E8998D] group-hover:scale-110 transition-transform shadow-inner shrink-0">
              <Heart className="w-5 h-5 text-[#E8998D]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">Handmade with Care</h4>
              <p className="text-xs text-[#BBA6B7]">Thoughtfully crafted for meaningful moments</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-[#2C182B] border border-[#522946] flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform shadow-inner shrink-0">
              <Flame className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">A Touch of Tradition</h4>
              <p className="text-xs text-[#BBA6B7]">Rooted in timeless Vedic ghee lighting rituals</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-[#2C182B] border border-[#522946] flex items-center justify-center text-[#D95B72] group-hover:scale-110 transition-transform shadow-inner shrink-0">
              <Gift className="w-5 h-5 text-[#D95B72]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">Thoughtful Gifting</h4>
              <p className="text-xs text-[#BBA6B7]">Boutique packaging for loved ones near &amp; far</p>
            </div>
          </div>

        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <button
          onClick={onExploreClick}
          aria-label="Scroll down to collection"
          className="p-1.5 rounded-full text-[#A58BA0] hover:text-[#FAF7F2] transition-colors animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
