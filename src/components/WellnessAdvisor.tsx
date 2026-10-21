import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Info,
  RefreshCw,
  MessageCircle,
  Plus
} from 'lucide-react';
import { VERIFIED_PRODUCTS, Product, BUSINESS_INFO } from '../data/businessData';

interface WellnessAdvisorProps {
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

interface RegimenPlan {
  id: string;
  title: string;
  category: string;
  targetNeed: string;
  recommendedProductSku: string;
  clinicalRationale: string;
  regimenTip: string;
  lifestyleAdvice: string;
}

const REGIMEN_PLANS: RegimenPlan[] = [
  {
    id: 'bone-vitamin-d',
    title: 'Musculoskeletal & Vitamin D3 Optimization',
    category: 'Bone, Joint & Muscle Health',
    targetNeed: 'Fatigue, bone aches, low sun exposure, or indoor lifestyle',
    recommendedProductSku: 'ZAD-D-SOFTGEL2`s',
    clinicalRationale: 'Cholecalciferol (Vitamin D3) in lipid-carrier softgels bypasses slow dissolution and promotes direct calcium transport to bone matrix and immune cell activation.',
    regimenTip: 'Take 1 softgel capsule with a meal containing healthy fats for optimal gastrointestinal absorption.',
    lifestyleAdvice: 'Spend 15 minutes in early morning sunlight and stay adequately hydrated throughout the week.',
  },
  {
    id: 'intimate-hygiene',
    title: 'Daily Feminine Hygiene & Flora Defense',
    category: 'Gynae Aesthetics',
    targetNeed: 'Maintaining natural physiological pH and preventing intimate irritation or odor',
    recommendedProductSku: 'VINTIMA-INTIMATE-WASH-100ML',
    clinicalRationale: 'Soap-free, lactic acid-balanced formulation preserves acidic microflora (pH 3.8-4.5) to naturally protect sensitive delicate mucosa.',
    regimenTip: 'Use once daily during shower or bath. Rinse thoroughly with lukewarm water.',
    lifestyleAdvice: 'Avoid harsh synthetic soaps or scented deodorants in intimate zones; wear breathable cotton garments.',
  },
  {
    id: 'post-shave-relief',
    title: 'Post-Grooming Barrier Protection & Razor Comfort',
    category: 'Skin & Medicated Care',
    targetNeed: 'Redness, razor bumps, ingrown hairs, or burning after shaving and grooming',
    recommendedProductSku: 'VINTIMA-SMOOTHING-SHAVE-BALM-50GM',
    clinicalRationale: 'Botanical emollients and skin-identical lipids calm micro-abrasions, reduce inflammatory responses, and seal the epidermal moisture barrier.',
    regimenTip: 'Apply immediately after shaving onto dry skin with gentle upward sweeping motions.',
    lifestyleAdvice: 'Always shave in the direction of hair growth using a clean, sharp blade to minimize mechanical friction.',
  },
  {
    id: 'dryness-relief',
    title: 'Intimate Dryness & Moisture Replenishment',
    category: 'Gynae Aesthetics',
    targetNeed: 'Persistent intimate dryness, friction discomfort, postpartum or hormonal fluctuations',
    recommendedProductSku: 'VINTIMA-MOISTURIZATION-BALANCE-CREAM-50GM',
    clinicalRationale: 'Hyaluronic acid and bio-lipid complexes retain water molecules within delicate tissues, restoring natural elasticity and suppleness.',
    regimenTip: 'Apply a fingertip amount to clean external tissue daily before bedtime.',
    lifestyleAdvice: 'Stay well-hydrated and discuss persistent hormonal symptoms with your consulting gynecologist.',
  },
  {
    id: 'skin-tone-correction',
    title: 'Friction Zone Tone Clarification',
    category: 'Gynae Aesthetics',
    targetNeed: 'Hyperpigmentation from tight clothing, shaving friction, or inner-thigh chafing',
    recommendedProductSku: 'VINTIMA-WHITENING-CREAM-50GM',
    clinicalRationale: 'Safe botanical brighteners (Kojic dipalmitate, Alpha Arbutin, Licorice) inhibit tyrosinase activity without cytotoxic harsh bleach or hydroquinone.',
    regimenTip: 'Massage gently into affected areas twice daily after thorough cleansing.',
    lifestyleAdvice: 'Minimize friction with loose-fitting clothing and maintain consistent daily application for 6-8 weeks.',
  },
];

export const WellnessAdvisor: React.FC<WellnessAdvisorProps> = ({
  onOpenProductModal,
  onAddToCart,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('bone-vitamin-d');

  const currentPlan = REGIMEN_PLANS.find(p => p.id === selectedPlanId) || REGIMEN_PLANS[0];
  const matchedProduct = VERIFIED_PRODUCTS.find(p => p.sku === currentPlan.recommendedProductSku) || VERIFIED_PRODUCTS[11];

  return (
    <section id="advisor" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0b6b57] mb-2 inline-flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#0b6b57]" />
            Personalized Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Outfit']">
            Evidence-Based Wellness & Regimen Advisor
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Select your health or skincare goal below to receive a clinically grounded regimen recommendation from ZAD Life Sciences' verified formulation portfolio.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {REGIMEN_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#0b6b57] bg-emerald-50/70 shadow-xs ring-1 ring-[#0b6b57]'
                    : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="text-[11px] font-bold text-[#0b6b57] uppercase tracking-wider mb-1 line-clamp-1">
                  {plan.category}
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-2 font-['Outfit']">
                  {plan.title}
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
                  <CheckCircle2 className={`w-3 h-3 ${isSelected ? 'text-[#0b6b57]' : 'text-slate-300'}`} />
                  <span>{isSelected ? 'Active Plan' : 'Select'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Plan Showcase Result Card */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Regimen & Clinical Explanation */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0b6b57] bg-emerald-100/80 px-2.5 py-1 rounded-md">
                  Recommended Regimen
                </span>
                <span className="text-xs text-slate-500">·</span>
                <span className="text-xs text-slate-600 font-medium">{currentPlan.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                {currentPlan.title}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-800 block mb-1">Target Concern:</span>
                  <p>{currentPlan.targetNeed}</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-[#0b6b57] block mb-1">Clinical Pharmacopeial Rationale:</span>
                  <p>{currentPlan.clinicalRationale}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <span className="font-bold text-slate-800 block mb-1">Suggested Administration:</span>
                    <p className="text-xs">{currentPlan.regimenTip}</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <span className="font-bold text-slate-800 block mb-1">Lifestyle Guidance:</span>
                    <p className="text-xs">{currentPlan.lifestyleAdvice}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Nutraceutical formulations serve as dietary wellness support and do not replace personalized physician diagnoses.</span>
              </div>
            </div>

            {/* Right: Formulation Card Preview */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b6b57] block mb-2">
                  Matching Verified Formulation
                </span>

                <div className="w-36 h-36 mx-auto bg-slate-50 rounded-xl p-2 mb-4 border border-slate-100 flex items-center justify-center">
                  <img
                    src={matchedProduct.images[0]}
                    alt={matchedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h4 className="text-base font-bold text-slate-900 font-['Outfit'] mb-1">
                  {matchedProduct.name}
                </h4>
                <div className="text-xs text-slate-500 mb-2">
                  {matchedProduct.dosageForm} · {matchedProduct.volumeOrWeight}
                </div>
                <div className="text-lg font-extrabold text-slate-900 font-['Outfit'] mb-4">
                  PKR {matchedProduct.price.toLocaleString()}
                </div>

                {/* Direct Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => onOpenProductModal(matchedProduct)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-xl transition-colors"
                  >
                    View Formulation Specifications
                  </button>

                  <button
                    onClick={() => onAddToCart(matchedProduct)}
                    className="w-full bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Inquiry Bag</span>
                  </button>

                  <a
                    href={`https://wa.me/923252408484?text=Hello%20ZAD%20Life%20Sciences,%20the%20Advisor%20recommended%20${encodeURIComponent(matchedProduct.name)}%20(PKR%20${matchedProduct.price})%20for%20my%20wellness%20plan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-slate-200 hover:bg-emerald-50 text-[#0b6b57] text-xs font-semibold py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#83b735]" />
                    <span>Consult on WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
