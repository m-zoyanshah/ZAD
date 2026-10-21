import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  Eye, 
  Plus, 
  Check, 
  ArrowUpDown, 
  X,
  Package,
  Layers
} from 'lucide-react';
import { VERIFIED_PRODUCTS, VERIFIED_CATEGORIES, Product } from '../data/businessData';

interface ProductCatalogProps {
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: number[];
  selectedCategorySlug: string;
  onSelectCategorySlug: (slug: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenProductModal,
  onAddToCart,
  cartProductIds,
  selectedCategorySlug,
  onSelectCategorySlug,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return VERIFIED_PRODUCTS.filter((product) => {
      const matchesCategory = 
        selectedCategorySlug === 'all' || 
        product.categorySlug === selectedCategorySlug;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.sku.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.dosageForm.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured/default order
    });
  }, [searchQuery, selectedCategorySlug, sortBy]);

  return (
    <section id="products" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0b6b57] mb-2 inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0b6b57]"></span>
            Product Portfolio & Formulations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Outfit']">
            Pharmaceutical & Nutraceutical Formulations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Manufactured to rigorous pharmacopeial and DRAP specifications. Transparent formulations, genuine batch records, and verified pricing in PKR.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by formulation name, SKU (e.g. ZAD-D, Vintima), or dosage form..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0b6b57]/20 focus:border-[#0b6b57] text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold py-2.5 px-3 text-slate-700 focus:outline-hidden focus:border-[#0b6b57]"
              >
                <option value="featured">Featured Catalog</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Quick Category Filter Pills */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            <button
              onClick={() => onSelectCategorySlug('all')}
              className={`px-3 py-1.5 rounded-lg shrink-0 font-medium transition-colors ${
                selectedCategorySlug === 'all'
                  ? 'bg-[#0b6b57] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Formulations ({VERIFIED_PRODUCTS.length})
            </button>
            <button
              onClick={() => onSelectCategorySlug('gynae-aesthetics')}
              className={`px-3 py-1.5 rounded-lg shrink-0 font-medium transition-colors ${
                selectedCategorySlug === 'gynae-aesthetics'
                  ? 'bg-[#0b6b57] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Gynae Aesthetics / Vintima (11)
            </button>
            <button
              onClick={() => onSelectCategorySlug('bone-joint-muscle-health')}
              className={`px-3 py-1.5 rounded-lg shrink-0 font-medium transition-colors ${
                selectedCategorySlug === 'bone-joint-muscle-health'
                  ? 'bg-[#0b6b57] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Vitamin D & Bone Health (1)
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>Showing <strong>{filteredProducts.length}</strong> verified formulations</span>
          {selectedCategorySlug !== 'all' && (
            <button
              onClick={() => onSelectCategorySlug('all')}
              className="text-[#0b6b57] hover:underline font-semibold"
            >
              Clear category filter
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No products match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your search terms or clearing your category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategorySlug('all');
              }}
              className="bg-[#0b6b57] text-white text-xs font-semibold px-4 py-2 rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inCart = cartProductIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#0b6b57]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
                >
                  {/* Product Card Image Container */}
                  <div className="relative aspect-square bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Dosage badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs border border-slate-200/80 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      {product.dosageForm}
                    </div>

                    {/* Stock indicator */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-50 text-[#0b6b57] text-[10px] font-semibold px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0b6b57]"></span>
                      In Stock
                    </div>

                    {/* Quick view button overlay */}
                    <button
                      onClick={() => onOpenProductModal(product)}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-700 hover:text-[#0b6b57] p-2 rounded-lg shadow-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Quick inspection"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                        <span className="font-medium text-[#0b6b57] truncate max-w-[60%]">
                          {product.category}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">
                          {product.volumeOrWeight}
                        </span>
                      </div>

                      <h3 
                        onClick={() => onOpenProductModal(product)}
                        className="text-sm font-bold text-slate-900 group-hover:text-[#0b6b57] transition-colors cursor-pointer line-clamp-1 font-['Outfit']"
                      >
                        {product.name}
                      </h3>

                      <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Pricing & Actions */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <span className="text-xs text-slate-500 font-medium">Price: </span>
                          <span className="text-base font-extrabold text-slate-900 font-['Outfit']">
                            PKR {product.price.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {product.sku.split('-')[0]}
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onAddToCart(product)}
                          className={`text-xs font-semibold py-2 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                            inCart
                              ? 'bg-emerald-100 text-[#0b6b57]'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {inCart ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>In Bag</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`https://wa.me/923252408484?text=Hello%20ZAD%20Life%20Sciences,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku},%20PKR%20${product.price})`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold py-2 px-2 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-xs"
                          title="Instant order via WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#83b735]" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
