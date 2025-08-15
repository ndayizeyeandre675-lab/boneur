export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'customer' | 'admin';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  avatar?: string;
  phone?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  farmerId: string;
  name: string;
  category: 'chicken' | 'eggs' | 'manure';
  price: number;
  unit: string;
  description: string;
  images: string[];
  stock: number;
  quality: {
    rating: number;
    reviews: number;
    organic: boolean;
    freshness: number;
  };
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  customerId: string;
  farmerId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  deliveryAddress: string;
  estimatedDelivery: Date;
  createdAt: Date;
}

export interface Farmer extends User {
  role: 'farmer';
  farm: {
    name: string;
    description: string;
    certifications: string[];
    establishedYear: number;
  };
  stats: {
    totalOrders: number;
    rating: number;
    totalRevenue: number;
  };
}

export interface Recommendation {
  productId: string;
  score: number;
  reason: string;
  savings?: number;
  qualityBonus?: number;
}

export interface MarketTrend {
  category: string;
  period: string;
  demand: number;
  averagePrice: number;
  prediction: {
    nextMonth: number;
    confidence: number;
  };
}