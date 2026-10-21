import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { VERIFIED_CATEGORIES, Category } from '../data/businessData';

interface CategoryGridProps {
  onSelectCategory: (categorySlug: string) => void;
  selectedCategory: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  onSelectCategory, 
  selectedCategory 
}) => {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0b6b57] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0b6b57]"></span>
              Therapeutic Portfolios
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Outfit']">
              Targeted Wellness & Healthcare Specialties
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Formulated to address specific physiological needs across all stages of family health and clinical care.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onSelectCategory('all')}
              className={`text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#0b6b57] text-white border-[#0b6b57]'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Browse All Categories (12)
            </button>
          </div>
        </div>

        {/* 12 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {VERIFIED_CATEGORIES.map((category: Category) => {
            const isSelected = selectedCategory === category.slug;
            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.slug)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col ${
                  isSelected 
                    ? 'border-[#0b6b57] bg-emerald-50/40 ring-2 ring-[#0b6b57]/20 shadow-md' 
                    : 'border-slate-200/80 bg-white hover:border-[#0b6b57]/40 hover:shadow-md'
                }`}
              >
                {/* Category Card Header with Image */}
                <div className="relative h-40 bg-slate-50 overflow-hidden border-b border-slate-100">
                  <img
                    src={category.cardImage}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback image gradient if asset is not cached
                      e.currentTarget.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  {category.badge && (
                    <span className="absolute top-3 left-3 bg-[#0b6b57] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
                      {category.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-sm font-bold tracking-tight line-clamp-1 font-['Outfit']">
                      {category.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Category Description & Meta */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                    <span className="font-semibold text-[#0b6b57] group-hover:underline">
                      {isSelected ? "Currently Selected" : "Filter Products"}
                    </span>
                    <span className="text-slate-400">
                      ID: #{category.id}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
