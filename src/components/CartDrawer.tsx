import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink } from '../config/siteConfig';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [orderNote, setOrderNote] = useState('');

  if (!isOpen) return null;

  // Calculate totals
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => {
    const unitPrice = item.selectedPack.price || 0;
    return sum + unitPrice * item.quantity;
  }, 0);

  const hasUnpricedItems = items.some(item => !item.selectedPack.price);

  const handleCheckoutWhatsApp = () => {
    let orderLines = items.map((item, idx) => {
      const priceText = item.selectedPack.price
        ? `₹${item.selectedPack.price} × ${item.quantity} = ₹${item.selectedPack.price * item.quantity}`
        : `Ask for Price (Qty: ${item.quantity})`;
      return `${idx + 1}. ${item.product.name}
   • Pack: ${item.selectedPack.label}
   • Quantity: ${item.quantity}
   • Price: ${priceText}`;
    }).join('\n\n');

    const totalText = totalPrice > 0
      ? `₹${totalPrice} (excluding delivery) ${hasUnpricedItems ? '+ items with price on request' : ''}`
      : 'Price to be confirmed';

    const fullMessage = `Namaste GharGlow! 🕯️

I would like to place an order for the following items:

${orderLines}

-----------------------------
• Estimated Order Total: ${totalText}
${deliveryPincode.trim() ? `• Delivery Pincode: ${deliveryPincode.trim()}\n` : ''}${orderNote.trim() ? `• Custom Note: ${orderNote.trim()}\n` : ''}
Please confirm availability, delivery charges, and payment details. Thank you!`;

    window.open(buildWhatsAppLink(fullMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#EADBCC] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#EADBCC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8B263E]" />
              <h3 className="font-serif font-bold text-xl text-[#2C1810]">
                Your Order Bag ({totalItems})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#F2E8DC] text-[#5A1C2C] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#D5C2CF] mx-auto mb-3" />
                <p className="font-serif text-lg text-[#2C1810] mb-1">Your order bag is empty</p>
                <p className="text-xs text-[#8C7688] mb-6">Explore our candles and pure-ghee collections to add items.</p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#8B263E] text-white text-xs font-semibold rounded-xl hover:bg-[#721F32] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${index}`}
                  className="p-4 bg-white rounded-2xl border border-[#EADBCC] shadow-sm flex gap-3.5 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain rounded-xl bg-[#FAF7F2] p-1 border border-[#F0E4D8] shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-[#2C1810] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#7A616A]">
                      {item.selectedPack.label}
                    </p>
                    <p className="font-serif text-xs font-bold text-[#8B263E] mt-0.5">
                      {item.selectedPack.price
                        ? `₹${item.selectedPack.price * item.quantity}`
                        : 'Ask for Price'}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center border border-[#EADBCC] rounded-lg overflow-hidden bg-[#FAF7F2]">
                      <button
                        onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:bg-[#EADBCC] text-[#5A1C2C]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#2C1810]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="p-1 hover:bg-[#EADBCC] text-[#5A1C2C]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(index)}
                      className="text-[#9A7A85] hover:text-[#B84A62] text-[11px] flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EADBCC] space-y-4">
              {/* Optional Pincode and Note */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Delivery Pincode (e.g. 400001)"
                  value={deliveryPincode}
                  onChange={(e) => setDeliveryPincode(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-[#FAF7F2] border border-[#EADBCC] rounded-xl text-[#2C1810] placeholder-[#A58BA0] focus:outline-none focus:ring-1 focus:ring-[#8B263E]"
                />
                <input
                  type="text"
                  placeholder="Order note / Festive greeting message (optional)"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-[#FAF7F2] border border-[#EADBCC] rounded-xl text-[#2C1810] placeholder-[#A58BA0] focus:outline-none focus:ring-1 focus:ring-[#8B263E]"
                />
              </div>

              {/* Total Summary */}
              <div className="pt-2 border-t border-[#F2E8DC] flex items-baseline justify-between">
                <span className="text-xs text-[#8C7688]">Estimated Total:</span>
                <span className="font-serif text-2xl font-bold text-[#8B263E]">
                  {totalPrice > 0 ? `₹${totalPrice}` : 'Price on Confirmation'}
                </span>
              </div>

              {/* Order on WhatsApp Button */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0E7266] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm Order on WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs text-[#9A7A85] hover:text-[#5A1C2C]"
              >
                Clear Entire Bag
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
