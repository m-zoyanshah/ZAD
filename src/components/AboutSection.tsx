import React from 'react';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Users2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Corporate Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0b6b57] inline-flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#0b6b57]" />
              About ZAD Life Sciences (PVT) Ltd.
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Outfit']">
              Bridging Pharmacopeial Science with Modern Life Wellness
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Headquartered at <strong>A-34, Sector 11-A, North Karachi</strong>, ZAD Life Sciences (PVT) Ltd. is a registered Pakistani life sciences and nutraceutical company established to formulate high-standard therapeutic and personal care wellness solutions.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Recognizing the gap between raw unstandardized supplements and therapeutic pharmaceuticals, ZAD Life Sciences develops precise bio-active formulations with clear labeling, verifiable active ingredients, and dermatologically evaluated topical lines such as our <strong>Vintima Gynae Aesthetics</strong> collection and high-bioavailability <strong>ZAD-D Softgels</strong>.
            </p>

            {/* Core Values / Operational Commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-900 font-['Outfit'] mb-1">
                  Targeted Bio-Actives
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Only evidence-tested vitamins, minerals, and botanicals with recognized physiological absorption pathways.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-900 font-['Outfit'] mb-1">
                  Ethical Patient Care
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent ingredient lists, verified dosage instructions, and honest non-hyperbolic health indications.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-900 font-['Outfit'] mb-1">
                  B2B & Clinic Supply
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated corporate distribution supplying pharmacies, medical practitioners, and maternal clinics across Pakistan.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-900 font-['Outfit'] mb-1">
                  Karachi Logistics Hub
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Centralized temperature-monitored storage in North Karachi for immediate regional and interprovincial dispatch.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <span>Contact Business Management</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#0b6b57]" />
                <span>Verify Google Maps Listing</span>
              </a>
            </div>
          </div>

          {/* Right Column: Location & Verification Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1">
                    <img src={BUSINESS_INFO.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-['Outfit']">
                      ZAD Life Sciences
                    </h3>
                    <span className="text-[11px] text-[#0b6b57] font-semibold">
                      Registered (PVT) Ltd. Company
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  Active
                </span>
              </div>

              {/* Direct Details */}
              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0b6b57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Registered Facility:</span>
                    <span>{BUSINESS_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0b6b57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Telephone & WhatsApp:</span>
                    <span>{BUSINESS_INFO.phoneDisplay} / {BUSINESS_INFO.secondaryPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0b6b57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Official Inquiries:</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#0b6b57] hover:underline">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0b6b57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Office & Dispatch Hours:</span>
                    <span>Monday – Saturday: 9:00 AM – 7:00 PM PKT</span>
                  </div>
                </div>
              </div>

              {/* Banking Transfer Details for Orders */}
              <div className="pt-4 border-t border-slate-200 bg-white p-4 rounded-xl border">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Official Remittance / EasyPaisa
                </span>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong>Method:</strong> {BUSINESS_INFO.banking.serviceName}</div>
                  <div><strong>Title:</strong> {BUSINESS_INFO.banking.accountTitle}</div>
                  <div><strong>Number:</strong> {BUSINESS_INFO.banking.accountNumber}</div>
                  <div className="text-[10px] text-slate-500 font-mono"><strong>IBAN:</strong> {BUSINESS_INFO.banking.iban}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
