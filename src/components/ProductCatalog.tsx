import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { productCategories } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Sparkles, Filter } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  onViewProductDetails: (product: Product) => void;
  onLaunch3DStudio: (productId: string) => void;
  onAddToCart: (product: Product, selectedPack: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onViewProductDetails,
  onLaunch3DStudio,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === 'all' ? true : p.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.fragranceNotes && p.fragranceNotes.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  return (
    <section id="collection" className="py-20 bg-[#FAF7F2] text-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EBE2] border border-[#E5DACD] rounded-full text-xs text-[#8B263E] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Complete Boutique Catalogue</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C1810] tracking-tight mb-3">
            Our Handcrafted Collection
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#6B555D] max-w-2xl mx-auto">
            Explore dedicated selections of fragrant artisan candles alongside sacred pure-ghee panti diyas and festive ful vatis.
          </p>
        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#EFE7DC] rounded-2xl border border-[#E2D5C5] w-full md:w-auto">
            {productCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as ProductCategory)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#8B263E] shadow-sm font-semibold'
                      : 'text-[#6B555D] hover:text-[#2C1810] hover:bg-white/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#FBE8EC] text-[#8B263E]' : 'bg-[#E5DACD] text-[#6B555D]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C7688] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fragrance, diya, rose..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#E5DACD] rounded-xl text-xs sm:text-sm text-[#2C1810] placeholder-[#A58BA0] focus:outline-none focus:ring-2 focus:ring-[#8B263E]/20 focus:border-[#8B263E]"
            />
          </div>

        </div>

        {/* Category Description Banner */}
        <div className="bg-[#FFFDFB] border border-[#EADBCC] rounded-2xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#7C5A64]">
            <Filter className="w-4 h-4 text-[#8B263E]" />
            <span>
              Showing <strong className="text-[#2C1810]">{filteredProducts.length}</strong> items in{' '}
              <span className="text-[#8B263E] font-medium">
                {productCategories.find(c => c.id === activeCategory)?.label}
              </span>
            </span>
          </div>
          <span className="text-xs text-[#8C7688] hidden sm:inline">
            All prices in Indian Rupees (₹) · Custom pack requests welcome on WhatsApp
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProductDetails}
                onLaunch3DStudio={onLaunch3DStudio}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#EADBCC] rounded-3xl p-8">
            <p className="font-serif text-xl text-[#2C1810] mb-2">No products found matching your search</p>
            <p className="text-xs text-[#8C7688] mb-4">Try clearing your search query or selecting All Products.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#8B263E] text-white text-xs font-semibold rounded-xl hover:bg-[#721F32] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
