import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Check, 
  ShieldCheck, 
  Plus, 
  Minus, 
  Share2, 
  AlertCircle,
  Truck,
  Sparkles
} from 'lucide-react';
import { Product, BUSINESS_INFO } from '../data/businessData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isInCart: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart,
}) => {
  if (!product) return null;

  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Check out ${product.name} from ZAD Life Sciences: ${window.location.origin}/#products`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const totalPrice = product.price * quantity;
  const whatsappOrderUrl = `https://wa.me/923252408484?text=Hello%20ZAD%20Life%20Sciences,%20I%20would%20like%20to%20order%20${quantity}x%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku},%20Total:%20PKR%20${totalPrice}).%20Please%20confirm%20delivery%20and%20payment%20details.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b6b57]">
              {product.brand}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-mono">
              SKU: {product.sku}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Image & Gallery Area */}
            <div className="space-y-3">
              <div className="relative aspect-square rounded-xl bg-slate-50 border border-slate-200/80 p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={product.images[selectedImageIdx] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 text-[11px] font-semibold text-slate-700 px-2.5 py-1 rounded-md shadow-xs border border-slate-200">
                  {product.dosageForm} · {product.volumeOrWeight}
                </span>
              </div>

              {/* Thumbnail selector */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`w-14 h-14 rounded-lg border-2 p-1 bg-slate-50 overflow-hidden transition-all ${
                        selectedImageIdx === idx
                          ? 'border-[#0b6b57]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Delivery and Origin Guarantee */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Truck className="w-4 h-4 text-[#0b6b57]" />
                  <span>Express Courier Dispatch across Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#0b6b57]" />
                  <span>Authentic Direct Manufacturer Supply</span>
                </div>
              </div>
            </div>

            {/* Product Specifications & Buying */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#0b6b57] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 inline-block mb-2">
                  {product.category}
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-['Outfit']">
                  {product.name}
                </h2>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
                    PKR {product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    (Standard Unit Retail)
                  </span>
                </div>

                {/* Full Description */}
                <div className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.fullDescription || product.shortDescription}
                </div>

                {/* Key Clinical Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mt-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0b6b57] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Directions for Use */}
                {product.directions && (
                  <div className="mt-5 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 text-xs text-slate-700">
                    <span className="font-bold text-[#0b6b57] block mb-1">
                      Recommended Usage / Directions:
                    </span>
                    {product.directions}
                  </div>
                )}
              </div>

              {/* Buying / Ordering Controls */}
              <div className="mt-8 pt-5 border-t border-slate-100 space-y-4">
                
                {/* Quantity picker & Total */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Quantity:</span>
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 py-1 text-xs font-bold text-slate-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Total amount highlight */}
                <div className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-lg">
                  <span className="text-slate-600 font-medium">Estimated Order Total:</span>
                  <span className="font-bold text-slate-900 text-sm">PKR {totalPrice.toLocaleString()}</span>
                </div>

                {/* Main CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => onAddToCart(product, quantity)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4 text-[#0b6b57]" />
                    <span>Add to Inquiry Bag</span>
                  </button>

                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#83b735]" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>

                {/* Share action */}
                <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
                  <span>Questions? Call {BUSINESS_INFO.phoneDisplay}</span>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1 hover:text-[#0b6b57] transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'Link Copied!' : 'Share Product'}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
