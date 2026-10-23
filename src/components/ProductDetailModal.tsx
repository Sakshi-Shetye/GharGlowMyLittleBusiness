import React, { useState } from 'react';
import { Product } from '../types';
import { X, MessageCircle, Sparkles, Heart, Plus, Minus, Check, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { buildProductWhatsAppMessage, buildWhatsAppLink } from '../config/siteConfig';

interface ProductDetailModalProps {
  product: Product | null;
  allProducts: Product[];
  onClose: () => void;
  onLaunch3DStudio: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  allProducts,
  onClose,
  onLaunch3DStudio,
  onSelectProduct
}) => {
  if (!product) return null;

  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');
  const [activeImage, setActiveImage] = useState(product.image);

  const currentPack = product.packOptions[selectedPackIndex] || product.packOptions[0];

  const handleWhatsAppOrder = () => {
    const unitPrice = currentPack.price;
    const priceText = unitPrice
      ? `₹${unitPrice} per pack (Total: ₹${unitPrice * quantity})`
      : product.priceDisplay || 'Ask for Price';

    const msg = buildProductWhatsAppMessage(
      product.name,
      product.categoryLabel,
      currentPack.label,
      quantity,
      priceText,
      customNote
    );
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const has3D = ['panti-diya', 'rose-floating', 'ladoo-candles', 'rose-tealight', 'green-rose-vati', 'kewra-vati', 'chandan-vati'].includes(product.id);

  // Related products from same category or complementary
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.isFeatured))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#EADBCC] overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#5A1C2C] border border-[#EADBCC] shadow-sm transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Gallery */}
          <div className="md:col-span-6 p-6 sm:p-8 bg-white border-b md:border-b-0 md:border-r border-[#EADBCC] flex flex-col justify-between">
            <div>
              {/* Main Image Display */}
              <div className="relative aspect-square w-full rounded-2xl bg-[#FBF7F2] border border-[#F0E4D8] overflow-hidden p-4 flex items-center justify-center mb-4">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />

                {has3D && (
                  <button
                    onClick={() => {
                      onClose();
                      onLaunch3DStudio(product.id);
                    }}
                    className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#1F1424] hover:bg-[#341F3A] text-[#FAD2CF] text-xs font-semibold rounded-xl shadow-lg flex items-center gap-1.5 border border-[#48284C] transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Open 3D Studio</span>
                  </button>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#FBF7F2] ${
                        activeImage === img ? 'border-[#8B263E] scale-105' : 'border-[#EADBCC] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Authenticity pledge */}
            <div className="mt-4 pt-4 border-t border-[#F2E8DC] flex items-center gap-2 text-xs text-[#7A616A]">
              <ShieldCheck className="w-4 h-4 text-[#8B263E] shrink-0" />
              <span>Authentic original photograph · Accurate handcrafted design</span>
            </div>
          </div>

          {/* Right Column: Product Details & WhatsApp Ordering */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category */}
              <div className="flex items-center justify-between text-xs text-[#8C7688] mb-2">
                <span className="uppercase tracking-wider font-semibold text-[#8B263E]">
                  {product.categoryLabel}
                </span>
                {product.burnTime && (
                  <span className="flex items-center gap-1 text-[#6B555D]">
                    <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{product.burnTime}</span>
                  </span>
                )}
              </div>

              {/* Product Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] leading-tight mb-3">
                {product.name}
              </h2>

              {/* Fragrance Notes */}
              {product.fragranceNotes && (
                <div className="inline-block bg-[#F5ECE3] px-3 py-1 rounded-lg text-xs font-medium text-[#6B4B55] mb-4">
                  Fragrance: {product.fragranceNotes}
                </div>
              )}

              {/* Full Description */}
              <p className="text-sm text-[#553E45] leading-relaxed mb-6">
                {product.fullDesc}
              </p>

              {/* Pack Selection */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-[#2C1810] uppercase tracking-wider mb-2">
                  Select Pack Option
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.packOptions.map((pack, idx) => (
                    <button
                      key={pack.label}
                      onClick={() => setSelectedPackIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedPackIndex === idx
                          ? 'bg-[#8B263E] text-white border-[#8B263E] shadow-sm'
                          : 'bg-white text-[#2C1810] border-[#EADBCC] hover:bg-[#F9F5F0]'
                      }`}
                    >
                      <div className="text-xs font-semibold">{pack.label}</div>
                      <div className={`text-xs mt-1 font-serif ${selectedPackIndex === idx ? 'text-[#FAD2CF]' : 'text-[#8B263E]'}`}>
                        {pack.price ? `₹${pack.price}` : 'Ask for Price'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center gap-4 mb-5">
                <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                  Quantity (Packs):
                </label>
                <div className="flex items-center border border-[#EADBCC] rounded-xl bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-[#F2EAE0] text-[#5A1C2C] transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-semibold text-[#2C1810]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-[#F2EAE0] text-[#5A1C2C] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Optional Custom Note */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Any custom packaging or festive gifting note? (Optional)"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-[#EADBCC] rounded-xl text-[#2C1810] placeholder-[#A58BA0] focus:outline-none focus:ring-1 focus:ring-[#8B263E]"
                />
              </div>
            </div>

            {/* Price & Primary WhatsApp Action */}
            <div className="pt-4 border-t border-[#EADBCC]">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs text-[#8C7688]">Calculated Total</span>
                <span className="font-serif text-2xl font-bold text-[#8B263E]">
                  {currentPack.price ? `₹${currentPack.price * quantity}` : product.priceDisplay || 'Ask for Price'}
                </span>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0E7266] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order on WhatsApp with Instant Details</span>
              </button>
            </div>
          </div>

        </div>

        {/* Related Products Bar */}
        {relatedProducts.length > 0 && (
          <div className="p-6 bg-[#F4EBE0] border-t border-[#EADBCC]">
            <h4 className="font-serif text-sm font-bold text-[#2C1810] mb-3 uppercase tracking-wider">
              You May Also Like
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {relatedProducts.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-[#E5DACD] hover:border-[#8B263E] transition-all cursor-pointer"
                >
                  <img src={rel.image} alt={rel.name} className="w-10 h-10 object-contain rounded-lg bg-[#FAF7F2]" />
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-[#2C1810] truncate">{rel.name}</p>
                    <p className="text-[11px] text-[#8B263E] font-serif">{rel.priceDisplay || 'Ask for Price'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
