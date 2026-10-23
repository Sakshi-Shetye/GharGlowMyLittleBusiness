import React, { useState } from 'react';
import { Product } from '../types';
import { MessageCircle, Eye, Box, ArrowUpRight, Heart, Sparkles, Check } from 'lucide-react';
import { buildProductWhatsAppMessage, buildWhatsAppLink } from '../config/siteConfig';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onLaunch3DStudio?: (productId: string) => void;
  onAddToCart?: (product: Product, selectedPack: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onLaunch3DStudio,
  onAddToCart
}) => {
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const currentPack = product.packOptions[selectedPackIndex] || product.packOptions[0];

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const priceText = currentPack.price ? `₹${currentPack.price}` : product.priceDisplay || 'Ask for Price';
    const message = buildProductWhatsAppMessage(
      product.name,
      product.categoryLabel,
      currentPack.label,
      1,
      priceText
    );
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, currentPack.label);
      setAddedNotice(true);
      setTimeout(() => setAddedNotice(false), 2000);
    }
  };

  const has3D = ['panti-diya', 'rose-floating', 'ladoo-candles', 'rose-tealight', 'green-rose-vati', 'kewra-vati', 'chandan-vati'].includes(product.id);

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group cursor-pointer rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-xl hover:border-[#D98E9D]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Product Image Window with Contain / Proper Ratio */}
        <div className="relative aspect-square w-full bg-[#FBF7F2] p-3 overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Category kicker badge */}
          <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium text-[#7C4A5A] border border-[#EADCCC]">
            {product.categoryLabel}
          </div>

          {/* Favorite heart button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            title="Save to favorites"
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#7C4A5A] hover:text-[#D95B72] hover:bg-white transition-colors shadow-sm"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-[#D95B72] text-[#D95B72]' : ''}`} />
          </button>

          {/* 3D Model Available Pill */}
          {has3D && (
            <div className="absolute bottom-3 left-3 bg-[#1F1424]/85 backdrop-blur-md text-[#FAD2CF] px-2 py-0.5 rounded text-[10px] font-medium flex items-center gap-1 border border-[#3E2344]">
              <Sparkles className="w-2.5 h-2.5 text-[#F59E0B]" />
              <span>3D Model Ready</span>
            </div>
          )}
        </div>

        {/* Content Info */}
        <div className="p-4 sm:p-5">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C1810] group-hover:text-[#8B263E] transition-colors leading-snug mb-1.5 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-xs text-[#6B555D] line-clamp-2 leading-relaxed mb-4">
            {product.shortDesc}
          </p>

          {/* Pack Options Selector (if multiple) */}
          <div className="mb-4">
            <span className="text-[11px] font-medium text-[#8C7688] uppercase tracking-wider block mb-1.5">
              Select Pack Size:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.packOptions.map((pack, idx) => (
                <button
                  key={pack.label}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPackIndex(idx);
                  }}
                  className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                    selectedPackIndex === idx
                      ? 'bg-[#8B263E] text-white border-[#8B263E] font-medium shadow-sm'
                      : 'bg-[#F9F5F0] text-[#553E45] border-[#E5DACD] hover:bg-[#F2EAE0]'
                  }`}
                >
                  {pack.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Status */}
          <div className="flex items-baseline justify-between pt-2 border-t border-[#F2E8DC]">
            <div>
              <span className="text-[10px] text-[#8C7688] uppercase block">Price</span>
              <span className="font-serif text-xl font-bold text-[#8B263E]">
                {currentPack.price ? `₹${currentPack.price}` : product.priceDisplay || 'Ask for Price'}
              </span>
            </div>

            {has3D && onLaunch3DStudio && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onLaunch3DStudio(product.id);
                }}
                className="text-xs font-semibold text-[#8B263E] hover:text-[#5A1C2C] flex items-center gap-1 hover:underline"
              >
                <span>3D View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 pt-0 bg-white grid grid-cols-2 gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          className="py-2.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EDE4] text-[#42222E] font-medium text-xs border border-[#E5D7C7] transition-colors flex items-center justify-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Details</span>
        </button>

        <button
          onClick={handleWhatsAppOrder}
          className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1E9F52] hover:from-[#20BA5A] hover:to-[#188544] text-white font-semibold text-xs shadow-md shadow-[#25D366]/20 transition-all flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
