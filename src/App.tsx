import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { WellnessAdvisor } from './components/WellnessAdvisor';
import { QualityStandards } from './components/QualityStandards';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { LocationAndContact } from './components/LocationAndContact';
import { InquiryCartDrawer } from './components/InquiryCartDrawer';
import { Footer } from './components/Footer';
import { Product, BUSINESS_INFO } from './data/businessData';
import { MessageCircle, Check, ArrowUp } from 'lucide-react';

export default function App() {
  const [inquiryCart, setInquiryCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setInquiryCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x ${product.name} to Inquiry Bag`);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setInquiryCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setInquiryCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Removed item from Inquiry Bag');
  };

  const handleClearCart = () => {
    setInquiryCart([]);
    showToast('Inquiry Bag cleared');
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartProductIds = inquiryCart.map((i) => i.product.id);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-2 border border-slate-700 animate-bounce">
          <Check className="w-4 h-4 text-[#83b735]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        inquiryCart={inquiryCart}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection="home"
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onOpenProductModal={(p) => setSelectedProductForModal(p)}
        />

        {/* 2. Therapeutic Categories Showcase */}
        <CategoryGrid
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategorySlug}
        />

        {/* 3. Products & Formulations Catalog */}
        <ProductCatalog
          onOpenProductModal={(p) => setSelectedProductForModal(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          cartProductIds={cartProductIds}
          selectedCategorySlug={selectedCategorySlug}
          onSelectCategorySlug={setSelectedCategorySlug}
        />

        {/* 4. Interactive Wellness & Regimen Advisor */}
        <WellnessAdvisor
          onOpenProductModal={(p) => setSelectedProductForModal(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
        />

        {/* 5. Quality Standards & cGMP Assurance */}
        <QualityStandards />

        {/* 6. Corporate & Facility About Section */}
        <AboutSection onContactClick={handleContactClick} />

        {/* 7. FAQs & Patient / Wholesale Guidance */}
        <FaqSection />

        {/* 8. Google Maps Location & Direct Inquiry Contact */}
        <LocationAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={(p, qty) => {
          handleAddToCart(p, qty);
          setSelectedProductForModal(null);
        }}
        isInCart={
          selectedProductForModal
            ? cartProductIds.includes(selectedProductForModal.id)
            : false
        }
      />

      {/* Slide-over Inquiry Cart Drawer */}
      <InquiryCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={inquiryCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Direct WhatsApp Dispatch Button */}
      <aside aria-label="Support and Quick Actions">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#0b6b57] hover:bg-[#085243] text-white p-3.5 rounded-full shadow-lg border-2 border-white/20 flex items-center justify-center transition-all hover:scale-105 group"
          title="Chat directly with ZAD Life Sciences on WhatsApp"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageCircle className="w-6 h-6 text-[#83b735]" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
