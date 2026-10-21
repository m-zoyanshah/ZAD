import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  Award, 
  Truck, 
  CheckCircle2,
  Check
} from 'lucide-react';
import { BUSINESS_INFO, VERIFIED_PRODUCTS } from '../data/businessData';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenProductModal: (product: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenProductModal }) => {
  const featuredProduct = VERIFIED_PRODUCTS.find(p => p.sku === "ZAD-D-SOFTGEL2`s") || VERIFIED_PRODUCTS[11];
  const vintimaFeature = VERIFIED_PRODUCTS.find(p => p.id === 53) || VERIFIED_PRODUCTS[3]; // Intimate wash

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-200/80">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-[#0b6b57]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-[#83b735]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Messaging & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Regulatory & Identity Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-[#0b6b57]/20 text-[#0b6b57] text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 text-[#0b6b57]" />
              <span>ZAD Life Sciences (PVT) Ltd. · Karachi, Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 font-['Outfit']">
              Science-Backed <span className="text-[#0b6b57]">Nutraceuticals</span> & Clinical Family Wellness Solutions
            </h1>

            {/* Subtitle with authentic value proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Engineered with pharmaceutical-grade standards, standardized bio-active actives, and cGMP compliance. Delivering evidence-driven vitality supplements, targeted Vitamin D3, and delicate gynae-aesthetic care throughout Pakistan.
            </p>

            {/* Key Quality Pillars (anti-slop clean text list) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#0b6b57]" />
                </div>
                <span>DRAP Nutraceutical Guidelines Adherence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#0b6b57]" />
                </div>
                <span>cGMP Certified Partner Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#0b6b57]" />
                </div>
                <span>Analytical & Bio-Purity Batch Assayed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#0b6b57]" />
                </div>
                <span>Express Nationwide Courier Dispatch</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 bg-[#0b6b57] hover:bg-[#085243] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-colors"
              >
                <span>View Products Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-[#0b6b57] border border-[#0b6b57]/20 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#83b735]" />
                <span>Quick WhatsApp Order Desk</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-slate-600 hover:text-[#0b6b57] text-xs font-semibold py-3 px-3 transition-colors"
              >
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Sector 11-A, North Karachi</span>
              </a>
            </div>

            {/* Customer Assurance Row */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#0b6b57]" />
                Nationwide Delivery (Karachi 24h, Pakistan 48-72h)
              </span>
              <span className="hidden sm:inline text-slate-300">·</span>
              <span className="hidden sm:flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0b6b57]" />
                Direct Company Verification
              </span>
            </div>
          </div>

          {/* Right Column: Verified Product Spotlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Card Container */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#83b735]"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Featured Formulation</span>
                  </div>
                  <span className="text-xs font-semibold text-[#0b6b57] bg-emerald-50 px-2 py-0.5 rounded-md">
                    PKR {featuredProduct.price.toLocaleString()}
                  </span>
                </div>

                {/* Spotlight Image & Badge */}
                <div className="relative my-4 aspect-4/3 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100">
                  <img
                    src={featuredProduct.images[0]}
                    alt={featuredProduct.name}
                    className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {featuredProduct.dosageForm} · {featuredProduct.volumeOrWeight}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="text-xs text-slate-500 font-medium">SKU: {featuredProduct.sku}</div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                    {featuredProduct.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {featuredProduct.shortDescription}
                  </p>
                </div>

                {/* Quick actions for featured item */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenProductModal(featuredProduct)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors text-center"
                  >
                    View Formulation Details
                  </button>
                  <a
                    href={`https://wa.me/923252408484?text=Hello%20ZAD%20Life%20Sciences,%20I%20would%20like%20to%20order%20${encodeURIComponent(featuredProduct.name)}%20(PKR%20${featuredProduct.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#83b735]" />
                    <span>Instant Order</span>
                  </a>
                </div>
              </div>

              {/* Second Floating Badge for Vintima Line */}
              <div 
                onClick={() => onOpenProductModal(vintimaFeature)}
                className="cursor-pointer -mt-6 sm:-mt-8 ml-6 sm:ml-12 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200/90 shadow-md flex items-center gap-3.5 hover:border-[#0b6b57]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src={vintimaFeature.images[0]} 
                    alt="Vintima Range" 
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b6b57]">Specialty Line</span>
                    <span className="text-[10px] text-slate-400">·</span>
                    <span className="text-[10px] font-medium text-slate-500">Gynae Aesthetics</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 truncate font-['Outfit']">
                    Vintima Intimate Care Collection
                  </div>
                  <div className="text-[11px] text-slate-500">10+ specialized botanical formulas</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
