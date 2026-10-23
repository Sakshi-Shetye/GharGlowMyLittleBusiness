import { Product } from '../types';

export const products: Product[] = [
  // 1. Floating & Decorative Candles
  {
    id: 'rose-floating',
    name: 'Rose-Design Floating Candles',
    category: 'candles',
    categoryLabel: 'Floating & Decorative Candles',
    shortDesc: 'Sculpted floral candles designed to float beautifully in decorative water bowls, festive urli arrangements, and intimate celebrations.',
    fullDesc: 'Handcrafted floral floating candles sculpted into layered rose blossoms in warm marigold yellow and ivory cream. Designed with balanced buoyancy to float steadily in water bowls, brass urlis, and floral centerpieces while casting a gentle, dancing candlelight.',
    image: '/assets/aistudio/product_rose_floating.jpg',
    gallery: [
      '/assets/aistudio/product_rose_floating.jpg',
      '/assets/aistudio/Handcrafted_Diwali_Candle_Collection_0c61c526.png'
    ],
    price: 150,
    priceDisplay: '₹150',
    packOptions: [
      { label: 'Box of 12 Pieces', pieces: 12, price: 150 }
    ],
    defaultPack: 'Box of 12 Pieces',
    isConfirmedPhoto: true,
    modelType: 'rose-floating',
    fragranceNotes: 'Delicate Floral Rose & Honey Wax',
    burnTime: 'Approx. 2.5 - 3 hours each',
    isFeatured: true
  },
  {
    id: 'rose-tealight',
    name: 'Rose-Scented Tea-Light Candles',
    category: 'candles',
    categoryLabel: 'Floating & Decorative Candles',
    shortDesc: 'Small rose-scented lights for peaceful evenings, festive decorations, thoughtful gifts, and cosy corners of home.',
    fullDesc: 'Poured in soft blush-pink wax with a soothing natural rose fragrance. Perfect for creating heart formations, lighting up rangolis, placing inside lanterns, or winding down after a long day with a familiar comforting aroma.',
    image: '/assets/aistudio/product_rose_tealight.jpg',
    gallery: [
      '/assets/aistudio/product_rose_tealight.jpg',
      '/assets/aistudio/Handcrafted_Diwali_Candle_Collection_0c61c526.png'
    ],
    price: 160,
    priceDisplay: '₹160',
    packOptions: [
      { label: 'Box of 12 Pieces', pieces: 12, price: 160 }
    ],
    defaultPack: 'Box of 12 Pieces',
    isConfirmedPhoto: true,
    modelType: 'rose-tealight',
    fragranceNotes: 'Fresh Indian Desi Gulab (Rose)',
    burnTime: 'Approx. 3.5 - 4 hours each',
    isFeatured: true
  },
  {
    id: 'ladoo-candles',
    name: 'Pink Motichoor Ladoo Candles',
    category: 'candles',
    categoryLabel: 'Floating & Decorative Candles',
    shortDesc: 'Festive ladoo-inspired candles that bring the warmth and sweetness of Indian celebrations into your décor and gifting.',
    fullDesc: 'Meticulously crafted with authentic granular boondi bead texture, festive golden sheen, and a pure cotton wick at the center. Evokes the joy of Diwali sweets and auspicious celebrations, making them a captivating conversation piece and a heartwarming gift.',
    image: '/assets/aistudio/product_ladoo_candles.jpg',
    gallery: [
      '/assets/aistudio/product_ladoo_candles.jpg',
      '/assets/aistudio/Handcrafted_Diwali_Candle_Collection_0c61c526.png'
    ],
    price: 140,
    priceDisplay: '₹140',
    packOptions: [
      { label: 'Box of 6 Pieces', pieces: 6, price: 140 }
    ],
    defaultPack: 'Box of 6 Pieces',
    isConfirmedPhoto: true,
    modelType: 'ladoo',
    fragranceNotes: 'Subtle Festive Sweet Vanilla & Saffron aroma',
    burnTime: 'Approx. 4 hours each',
    isFeatured: true
  },

  // 2. Traditional Pure-Ghee Panti Diyas
  {
    id: 'panti-diya',
    name: 'Traditional Pure-Ghee Panti Diya',
    category: 'pure-ghee-panti',
    categoryLabel: 'Pure-Ghee Panti Diyas',
    shortDesc: 'A traditional light for daily prayers, evening rituals, festive celebrations, and the familiar feeling of home.',
    fullDesc: 'Crafted with an authentic earthen-toned diya shell filled with solid golden-yellow pure ghee and a pre-set crimson red cotton wick. Ready to light straight from the tray without messy pouring, casting a warm, sacred and smokeless golden glow for daily puja, aarti, and Diwali festivities.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.34_PM_cfe7ca8a.jpeg',
    gallery: [
      '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.34_PM_cfe7ca8a.jpeg'
    ],
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 6 Pieces', pieces: 6 },
      { label: 'Pack of 12 Pieces', pieces: 12 }
    ],
    defaultPack: 'Pack of 6 Pieces',
    isConfirmedPhoto: true,
    modelType: 'panti-diya',
    fragranceNotes: 'Pure Clarified Cow Ghee Aroma',
    burnTime: 'Approx. 35 - 45 minutes',
    isFeatured: true
  },

  // 3. Traditional Pure-Ghee Ful Vatis
  {
    id: 'green-rose-vati',
    name: 'Rose-Scented Green Pure-Ghee Ful Vatis',
    category: 'pure-ghee-vatis',
    categoryLabel: 'Pure-Ghee Ful Vatis',
    shortDesc: 'Floral-inspired ful vatis that bring a gentle rose fragrance and a colourful touch to traditional rituals.',
    fullDesc: 'Moulded in distinctive five-pointed star shapes in refreshing mint green, infused with pure ghee and soothing rose notes. Pre-waxed upright wicks ensure easy ignition and steady burning during morning and evening prayers.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.35_PM_9356000b.jpeg',
    gallery: [
      '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.35_PM_9356000b.jpeg'
    ],
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 30 Pieces', pieces: 30 },
      { label: 'Pack of 50 Pieces', pieces: 50 }
    ],
    defaultPack: 'Pack of 30 Pieces',
    isConfirmedPhoto: true,
    modelType: 'star-vati',
    fragranceNotes: 'Gentle Rose Blossom & Pure Ghee',
    burnTime: 'Approx. 25 - 30 minutes each',
    isFeatured: true
  },
  {
    id: 'kewra-vati',
    name: 'Kewra-Scented Pure-Ghee Ful Vatis',
    category: 'pure-ghee-vatis',
    categoryLabel: 'Pure-Ghee Ful Vatis',
    shortDesc: 'Delicately scented ful vatis for traditional rituals and peaceful festive evenings.',
    fullDesc: 'Hand-poured pale yellow square ful vatis infused with traditional kewra (pandanus flower) attar and pure ghee. Softly fragrant, clean burning, and ideal for temple altars, home mandirs, and meditation nooks.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.36_PM_3f4b6bca.jpeg',
    gallery: [
      '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.36_PM_3f4b6bca.jpeg'
    ],
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 30 Pieces', pieces: 30 },
      { label: 'Pack of 50 Pieces', pieces: 50 }
    ],
    defaultPack: 'Pack of 30 Pieces',
    isConfirmedPhoto: true,
    modelType: 'square-kewra',
    fragranceNotes: 'Traditional Kewra Floral Water & Ghee',
    burnTime: 'Approx. 25 - 30 minutes each',
    isFeatured: true
  },
  {
    id: 'chandan-vati',
    name: 'Chandan-Scented Pure-Ghee Ful Vatis',
    category: 'pure-ghee-vatis',
    categoryLabel: 'Pure-Ghee Ful Vatis',
    shortDesc: 'Sandalwood-inspired traditional lights for a warm, grounded, devotional atmosphere.',
    fullDesc: 'Warm peach-orange square and star vatis made with sacred sandalwood scent and pure clarified ghee. The grounding earthy chandan scent calms the senses and fills the home with peaceful sanctity during daily diya lighting.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.38_PM_99d3e8ac.jpeg',
    gallery: [
      '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.38_PM_99d3e8ac.jpeg'
    ],
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 30 Pieces', pieces: 30 },
      { label: 'Pack of 50 Pieces', pieces: 50 }
    ],
    defaultPack: 'Pack of 30 Pieces',
    isConfirmedPhoto: true,
    modelType: 'square-chandan',
    fragranceNotes: 'Auspicious Sandalwood (Chandan) & Ghee',
    burnTime: 'Approx. 25 - 30 minutes each',
    isFeatured: true
  },
  {
    id: 'mixed-ful-vati',
    name: 'Mixed Rose, Kewra & Chandan Ful Vatis',
    category: 'pure-ghee-vatis',
    categoryLabel: 'Pure-Ghee Ful Vatis',
    shortDesc: 'A curated assortment featuring all three fragrance varieties (Rose, Kewra, and Chandan).',
    fullDesc: 'Experience the complete trio of devotional fragrances in one pack. Includes mint-green Rose, pale-yellow Kewra, and peach-orange Chandan vatis prepared with authentic ghee formulation.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.38_PM_99d3e8ac.jpeg',
    gallery: [
      '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.35_PM_9356000b.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.36_PM_3f4b6bca.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.38_PM_99d3e8ac.jpeg'
    ],
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Assorted Box of 36 Pieces', pieces: 36 }
    ],
    defaultPack: 'Assorted Box of 36 Pieces',
    isConfirmedPhoto: true,
    modelType: 'provisional',
    fragranceNotes: 'Rose, Kewra & Sandalwood Bouquet',
    burnTime: 'Approx. 25 - 30 minutes each'
  },
  {
    id: 'classic-ghee-vati',
    name: 'Classic Pure-Ghee Ful Vatis',
    category: 'pure-ghee-vatis',
    categoryLabel: 'Pure-Ghee Ful Vatis',
    shortDesc: 'Pure traditional round cotton ful vatis soaked in natural clarified ghee for unadorned daily devotion.',
    fullDesc: 'Unscented, traditional cow ghee vatis made for sacred rituals, daily aartis, and havan ceremonies. Preserves the timeless Vedic lighting tradition with zero artificial additives.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.34_PM_cfe7ca8a.jpeg',
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 50 Pieces', pieces: 50 },
      { label: 'Pack of 100 Pieces', pieces: 100 }
    ],
    defaultPack: 'Pack of 50 Pieces',
    isConfirmedPhoto: false, // Marked pending verified single-shot
    modelType: 'provisional',
    fragranceNotes: 'Natural Ghee Aroma (Unscented)',
    burnTime: 'Approx. 20 - 25 minutes each'
  },
  {
    id: 'multicolour-tea-lights',
    name: 'Multicolour Pure-Ghee Tea Lights',
    category: 'pure-ghee-vatis',
    categoryLabel: 'Pure-Ghee Ful Vatis',
    shortDesc: 'Festive pure-ghee tea lights poured in joyful assorted colours for Diwali rangolis and evening ceremonies.',
    fullDesc: 'Bright, cheerful pure-ghee lights designed to illuminate entryways, balconies, and courtyards with vibrant festival colours.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.35_PM_9356000b.jpeg',
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 12 Pieces', pieces: 12 },
      { label: 'Pack of 24 Pieces', pieces: 24 }
    ],
    defaultPack: 'Pack of 12 Pieces',
    isConfirmedPhoto: false,
    modelType: 'provisional',
    fragranceNotes: 'Mild Floral Festival Blend',
    burnTime: 'Approx. 40 minutes each'
  },

  // 4. Special Vatis
  {
    id: 'kapoor-ful-vati',
    name: 'Kapoor (Camphor) Ful Vatis',
    category: 'special-vatis',
    categoryLabel: 'Special Vatis',
    shortDesc: 'Pure-ghee ful vatis infused with natural purifying camphor for sacred morning and evening aartis.',
    fullDesc: 'Combines the auspicious flame of pure ghee with the invigorating, negative-energy clearing aroma of camphor. Ignites effortlessly and leaves behind an uplifting sacred temple freshness.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.36_PM_3f4b6bca.jpeg',
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 30 Pieces', pieces: 30 },
      { label: 'Pack of 50 Pieces', pieces: 50 }
    ],
    defaultPack: 'Pack of 30 Pieces',
    isConfirmedPhoto: false,
    modelType: 'provisional',
    fragranceNotes: 'Natural Purifying Camphor (Kapoor)',
    burnTime: 'Approx. 20 - 25 minutes each'
  },
  {
    id: 'bhimsen-kapoor-vati',
    name: 'Bhimsen Kapoor Ful Vatis',
    category: 'special-vatis',
    categoryLabel: 'Special Vatis',
    shortDesc: 'Formulated with organic unrefined Bhimseni camphor and cow ghee for supreme spiritual clarity.',
    fullDesc: 'Handcrafted exclusively with premium Bhimseni pacha kapoor, known in Ayurvedic scriptures for its pure therapeutic smoke and deeply calming, resonant aura.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-18_at_7.23.36_PM_3f4b6bca.jpeg',
    priceDisplay: 'Ask for Price',
    packOptions: [
      { label: 'Pack of 25 Pieces', pieces: 25 },
      { label: 'Pack of 50 Pieces', pieces: 50 }
    ],
    defaultPack: 'Pack of 25 Pieces',
    isConfirmedPhoto: false,
    modelType: 'provisional',
    fragranceNotes: 'Authentic Bhimseni Pacha Kapoor',
    burnTime: 'Approx. 25 minutes each'
  },

  // 5. Lanterns & Gifts
  {
    id: 'small-artisanal-lantern',
    name: 'Small Artisanal Festive Lantern',
    category: 'lanterns-gifts',
    categoryLabel: 'Lanterns & Gifts',
    shortDesc: 'Intricately perforated metallic lantern that casts delicate dancing shadows when lit with GharGlow tea lights.',
    fullDesc: 'Handmade cutwork metal lantern designed to hold tea lights or small floating candles. Ideal for balconies, festive gifting hampers, and window sills.',
    image: '/src/assets/images/lifestyle_festive_gifting_1792780643320.jpg',
    price: 285,
    priceDisplay: '₹285',
    packOptions: [
      { label: 'Single Piece (Retail)', pieces: 1, price: 285 },
      { label: 'Bulk Order (10+ Pieces)', pieces: 10, price: 1800 }
    ],
    defaultPack: 'Single Piece (Retail)',
    isConfirmedPhoto: true,
    modelType: 'provisional',
    burnTime: 'Reusable decorative housing',
    isFeatured: false
  },
  {
    id: 'flower-lantern-gold',
    name: 'Pink & Golden Flower Lantern',
    category: 'lanterns-gifts',
    categoryLabel: 'Lanterns & Gifts',
    shortDesc: 'A celebratory artisanal lantern with floral filigree, blush accents, and golden brass trims.',
    fullDesc: 'An opulent table and hanging lantern featuring botanical filigree that projects mesmerizing floral patterns around your living room and festive entryway.',
    image: '/src/assets/images/hero_candlelit_evening_1792780642792.jpg',
    price: 379,
    priceDisplay: '₹379',
    packOptions: [
      { label: 'Single Piece (Retail)', pieces: 1, price: 379 },
      { label: 'Bulk Order (10+ Pieces)', pieces: 10, price: 2100 }
    ],
    defaultPack: 'Single Piece (Retail)',
    isConfirmedPhoto: true,
    modelType: 'provisional',
    burnTime: 'Reusable decorative housing',
    isFeatured: false
  }
];

export const productCategories = [
  { id: 'all', label: 'All Products', count: products.length },
  { id: 'candles', label: 'Candles', count: products.filter(p => p.category === 'candles').length },
  { id: 'pure-ghee-panti', label: 'Pure-Ghee Panti Diyas', count: products.filter(p => p.category === 'pure-ghee-panti').length },
  { id: 'pure-ghee-vatis', label: 'Pure-Ghee Ful Vatis', count: products.filter(p => p.category === 'pure-ghee-vatis').length },
  { id: 'special-vatis', label: 'Special Vatis', count: products.filter(p => p.category === 'special-vatis').length },
  { id: 'lanterns-gifts', label: 'Lanterns & Gifts', count: products.filter(p => p.category === 'lanterns-gifts').length }
];
