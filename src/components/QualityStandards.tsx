import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  FlaskConical, 
  PackageCheck, 
  CheckCircle2, 
  Award,
  FileCheck2,
  Lock
} from 'lucide-react';
import { QUALITY_STANDARDS } from '../data/businessData';

export const QualityStandards: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0b6b57]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#0b6b57]" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-[#0b6b57]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-[#0b6b57]" />;
      default:
        return <Award className="w-6 h-6 text-[#0b6b57]" />;
    }
  };

  return (
    <section id="quality" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0b6b57] mb-2 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0b6b57]" />
            Regulatory & Analytical Rigor
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Outfit']">
            Pharmaceutical-Grade Quality Assurance
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Every batch formulated under the ZAD Life Sciences banner adheres to rigorous pharmacological control, DRAP nutraceutical safety benchmarks, and audited manufacturing standards.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {QUALITY_STANDARDS.map((std, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-[#0b6b57]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  {getIcon(std.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-2">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {std.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0b6b57]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Quality Benchmark</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Audit Checklist Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b6b57]">
                Manufacturing Protocol & Compliance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-1 mb-3">
                Evidence-Led Formulation with Zero Compromise
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Unlike unverified cosmetic or herbal products, ZAD Life Sciences implements active stability analysis, controlled batch testing, and dermatological safety profiling on all Vintima intimate products and oral nutraceutical softgels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#0b6b57] shrink-0" />
                  <span>Batch Specific Analytical Assay Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#0b6b57] shrink-0" />
                  <span>Microbiological Pathogen & Heavy Metal Clearances</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0b6b57] shrink-0" />
                  <span>Dermatologically Non-Sensitizing Formulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-[#0b6b57] shrink-0" />
                  <span>Sealed Blister Foil & Tamper Resistant Packs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-emerald-50/70 rounded-xl p-6 border border-emerald-100 text-center">
              <div className="text-3xl font-extrabold text-[#0b6b57] font-['Outfit'] mb-1">
                100%
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Traceable Batch Coding
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Every unit bears a distinct manufacturing date, expiration date, and lot registration identifier.
              </p>
              <div className="text-[11px] font-semibold text-[#0b6b57]">
                Karachi Operational Hub
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
