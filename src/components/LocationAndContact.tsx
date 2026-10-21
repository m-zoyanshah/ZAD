import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Building,
  Navigation,
  Copy,
  Check
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Retail Order / Product Inquiry',
    city: 'Karachi',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and a contact phone/WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend receipt & generate inquiry reference number
    setTimeout(() => {
      const refCode = `ZAD-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refCode);
      setIsSubmitting(false);
    }, 700);
  };

  const handleCopyRef = () => {
    if (submittedRef && navigator.clipboard) {
      navigator.clipboard.writeText(submittedRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Inquiry via ZAD Website*%0A*Ref:* ${submittedRef || 'Direct'}%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*Type:* ${encodeURIComponent(formData.inquiryType)}%0A*Message:* ${encodeURIComponent(formData.message || 'Please provide product consultation.')}`;
    window.open(`https://wa.me/923252408484?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0b6b57] mb-2 inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#0b6b57]" />
            Official Facility & Contact Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Outfit']">
            Visit Our Karachi Hub or Send an Inquiry
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Reach out directly to ZAD Life Sciences for product consultations, patient dispatch, or corporate wholesale pharmacy distribution across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Map & Verified Location Info */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Real Google Maps Embed Container */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs relative aspect-4/3 sm:aspect-16/10">
              <iframe
                title="ZAD Life Sciences Google Map Location"
                src="https://maps.google.com/maps?q=24.981944,67.0598634&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Actions */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-ping"></div>
                  <span className="text-xs font-bold text-slate-800 truncate font-['Outfit']">
                    Sector 11-A, North Karachi
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#0b6b57] hover:bg-[#085243] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Navigation className="w-3 h-3 text-[#83b735]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Address & Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-800 text-xs font-bold font-['Outfit'] mb-1">
                  <MapPin className="w-4 h-4 text-[#0b6b57]" />
                  <span>Facility Address</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {BUSINESS_INFO.fullAddress}
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0b6b57] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-800 text-xs font-bold font-['Outfit'] mb-1">
                  <Clock className="w-4 h-4 text-[#0b6b57]" />
                  <span>Operational Hours</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong>Mon – Sat:</strong> 9:00 AM – 7:00 PM PKT</div>
                  <div><strong>Sunday:</strong> Closed (Digital Support)</div>
                </div>
                <span className="mt-2 inline-block text-[11px] font-medium text-emerald-700">
                  Orders dispatched daily via express courier.
                </span>
              </div>
            </div>

            {/* Direct Channel Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-3 bg-white border border-slate-200 hover:border-[#0b6b57] rounded-xl text-center transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#0b6b57] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="block text-[11px] font-semibold text-slate-500">Hotline</span>
                <span className="block text-xs font-bold text-slate-800">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-emerald-50/70 border border-emerald-200 hover:bg-emerald-100 rounded-xl text-center transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#0b6b57] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="block text-[11px] font-semibold text-[#0b6b57]">WhatsApp</span>
                <span className="block text-xs font-bold text-[#0b6b57]">Chat Directly</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-3 bg-white border border-slate-200 hover:border-[#0b6b57] rounded-xl text-center transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#0b6b57] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="block text-[11px] font-semibold text-slate-500">Email</span>
                <span className="block text-xs font-bold text-slate-800 truncate">{BUSINESS_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Verified Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-2">
              Send an Official Inquiry
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Fill out the details below. Our pharmaceutical care coordinator will review and reply within business hours.
            </p>

            {submittedRef ? (
              <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-xs space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0b6b57] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been registered with our team in North Karachi.
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Reference Tracking Code:</span>
                    <span className="font-mono font-bold text-slate-800 text-sm">{submittedRef}</span>
                  </div>
                  <button
                    onClick={handleCopyRef}
                    className="p-2 text-slate-500 hover:text-[#0b6b57] rounded-md transition-colors"
                    title="Copy reference code"
                  >
                    {copiedRef ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#83b735]" />
                    <span>Send Copy to WhatsApp Desk</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        inquiryType: 'Retail Order / Product Inquiry',
                        city: 'Karachi',
                        message: '',
                      });
                    }}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold py-2.5 px-3 rounded-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Tariq or Ayesha Khan"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57] focus:ring-1 focus:ring-[#0b6b57]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0325 2408484"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57] focus:ring-1 focus:ring-[#0b6b57]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Delivery / Origin City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Karachi, Lahore, Islamabad"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:border-[#0b6b57]"
                  >
                    <option value="Retail Order / Product Inquiry">Retail Patient Order / Inquiries</option>
                    <option value="Pharmacy / Retailer Wholesale">Retail Pharmacy / Chemist Wholesale</option>
                    <option value="Gynecology & Clinic Distribution">Gynecologist & Clinic Institutional Supply</option>
                    <option value="Distributor Partnership">Regional Distribution Partnership</option>
                    <option value="General Question">General Healthcare Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Products of Interest
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify the products you wish to order or details regarding your clinic/pharmacy requirements..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0b6b57]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0b6b57] hover:bg-[#085243] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Registering Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Official Inquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Your contact information is strictly handled in confidence by ZAD Life Sciences.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
