import React from 'react';
import { Flame, MessageCircle, Instagram, Mail, MapPin, Heart } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#180E1C] text-[#FAF7F2] border-t border-[#3E2344] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2C182B]">
          
          {/* Col 1 & 2: Brand Lockup & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9E3E53] to-[#F59E0B] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#180E1C] rounded-full flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[#F59E0B]" />
                </div>
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-[#FAF7F2]">
                GharGlow
              </span>
            </div>

            <p className="font-serif italic text-lg text-[#FAD2CF] leading-relaxed">
              “{siteConfig.tagline}”
            </p>

            <p className="text-xs text-[#A58BA0] max-w-sm leading-relaxed">
              {siteConfig.supportingLine}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-full bg-[#2A172B] hover:bg-[#3E2344] text-[#FAD2CF] flex items-center justify-center transition-colors border border-[#3E2344]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppLink("Namaste GharGlow!")}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#2A172B] hover:bg-[#3E2344] text-[#25D366] flex items-center justify-center transition-colors border border-[#3E2344]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                title="Email"
                className="w-9 h-9 rounded-full bg-[#2A172B] hover:bg-[#3E2344] text-[#FAD2CF] flex items-center justify-center transition-colors border border-[#3E2344]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FAF7F2] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#C8B6C5]">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#FAD2CF] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-[#FAD2CF] transition-colors">
                  Our Collection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('interactive-3d')} className="hover:text-[#FAD2CF] transition-colors">
                  Interactive 3D Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FAD2CF] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-us')} className="hover:text-[#FAD2CF] transition-colors">
                  Why GharGlow
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Categories */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FAF7F2] mb-4">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#C8B6C5]">
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-[#FAD2CF] transition-colors">
                  Floating Rose Candles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-[#FAD2CF] transition-colors">
                  Pure-Ghee Panti Diyas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-[#FAD2CF] transition-colors">
                  Star &amp; Square Ful Vatis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-[#FAD2CF] transition-colors">
                  Diwali Motichoor Candles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-[#FAD2CF] transition-colors">
                  Artisanal Lanterns
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & WhatsApp Orders */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FAF7F2] mb-4">
              Orders &amp; Dispatch
            </h4>
            <div className="space-y-3 text-xs text-[#C8B6C5]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8998D] shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>WhatsApp: {siteConfig.whatsappDisplayNumber}</span>
              </div>
              <div className="pt-2">
                <span className="block text-[11px] text-[#8C7688]">Payment Options:</span>
                <span className="text-[#FAF7F2]">UPI / GPay / NetBanking on confirmation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Emotional Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7688] gap-4">
          <p>
            © {new Date().getFullYear()} GharGlow. All rights reserved. Handcrafted in India.
          </p>

          <p className="flex items-center gap-1.5 text-[#A58BA0]">
            <span>A little tradition. A little warmth. A feeling of home.</span>
            <Heart className="w-3.5 h-3.5 text-[#B84A62] fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
};
