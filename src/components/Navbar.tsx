import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ShoppingBag, 
  MessageCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO, Product } from '../data/businessData';

interface NavbarProps {
  inquiryCart: { product: Product; quantity: number }[];
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ inquiryCart, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = inquiryCart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Products', href: '#products' },
    { label: 'Categories', href: '#categories' },
    { label: 'Advisor', href: '#advisor' },
    { label: 'Quality & cGMP', href: '#quality' },
    { label: 'About Us', href: '#about' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b6b57] text-white text-xs py-2 px-4 border-b border-[#0b6b57]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#83b735] animate-pulse"></span>
              {BUSINESS_INFO.shippingNotice}
            </span>
            <span className="hidden md:inline text-white/50">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-white/90">
              <Clock className="w-3.5 h-3.5 text-[#83b735]" />
              Mon - Sat: 9:00 AM - 7:00 PM PKT
            </span>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              title="Call ZAD Life Sciences"
            >
              <Phone className="w-3.5 h-3.5 text-[#83b735]" />
              <span className="font-semibold">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-white/40">|</span>
            <a 
              href={BUSINESS_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-200 hover:text-white font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#83b735]" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center p-1.5 overflow-hidden group-hover:border-[#0b6b57]/40 transition-colors">
              <img 
                src={BUSINESS_INFO.logoUrl} 
                alt="ZAD Life Sciences Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if logo takes time
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-[#0b6b57] font-black text-xl hidden font-serif">ZAD</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-['Outfit']">
                  ZAD <span className="text-[#0b6b57]">Life Sciences</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#0b6b57] bg-emerald-50 px-1.5 py-0.5 rounded-sm border border-emerald-200">
                  PVT LTD
                </span>
              </div>
              <span className="text-xs text-slate-500 hidden sm:block">
                Pharmaceutical & Nutraceutical Innovation · Karachi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0b6b57] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0b6b57] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Inquiry Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="View Order Inquiry List"
              className="relative p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#0b6b57] transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5 text-[#0b6b57]" />
              <span className="hidden sm:inline text-xs font-semibold text-slate-700">Inquiry List</span>
              {totalCartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#0b6b57] text-white text-[11px] font-bold flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Action Button */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#83b735]" />
              <span>Direct WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-[#0b6b57] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#0b6b57] text-white text-sm font-semibold py-3 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 text-[#83b735]" />
                <span>Chat on WhatsApp (+92 325 2408484)</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full border border-slate-300 text-slate-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-[#0b6b57]" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
