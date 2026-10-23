import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ShoppingBag, Flame } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Our Collection', target: 'collection' },
    { label: '3D Studio', target: 'interactive-3d' },
    { label: 'About Us', target: 'about' },
    { label: 'Why GharGlow', target: 'why-us' },
    { label: 'Delivery & Orders', target: 'delivery' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  const handleGeneralWhatsApp = () => {
    const msg = `Namaste GharGlow! 🕯️ I'm visiting your website and would like to inquire about your handcrafted candles and pure-ghee collections.`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#180E1C]/95 backdrop-blur-md border-b border-[#3E2344] shadow-xl py-3'
          : 'bg-gradient-to-b from-[#120816]/90 via-[#120816]/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-2 group cursor-pointer whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9E3E53] to-[#F59E0B] p-0.5 flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-[#180E1C] rounded-full flex items-center justify-center">
                <Flame className="w-4 h-4 text-[#F59E0B] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF7F2] group-hover:text-[#FAD2CF] transition-colors leading-none">
                GharGlow
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C8B6C5] font-sans font-medium">
                Artisan Candles &amp; Ghee
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#E2D4DE]">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-[#FAD2CF] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action & cart trigger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Bag / Cart */}
            <button
              onClick={onOpenCart}
              title="View Order Bag"
              className="relative p-2.5 rounded-full bg-[#2A172B] hover:bg-[#3D223F] text-[#FAF7F2] border border-[#48284C] transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#FAF7F2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D95B72] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary WhatsApp Order CTA */}
            <button
              onClick={handleGeneralWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#1E9F52] hover:from-[#20BA5A] hover:to-[#188544] rounded-full shadow-lg shadow-[#25D366]/25 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#FAF7F2] hover:bg-[#2A172B] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#180E1C] border-b border-[#3E2344] px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 mb-5">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left text-base font-medium text-[#FAF7F2] hover:text-[#FAD2CF] py-1.5 border-b border-[#2C182B]"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <button
            onClick={handleGeneralWhatsApp}
            className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp ({siteConfig.whatsappDisplayNumber})</span>
          </button>
        </div>
      )}
    </header>
  );
};
