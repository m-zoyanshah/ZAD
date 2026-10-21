/**
 * Verified Official Business Data for ZAD Life Sciences (PVT) Ltd.
 * Based on verified Google Maps listing (https://maps.app.goo.gl/B48pgbjKLoTVjoA6A)
 * and official Zadlife Sciences records.
 */

export interface Product {
  id: number;
  name: string;
  slug: string;
  sku: string;
  shortDescription: string;
  fullDescription?: string;
  price: number; // in PKR
  salePrice: number | null;
  stock: number;
  dosageForm: string;
  category: string;
  categorySlug: string;
  brand: string;
  images: string[];
  features?: string[];
  directions?: string;
  volumeOrWeight: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  cardImage: string;
  iconImage: string;
  description: string;
  badge?: string;
}

export const BUSINESS_INFO = {
  name: "ZAD Life Sciences (PVT) Ltd.",
  brandName: "ZAD Life Sciences",
  storefrontName: "Zadlife Sciences",
  category: "Pharmaceutical & Nutraceutical Manufacturer",
  tagline: "Science-Backed Nutraceuticals & Evidence-Based Healthcare Solutions",
  address: "A-34, Sector 11-A, North Karachi",
  city: "Karachi",
  region: "Sindh",
  country: "Pakistan",
  postalCode: "75850",
  fullAddress: "A-34, Sector 11-A, North Karachi, Karachi, Sindh, Pakistan",
  coordinates: {
    lat: 24.981944,
    lng: 67.0598634,
  },
  googleMapsUrl: "https://maps.app.goo.gl/B48pgbjKLoTVjoA6A",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.57688755677!2d67.051108!3d24.981944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341772ca53f87%3A0x41b24c0bfb1530c8!2sZAD%20Life%20sciences!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
  phone: "+92 325 2408484",
  phoneDisplay: "+92 325 2408484",
  secondaryPhone: "+92 304 8128848",
  whatsappNumber: "923252408484",
  whatsappUrl: "https://wa.me/923252408484",
  email: "zadlifesciences@gmail.com",
  officialWebsite: "https://zadlifesciences.com",
  logoUrl: "/images/theme/logo.webp",
  socials: {
    facebook: "https://facebook.com/zadlifesciences",
    instagram: "https://instagram.com/zadlifesciences",
    linkedin: "https://linkedin.com/company/zadlifesciences",
    twitter: "https://twitter.com/zadlife",
  },
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM PKT", isOpen: true },
    { days: "Sunday", time: "Closed (WhatsApp Online Support Active)", isOpen: false },
  ],
  banking: {
    serviceName: "EasyPaisa & Bank Transfer",
    accountTitle: "Daim Ahmed Anees",
    accountNumber: "03342408416",
    iban: "PK32TMFB0000000077007479",
    instructions: "Please send payment screenshot via WhatsApp after transfer. Your order will be dispatched promptly.",
  },
  shippingNotice: "Express Delivery Across Pakistan (Karachi, Lahore, Islamabad & Nationwide)",
};

export const VERIFIED_CATEGORIES: Category[] = [
  {
    id: 63,
    name: "Gynae Aesthetics",
    slug: "gynae-aesthetics",
    cardImage: "/images/categories/gynae-aesthetics.webp",
    iconImage: "/images/categories/gynae-aesthetics.webp",
    description: "Premium intimate feminine care, soothing balms, tightening serums, and botanical wellness formulas.",
    badge: "Specialty Line",
  },
  {
    id: 2,
    name: "Immunity & Daily Vitamins",
    slug: "immunity-daily-vitamins",
    cardImage: "/images/categories/immunity-daily-vitamins.webp",
    iconImage: "/images/categories/immunity-daily-vitamins.webp",
    description: "Essential micronutrients, immune system boosters, and high-bioavailability daily vitamin complexes.",
    badge: "Essential",
  },
  {
    id: 10,
    name: "Bone, Joint & Muscle Health",
    slug: "bone-joint-muscle-health",
    cardImage: "/images/categories/bone-joint-muscle-health.png",
    iconImage: "/images/categories/bone-joint-muscle-health.png",
    description: "High potency Vitamin D3 softgels, calcium synergistic complexes, and musculoskeletal support.",
  },
  {
    id: 27,
    name: "Women's Health & Fertility",
    slug: "womens-health-fertility",
    cardImage: "/images/categories/womens-health-fertility.webp",
    iconImage: "/images/categories/womens-health-fertility.webp",
    description: "Hormonal balance nutrition, prenatal support, and ovulation health nutraceuticals.",
  },
  {
    id: 33,
    name: "Men's Health & Fertility",
    slug: "mens-health-fertility",
    cardImage: "/images/categories/mens-health-fertility.webp",
    iconImage: "/images/categories/mens-health-fertility.webp",
    description: "Targeted botanical supplements for male vitality, reproductive health, and stamina.",
  },
  {
    id: 14,
    name: "Digestive Health",
    slug: "digestive-health",
    cardImage: "/images/categories/digestive-health.webp",
    iconImage: "/images/categories/digestive-health.webp",
    description: "Gut microbiome wellness, digestive enzymes, and gastric comfort solutions.",
  },
  {
    id: 22,
    name: "Blood, Energy & Neuro Support",
    slug: "blood-energy-neuro-support",
    cardImage: "/images/categories/blood-energy-neuro-support.webp",
    iconImage: "/images/categories/blood-energy-neuro-support.webp",
    description: "Iron synergies, red blood cell production, cellular ATP vitality, and cognitive health.",
  },
  {
    id: 18,
    name: "Respiratory & Cough Care",
    slug: "respiratory-cough-care",
    cardImage: "/images/categories/respiratory-cough-care.webp",
    iconImage: "/images/categories/respiratory-cough-care.webp",
    description: "Bronchial soothing blends, seasonal immune protection, and respiratory defense.",
  },
  {
    id: 47,
    name: "Skin, Scalp & Medicated Care",
    slug: "skin-scalp-medicated-care",
    cardImage: "/images/categories/skin-scalp-medicated-care.webp",
    iconImage: "/images/categories/skin-scalp-medicated-care.webp",
    description: "Dermatological formulations, collagen peptides, scalp nourishment, and barrier creams.",
  },
  {
    id: 7,
    name: "Kids Nutrition",
    slug: "kids-nutrition",
    cardImage: "/images/categories/kids-nutrition.webp",
    iconImage: "/images/categories/kids-nutrition.webp",
    description: "Pediatric growth vitamins, chewable minerals, and children's immune balance.",
  },
  {
    id: 38,
    name: "Urinary Tract Health",
    slug: "urinary-tract-health",
    cardImage: "/images/categories/urinary-tract-health.webp",
    iconImage: "/images/categories/urinary-tract-health.webp",
    description: "Cranberry bio-extracts, D-Mannose urinary tract cleanse, and bladder defense.",
  },
  {
    id: 43,
    name: "Thyroid & Hormonal Metabolism",
    slug: "thyroid-hormonal-metabolism",
    cardImage: "/images/categories/thyroid-hormonal-metabolism.webp",
    iconImage: "/images/categories/thyroid-hormonal-metabolism.webp",
    description: "Iodine, selenium, and thyroid-supporting micronutrients for healthy metabolic rate.",
  },
];

export const VERIFIED_PRODUCTS: Product[] = [
  {
    id: 56,
    name: "Vintima Smoothing Shave Balm",
    slug: "vintima-smoothing-shave-balm",
    sku: "VINTIMA-SMOOTHING-SHAVE-BALM-50GM",
    shortDescription: "Soothing post-shave care balm formulated for smooth skin and razor-bump reduction.",
    fullDescription: "Vintima Smoothing Shave Balm provides gentle post-grooming comfort for delicate skin areas. Enriched with botanical emollients and skin-identical lipids, it helps calm redness, reduce ingrown hair formation, and restore the cutaneous moisture barrier.",
    price: 2200,
    salePrice: null,
    stock: 100,
    dosageForm: "Balm",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "50gm / 1.75 fl.oz",
    images: [
      "/images/products/vintima-smoothing-shave-balm-1.webp",
      "/images/products/vintima-smoothing-shave-balm-2.webp",
    ],
    features: [
      "Reduces post-shave redness and irritation",
      "Non-greasy, fast-absorbing barrier protection",
      "Dermatologically tested for sensitive zones",
      "Paraben-free and artificial fragrance-free",
    ],
    directions: "Apply a small amount to cleansed, shaved skin and gently massage until fully absorbed. Use after every shave or hair removal session.",
  },
  {
    id: 55,
    name: "Vintima Nourishing Oil",
    slug: "vintima-nourishing-oil",
    sku: "VINTIMA-NO-30ML",
    shortDescription: "Soothing and protective intimate oil enriched with natural plant extracts.",
    fullDescription: "Vintima Nourishing Oil is a targeted intimate hydration oil formulated to soften, replenish, and safeguard dry, delicate tissue. Designed to deliver deep comfort without synthetic fragrances or pore-clogging mineral oils.",
    price: 3000,
    salePrice: null,
    stock: 100,
    dosageForm: "Oil",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "30ml / 1 fl.oz",
    images: [
      "/images/products/vintima-nourishing-oil-1.png",
      "/images/products/vintima-nourishing-oil-2.png",
    ],
    features: [
      "Deep nourishing botanical lipid complex",
      "Soothes chafing, friction, and environmental dryness",
      "Lightweight, silk-feel non-staining formulation",
      "100% natural cold-pressed oil blend",
    ],
    directions: "Dispense 2-3 drops onto clean fingertips. Gently smooth over clean intimate external areas once or twice daily.",
  },
  {
    id: 54,
    name: "Vintima Breast Enlargement Cream",
    slug: "vintima-breast-enlargement-cream",
    sku: "VINTIMA-BEC-100GM",
    shortDescription: "Feminine contouring cream with a smooth topical texture and firming phyto-extracts.",
    fullDescription: "Vintima Breast Enlargement & Firming Cream is a specialized topical cosmetic cream designed to support tissue elasticity, skin firmness, and contour hydration with premium botanical extracts and peptide complexes.",
    price: 3300,
    salePrice: null,
    stock: 100,
    dosageForm: "Cream",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "100gm / 3.5 fl.oz",
    images: [
      "/images/products/vintima-breast-enlargement-cream-1.png",
      "/images/products/vintima-breast-enlargement-cream-2.png",
    ],
    features: [
      "Enhances cutaneous tone, suppleness, and elasticity",
      "Silky emollient emulsion that massages effortlessly",
      "Formulated with natural phytoestrogen-supportive botanicals",
      "Generous 100gm presentation",
    ],
    directions: "Apply a coin-sized portion to clean skin. Massage in upward circular motions for 3-5 minutes until fully absorbed, morning and evening.",
  },
  {
    id: 53,
    name: "Vintima Intimate Wash",
    slug: "vintima-intimate-wash",
    sku: "VINTIMA-INTIMATE-WASH-100ML",
    shortDescription: "Gentle pH-balanced feminine hygiene wash for daily sensitive skin care and freshness.",
    fullDescription: "Vintima Intimate Wash is a mild, non-soap liquid cleanser specifically formulated to respect the natural physiological pH of the feminine intimate area. Helps prevent odor, maintains healthy microflora balance, and provides all-day freshness.",
    price: 1500,
    salePrice: null,
    stock: 20,
    dosageForm: "Liquid Wash",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "100ml / 3.4 fl.oz",
    images: [
      "/images/products/vintima-intimate-wash-1.webp",
      "/images/products/vintima-intimate-wash-2.webp",
    ],
    features: [
      "Physiological pH 3.8-4.5 balanced",
      "Free of harsh SLS/SLES, alcohol, and artificial dyes",
      "Lactic acid infused to protect natural flora",
      "Suitable for daily cleansing and during menstrual cycle",
    ],
    directions: "Pump a small amount into palm, lather gently on the external intimate area, and rinse thoroughly with clean water.",
  },
  {
    id: 52,
    name: "Vintima Tightening Serum",
    slug: "vintima-tightening-serum",
    sku: "VINTIMA-TIGHTENING-SERUM-30ML",
    shortDescription: "Firming and toning intimate serum for targeted cosmetic care of delicate skin.",
    fullDescription: "Vintima Tightening Serum features a concentrated aqueous formula designed to help enhance tissue tone, elasticity, and firmness. Quick-absorbing and residue-free for seamless daily application.",
    price: 3000,
    salePrice: null,
    stock: 20,
    dosageForm: "Serum",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "30ml / 1 fl.oz",
    images: [
      "/images/products/vintima-tightening-serum-1.webp",
      "/images/products/vintima-tightening-serum-2.webp",
    ],
    features: [
      "High-concentration bio-peptides and botanical astringents",
      "Fast penetrating water-based serum",
      "Promotes natural skin tautness and resilience",
      "Non-irritating, gynecologically reviewed ingredients",
    ],
    directions: "Apply 2-3 drops to clean target external areas and gently pat in. Use once daily, preferably at bedtime.",
  },
  {
    id: 51,
    name: "Vintima Itchy & Dry Relief Cream",
    slug: "vintima-itchy-dry-relief-cream",
    sku: "VINTIMA-ITCHY-DRY-RELIEF-CREAM-50GM",
    shortDescription: "Gentle comfort cream for dryness-prone skin, redness, and irritation support.",
    fullDescription: "Formulated to bring fast soothing relief to dry, irritated intimate tissues. Combines colloidal oat, ceramides, and bisabolol to rapidly alleviate itching sensations and reinforce moisture retention.",
    price: 3000,
    salePrice: null,
    stock: 20,
    dosageForm: "Cream",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "50gm / 1.75 fl.oz",
    images: [
      "/images/products/vintima-itchy-dry-relief-cream-1.webp",
      "/images/products/vintima-itchy-dry-relief-cream-2.webp",
    ],
    features: [
      "Fast action cooling and anti-irritant support",
      "Steroid-free soothing formula safe for prolonged use",
      "Replenishes essential moisture barrier lipids",
      "Tested for compatibility with delicate skin",
    ],
    directions: "Apply a small layer over the affected dry or irritated area. Use 2-3 times daily as required for comfort.",
  },
  {
    id: 50,
    name: "Vintima Vaginal Tightening Cream",
    slug: "vintima-vaginal-tightening-cream",
    sku: "VINTIMA-TIGHTENING-CREAM-50GM",
    shortDescription: "Topical cream for cosmetic firmness, toning care, and intimate skin hydration.",
    fullDescription: "Vintima Vaginal Tightening Cream works topically to restore suppleness, promote tissue elasticity, and maintain rich natural hydration. Formulated with time-tested botanical extracts in a velvety cream base.",
    price: 3000,
    salePrice: null,
    stock: 20,
    dosageForm: "Cream",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "50gm / 1.75 fl.oz",
    images: [
      "/images/products/vintima-tightening-cream-1.webp",
      "/images/products/vintima-tightening-cream-2.webp",
    ],
    features: [
      "Firming botanical complex with Hamamelis & Manjakani extracts",
      "Deep hydrating emollient matrix",
      "Smooth cream texture with zero residue",
      "Clinically formulated for personal confidence",
    ],
    directions: "Apply a fingertip amount evenly to external intimate skin area with light circular massage until absorbed.",
  },
  {
    id: 49,
    name: "Vintima Vaginal Lubricant Gel",
    slug: "vintima-vaginal-lubricant-gel",
    sku: "VINTIMA-LUBRICANT-GEL-50GM",
    shortDescription: "Water-based lubricant gel for delicate feminine hydration, glide, and comfort.",
    fullDescription: "Vintima Lubricant Gel provides long-lasting, silky smooth glide that mimics natural physiological moisture. Water-soluble, completely non-sticky, and easy to rinse away.",
    price: 3000,
    salePrice: null,
    stock: 20,
    dosageForm: "Gel",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "50gm / 1.75 fl.oz",
    images: [
      "/images/products/vintima-lubricant-gel-1.webp",
      "/images/products/vintima-lubricant-gel-2.webp",
    ],
    features: [
      "100% water-soluble & condom compatible",
      "Non-greasy, non-staining, crystal-clear gel",
      "Optimal pH balance to support feminine flora",
      "Free of parabens, glycerin, and harsh petrochemicals",
    ],
    directions: "Dispense desired quantity and apply directly to intimate areas. Reapply as often as desired.",
  },
  {
    id: 48,
    name: "Vintima Vaginal Moisturization & Hormonal Balance Cream",
    slug: "vintima-vaginal-moisturization-hormonal-balance-cream",
    sku: "VINTIMA-MOISTURIZATION-BALANCE-CREAM-50GM",
    shortDescription: "Daily intimate comfort cream supporting physiological moisture and hormonal comfort.",
    fullDescription: "Designed for women experiencing intimate dryness due to hormonal shifts, postpartum changes, or menopause. Provides continuous slow-release hydration and restores comfort to delicate mucosa.",
    price: 3000,
    salePrice: null,
    stock: 20,
    dosageForm: "Cream",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "50gm / 1.75 fl.oz",
    images: [
      "/images/products/vintima-moisturization-cream-1.webp",
      "/images/products/vintima-moisturization-cream-2.webp",
    ],
    features: [
      "Hyaluronic acid + bio-lipids for sustained moisture",
      "Addresses perimenopausal and postpartum dryness",
      "Restores tissue flexibility and suppleness",
      "Gentle fragrance-free hypoallergenic base",
    ],
    directions: "Apply gently to clean intimate areas once daily, ideally before retiring at night.",
  },
  {
    id: 47,
    name: "Vintima Whitening Cream",
    slug: "vintima-whitening-cream",
    sku: "VINTIMA-WHITENING-CREAM-50GM",
    shortDescription: "Intimate brightening cream for cosmetic tone evening, firmness, and hydration.",
    fullDescription: "Formulated to gently clarify hyperpigmented or darkened intimate friction zones (bikini line, underarms, inner thighs). Powered by safe botanical brighteners like Kojic dipalmitate, Alpha Arbutin, and Licorice extract.",
    price: 3000,
    salePrice: null,
    stock: 20,
    dosageForm: "Cream",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "50gm / 1.75 fl.oz",
    images: [
      "/images/products/vintima-whitening-cream-1.webp",
      "/images/products/vintima-whitening-cream-2.webp",
    ],
    features: [
      "Hydroquinone-free and bleach-free gentle brightening",
      "Visible reduction in friction discoloration",
      "Moisturizing base prevents dehydration",
      "Suitable for inner thighs, underarms, and bikini area",
    ],
    directions: "Cleanse skin thoroughly and apply a light layer to darkened areas. Massage until absorbed. Use twice daily for best outcomes.",
  },
  {
    id: 46,
    name: "Vintima Whitening Serum",
    slug: "vintima-whitening-serum",
    sku: "VINTIMA-WHITENING-SERUM-30ML",
    shortDescription: "Advanced intimate brightening serum for targeted cosmetic brightening and smooth skin.",
    fullDescription: "A high-potency, lightweight cosmetic brightening serum designed to penetrate quickly and target uneven pigment. Contains advanced botanical tyrosinase inhibitors and Niacinamide.",
    price: 3000,
    salePrice: null,
    stock: 20,
    dosageForm: "Serum",
    category: "Gynae Aesthetics",
    categorySlug: "gynae-aesthetics",
    brand: "Vintima",
    volumeOrWeight: "30ml / 1 fl.oz",
    images: [
      "/images/products/vintima-whitening-serum-1.webp",
      "/images/products/vintima-whitening-serum-2.webp",
    ],
    features: [
      "Rapidly absorbed micro-emulsion serum",
      "Contains Niacinamide, Licorice, and Mulberry extract",
      "Non-sticky, leaves skin radiant and soft",
      "Formulated for intimate skin tolerance",
    ],
    directions: "Apply 2-3 drops to cleansed intimate skin areas requiring tone correction. Gently tap until absorbed.",
  },
  {
    id: 45,
    name: "ZAD-D SOFTGEL 2's",
    slug: "zad-d-softgel-2s",
    sku: "ZAD-D-SOFTGEL2`s",
    shortDescription: "High-potency Vitamin D3 softgel capsules for bone, muscle, and immune wellness support.",
    fullDescription: "ZAD-D Softgels deliver pharmaceutical-grade Cholecalciferol (Vitamin D3) in an easy-to-swallow liquid softgel form for optimal bioavailability and maximum gastrointestinal absorption. Essential for calcium deposition into bones, robust muscular contraction, and clinical immune support.",
    price: 750,
    salePrice: null,
    stock: 1000,
    dosageForm: "Softgel capsules",
    category: "Bone, Joint & Muscle Health",
    categorySlug: "bone-joint-muscle-health",
    brand: "Zadlife Sciences",
    volumeOrWeight: "2 Softgel Capsules per Blister",
    images: [
      "/images/products/zad-d-softgel-1.webp",
      "/images/products/zad-d-softgel-2.webp",
    ],
    features: [
      "High potency Cholecalciferol (Vitamin D3) formulation",
      "Lipid-based softgel matrix ensures superior absorption",
      "Supports skeletal density and dental mineralization",
      "Clinically proven for immune modulation and wellness",
    ],
    directions: "Take as directed by your healthcare physician or nutraceutical practitioner. Swallow whole with a glass of water, ideally with a meal containing healthy fats.",
  },
];

export const QUALITY_STANDARDS = [
  {
    title: "DRAP Nutraceutical Compliance",
    description: "Every formulation complies strictly with Drug Regulatory Authority of Pakistan (DRAP) nutraceutical and health & OTC product regulations.",
    icon: "ShieldCheck",
  },
  {
    title: "cGMP Certified Manufacturing",
    description: "Produced in state-of-the-art facilities adhering to Current Good Manufacturing Practices with cleanroom environment controls.",
    icon: "Building2",
  },
  {
    title: "Analytical & Microbiological Assay",
    description: "Every raw active pharmaceutical and botanical ingredient undergoes stringent potency assays, heavy metal testing, and stability profiling.",
    icon: "FlaskConical",
  },
  {
    title: "Cold-Chain & Tamper-Evident Packaging",
    description: "Pharmaceutical grade blister foil and sealed containers protect active ingredients from UV, moisture, and oxidation during nationwide delivery.",
    icon: "PackageCheck",
  },
];

export const FAQS = [
  {
    question: "Where is ZAD Life Sciences located in Karachi?",
    answer: "Our registered corporate office and distribution hub is located at A-34, Sector 11-A, North Karachi, Karachi, Sindh, Pakistan. You can find our exact location on Google Maps or visit us during business hours (Monday – Saturday, 9:00 AM – 7:00 PM PKT).",
  },
  {
    question: "How do I place an order for ZAD Life Sciences products?",
    answer: "You can place your order directly through our website by adding items to your inquiry list or clicking the 'Order via WhatsApp' button (+92 325 2408484). We also welcome direct phone inquiries and email orders at zadlifesciences@gmail.com.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We support EasyPaisa and Direct Bank Transfer (Account: Daim Ahmed Anees, Account #: 03342408416, IBAN: PK32TMFB0000000077007479). Cash on Delivery (COD) is also available across major cities in Pakistan for selected product orders.",
  },
  {
    question: "Do you ship nationwide across Pakistan?",
    answer: "Yes, we dispatch orders nationwide via premier courier services (TCS, Leopard, Trax). Deliveries in Karachi typically arrive within 24 to 48 hours, while major nationwide cities (Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar) take 2 to 4 business days.",
  },
  {
    question: "Are your nutraceutical and skincare products safe?",
    answer: "All ZAD Life Sciences products are formulated according to stringent safety, quality, and pharmaceutical guidelines. Our Vintima line uses gentle botanical ingredients and is free from harsh chemicals or steroids. ZAD-D Softgels utilize high-purity Vitamin D3.",
  },
  {
    question: "Do you provide bulk B2B and pharmacy wholesale distribution?",
    answer: "Yes! We partner with retail pharmacies, clinics, gynecologists, and healthcare distributors across Pakistan. Please reach out to our institutional supply desk via email or WhatsApp (+92 325 2408484) for wholesale pricing and dealer terms.",
  },
];
