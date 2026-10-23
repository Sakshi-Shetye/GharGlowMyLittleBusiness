import React, { useState } from 'react';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReferencePosterShowcase } from './components/ReferencePosterShowcase';
import { ProductStudio3D } from './components/ProductStudio3D';
import { ProductCatalog } from './components/ProductCatalog';
import { StorytellingSection } from './components/StorytellingSection';
import { AboutSection } from './components/AboutSection';
import { DeliveryOrdersSection } from './components/DeliveryOrdersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';

export function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [selected3DProductId, setSelected3DProductId] = useState<string>('panti-diya');

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Launch 3D Studio and scroll smoothly to it
  const handleLaunch3DStudio = (productId: string) => {
    setSelected3DProductId(productId);
    scrollToSection('interactive-3d');
  };

  // Cart operations
  const handleAddToCart = (product: Product, packLabel: string) => {
    const packOption = product.packOptions.find(p => p.label === packLabel) || product.packOptions[0];
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedPack.label === packOption.label
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [...prev, { product, selectedPack: packOption, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setCart(prev => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] selection:bg-[#E8C5B0] selection:text-[#3B1E19]">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
      />

      <main>
        {/* Atmospheric Candlelit Hero */}
        <Hero
          onExploreClick={() => scrollToSection('collection')}
          onLightCandleClick={() => scrollToSection('interactive-3d')}
        />

        {/* Reference Poster Showcase Spotlight (Rose Floating, Rose Scented, Diwali Ladoo) */}
        <ReferencePosterShowcase
          products={products}
          onOpenProductModal={(product) => setActiveModalProduct(product)}
          onLaunch3DStudio={handleLaunch3DStudio}
        />

        {/* Signature Interactive 3D Product Studio & Matchstick Lighting Experience */}
        <ProductStudio3D
          products={products}
          selectedProductId={selected3DProductId}
          onSelectProduct={(id) => setSelected3DProductId(id)}
          onOpenQuickOrder={(product) => setActiveModalProduct(product)}
        />

        {/* Filterable Product Catalog with separated Candles & Pure-Ghee tabs */}
        <ProductCatalog
          products={products}
          onViewProductDetails={(product) => setActiveModalProduct(product)}
          onLaunch3DStudio={handleLaunch3DStudio}
          onAddToCart={handleAddToCart}
        />

        {/* Emotional Storytelling: The Feeling of Home & Lifestyle Rituals */}
        <StorytellingSection />

        {/* About GharGlow & Why Choose Us (4 Pillars) */}
        <AboutSection />

        {/* Delivery, Orders & 3-Step Ordering Guide */}
        <DeliveryOrdersSection />

        {/* Contact Information & Interactive WhatsApp Inquiry Form */}
        <ContactSection products={products} />
      </main>

      {/* Deep Midnight-Aubergine Luxury Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        allProducts={products}
        onClose={() => setActiveModalProduct(null)}
        onLaunch3DStudio={handleLaunch3DStudio}
        onSelectProduct={(prod) => setActiveModalProduct(prod)}
      />

      {/* Shopping Bag / Order Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
