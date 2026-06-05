export interface ServiceItem {
  id: number;
  title: string;
  hasProfileImage?: boolean;
  imageUrl?: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  collection: string;
  price: number;
  variants: number;
  image: string;
  isLarge?: boolean;
}