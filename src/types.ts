export type ProductCategory = 
  | 'all'
  | 'candles'
  | 'pure-ghee-panti'
  | 'pure-ghee-vatis'
  | 'special-vatis'
  | 'lanterns-gifts';

export interface ProductPackOption {
  label: string;
  pieces: number;
  price?: number; // undefined means "Ask for Price"
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery?: string[];
  price?: number; // confirmed price if available
  priceDisplay?: string; // e.g. "₹150" or "Ask for Price"
  packOptions: ProductPackOption[];
  defaultPack: string;
  isConfirmedPhoto: boolean;
  modelType: 'rose-floating' | 'rose-tealight' | 'ladoo' | 'panti-diya' | 'star-vati' | 'square-kewra' | 'square-chandan' | 'provisional';
  fragranceNotes?: string;
  burnTime?: string;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  selectedPack: ProductPackOption;
  quantity: number;
}
