import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ShoppingBag, 
  Truck, 
  ShieldCheck,
  CreditCard,
  Copy,
  Check
} from 'lucide-react';
import { Product, BUSINESS_INFO } from '../data/businessData';

interface InquiryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: Product; quantity: number }[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export const InquiryCartDrawer: React.FC<InquiryCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('Karachi');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentPreference, setPaymentPreference] = useState<'easypaisa' | 'cod'>('easypaisa');
  const [copiedBank, setCopiedBank] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCopyIban = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(BUSINESS_INFO.banking.iban);
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    }
  };

  const handleWhatsAppCheckout = () => {
    let orderLines = items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (Qty: ${item.quantity}) - PKR ${(
            item.product.price * item.quantity
          ).toLocaleString()}`
      )
      .join('%0A');

    const message = 
      `*NEW ORDER INQUIRY - ZAD LIFE SCIENCES*%0A` +
      `---------------------------------------%0A` +
      `*Customer:* ${encodeURIComponent(customerName || 'Valued Customer')}%0A` +
      `*City:* ${encodeURIComponent(deliveryCity)}%0A` +
      `*Address:* ${encodeURIComponent(deliveryAddress || 'To be shared via chat')}%0A` +
      `*Payment Preference:* ${paymentPreference === 'easypaisa' ? 'EasyPaisa / Bank Transfer' : 'Cash on Delivery'}%0A` +
      `---------------------------------------%0A` +
      `*ORDER ITEMS:*%0A${orderLines}%0A` +
      `---------------------------------------%0A` +
      `*ESTIMATED TOTAL:* PKR ${subtotal.toLocaleString()}%0A%0A` +
      `Please verify stock and confirm order dispatch.`;

    window.open(`https://wa.me/923252408484?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full z-10">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0b6b57]" />
            <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
              Order Inquiry Bag
            </h3>
            <span className="text-xs bg-[#0b6b57] text-white font-bold px-2 py-0.5 rounded-full">
              {items.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-slate-800">Your bag is currently empty</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Explore our pharmaceutical and gynae aesthetics formulations and add products to start your order.
              </p>
              <button
                onClick={onClose}
                className="mt-5 bg-[#0b6b57] text-white text-xs font-semibold px-4 py-2.5 rounded-xl"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                <span>Selected Formulations</span>
                <button
                  onClick={onClearCart}
                  className="text-red-500 hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear all</span>
                </button>
              </div>

              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3.5"
                >
                  <div className="w-16 h-16 bg-white rounded-lg p-1 border border-slate-200 flex items-center justify-center shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate font-['Outfit']">
                      {product.name}
                    </h4>
                    <div className="text-[11px] text-slate-500">
                      PKR {product.price.toLocaleString()} · {product.dosageForm}
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-slate-200 rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="px-2 py-0.5 text-slate-500 hover:bg-slate-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="px-2 py-0.5 text-slate-500 hover:bg-slate-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-extrabold text-slate-900 font-['Outfit']">
                        PKR {(product.price * quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(product.id)}
                    className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                    title="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Order Delivery Information Form */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Delivery Details
                </span>

                <div>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    placeholder="City (e.g. Karachi)"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57]"
                  />
                  <select
                    value={paymentPreference}
                    onChange={(e) => setPaymentPreference(e.target.value as any)}
                    className="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:border-[#0b6b57]"
                  >
                    <option value="easypaisa">EasyPaisa / Bank</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={2}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Delivery street address & contact phone..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57]"
                  />
                </div>

                {/* Bank account quick copy */}
                {paymentPreference === 'easypaisa' && (
                  <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-200/80 text-[11px] text-slate-700 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#0b6b57]">EasyPaisa Direct:</span>
                      <button
                        onClick={handleCopyIban}
                        className="text-[#0b6b57] font-semibold flex items-center gap-1 hover:underline"
                      >
                        {copiedBank ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedBank ? 'Copied' : 'Copy IBAN'}</span>
                      </button>
                    </div>
                    <div>Account: <strong>{BUSINESS_INFO.banking.accountTitle}</strong></div>
                    <div>EasyPaisa #: <strong>{BUSINESS_INFO.banking.accountNumber}</strong></div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Estimated Subtotal:</span>
              <span className="text-base font-extrabold text-slate-900 font-['Outfit']">
                PKR {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="text-[10px] text-slate-500 flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-[#0b6b57] shrink-0" />
              <span>Standard dispatch rates applied upon address verification.</span>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#83b735]" />
              <span>Dispatch via WhatsApp (+92 325 2408484)</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
