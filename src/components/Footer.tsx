import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Truck, 
  CreditCard,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800">
      
      {/* Top Value Assurance Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#83b735]" />
              </div>
              <div>
                <div className="text-white font-bold font-['Outfit'] text-xs">Verified Formulations</div>
                <div className="text-[11px] text-slate-400">Manufactured under cGMP & DRAP standards</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-[#83b735]" />
              </div>
              <div>
                <div className="text-white font-bold font-['Outfit'] text-xs">Express Nationwide</div>
                <div className="text-[11px] text-slate-400">Karachi (24h) · All Pakistan (48-72h)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-[#83b735]" />
              </div>
              <div>
                <div className="text-white font-bold font-['Outfit'] text-xs">EasyPaisa & COD</div>
                <div className="text-[11px] text-slate-400">Secure banking or Cash on Delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#83b735]" />
              </div>
              <div>
                <div className="text-white font-bold font-['Outfit'] text-xs">Doctor & B2B Desk</div>
                <div className="text-[11px] text-slate-400">Direct WhatsApp support (+92 325 2408484)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">
                <img src={BUSINESS_INFO.logoUrl} alt="ZAD Life Sciences Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight font-['Outfit']">
                  ZAD <span className="text-[#83b735]">Life Sciences</span>
                </span>
                <span className="block text-[10px] text-slate-400 font-medium">
                  ZAD Life Sciences (PVT) Ltd. · Karachi
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to formulating evidence-backed nutraceuticals, advanced Vitamin D3 bio-softgels, and specialized gynae aesthetics (Vintima). Bridging pharmacological rigor with daily family vitality.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#83b735] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#83b735] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay} / {BUSINESS_INFO.secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#83b735] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home Portal</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Product Formulations</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Therapeutic Specialties</a></li>
              <li><a href="#advisor" className="hover:text-white transition-colors">Regimen Advisor</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">cGMP Standards</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Corporate Profile</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs & Shipping</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Facility</a></li>
            </ul>
          </div>

          {/* Products & Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Key Formulations
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">ZAD-D Softgel 2`s (D3)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vintima Intimate Wash</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vintima Smoothing Shave Balm</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vintima Nourishing Oil</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vintima Tightening Serum</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vintima Whitening Cream</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vintima Lubricant Gel</a></li>
            </ul>
          </div>

          {/* Verified Business Links & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Official Channels
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a 
                  href={BUSINESS_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Google Maps Listing</span>
                  <ExternalLink className="w-3 h-3 text-[#83b735]" />
                </a>
              </li>
              <li>
                <a 
                  href={BUSINESS_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp Inquiries</span>
                  <ExternalLink className="w-3 h-3 text-[#83b735]" />
                </a>
              </li>
              <li>
                <a 
                  href={BUSINESS_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook Page
                </a>
              </li>
              <li>
                <a 
                  href={BUSINESS_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram Channel
                </a>
              </li>
              <li>
                <a 
                  href={BUSINESS_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                Remittance Account
              </span>
              <p className="text-[11px] text-slate-400">
                EasyPaisa / Bank Transfer (Daim Ahmed Anees)
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-slate-500 text-[11px] space-y-4">
          <p className="leading-relaxed">
            <strong>Regulatory & Medical Disclaimer:</strong> Product statements, nutraceutical compositions, and personal care products published on this website are formulated in compliance with the Drug Regulatory Authority of Pakistan (DRAP) nutraceutical guidelines. They are intended for nutritional, physical wellness, and cosmetic comfort support and should not be construed as medical diagnosis, prescription advice, or a substitute for professional clinical medical evaluation. Always consult a qualified physician or healthcare provider regarding any health condition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
            <div>
              © 2026 ZAD Life Sciences (PVT) Ltd. All rights reserved. Registered Office: Sector 11-A, North Karachi.
            </div>
            <div className="flex items-center gap-4">
              <a href="#hero" className="hover:text-slate-300">Privacy Policy</a>
              <span>·</span>
              <a href="#hero" className="hover:text-slate-300">Terms of Supply</a>
              <span>·</span>
              <a href="#hero" className="hover:text-slate-300">DRAP Compliance</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
