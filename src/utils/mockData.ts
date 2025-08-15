import { User, Product, Farmer, Order, MarketTrend } from '../types';

export const mockFarmers: Farmer[] = [
  {
    id: '1',
    name: 'John Kimani',
    email: 'john@greenvalley.com',
    role: 'farmer',
    location: {
      lat: -1.2921,
      lng: 36.8219,
      address: 'Kiambu County, Kenya'
    },
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '+254712345678',
    createdAt: new Date('2023-01-15'),
    farm: {
      name: 'Green Valley Farm',
      description: 'Organic poultry farm specializing in free-range chicken and fresh eggs',
      certifications: ['Organic Certified', 'Free Range'],
      establishedYear: 2018
    },
    stats: {
      totalOrders: 245,
      rating: 4.8,
      totalRevenue: 125000
    }
  },
  {
    id: '2',
    name: 'Mary Wanjiku',
    email: 'mary@sunrisefarm.com',
    role: 'farmer',
    location: {
      lat: -0.0917,
      lng: 34.7680,
      address: 'Kakamega County, Kenya'
    },
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '+254723456789',
    createdAt: new Date('2022-08-20'),
    farm: {
      name: 'Sunrise Poultry',
      description: 'Premium quality eggs and chicken with focus on animal welfare',
      certifications: ['Animal Welfare Approved'],
      establishedYear: 2020
    },
    stats: {
      totalOrders: 189,
      rating: 4.6,
      totalRevenue: 98000
    }
  },
  {
    id: '3',
    name: 'Peter Mwangi',
    email: 'peter@goldenfarm.com',
    role: 'farmer',
    location: {
      lat: -0.3031,
      lng: 36.0800,
      address: 'Nakuru County, Kenya'
    },
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '+254734567890',
    createdAt: new Date('2023-03-10'),
    farm: {
      name: 'Golden Harvest Farm',
      description: 'Large scale poultry operation with modern facilities',
      certifications: ['ISO 22000'],
      establishedYear: 2015
    },
    stats: {
      totalOrders: 312,
      rating: 4.7,
      totalRevenue: 187000
    }
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    farmerId: '1',
    name: 'Free Range Chicken',
    category: 'chicken',
    price: 800,
    unit: 'per kg',
    description: 'Premium free-range chicken raised on organic feed with no antibiotics',
    images: [
      'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1059947/pexels-photo-1059947.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 50,
    quality: {
      rating: 4.8,
      reviews: 45,
      organic: true,
      freshness: 95
    },
    location: {
      lat: -1.2921,
      lng: 36.8219,
      address: 'Kiambu County, Kenya'
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    farmerId: '1',
    name: 'Farm Fresh Eggs',
    category: 'eggs',
    price: 15,
    unit: 'per piece',
    description: 'Fresh eggs from free-range hens, collected daily',
    images: [
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 200,
    quality: {
      rating: 4.9,
      reviews: 67,
      organic: true,
      freshness: 98
    },
    location: {
      lat: -1.2921,
      lng: 36.8219,
      address: 'Kiambu County, Kenya'
    },
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-16')
  },
  {
    id: '3',
    farmerId: '2',
    name: 'Premium Chicken',
    category: 'chicken',
    price: 750,
    unit: 'per kg',
    description: 'High-quality chicken with excellent taste and nutrition',
    images: [
      'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 30,
    quality: {
      rating: 4.6,
      reviews: 32,
      organic: false,
      freshness: 92
    },
    location: {
      lat: -0.0917,
      lng: 34.7680,
      address: 'Kakamega County, Kenya'
    },
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-14')
  },
  {
    id: '4',
    farmerId: '3',
    name: 'Organic Chicken Manure',
    category: 'manure',
    price: 50,
    unit: 'per kg',
    description: 'Rich organic fertilizer perfect for vegetable gardens',
    images: [
      'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 500,
    quality: {
      rating: 4.7,
      reviews: 23,
      organic: true,
      freshness: 90
    },
    location: {
      lat: -0.3031,
      lng: 36.0800,
      address: 'Nakuru County, Kenya'
    },
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-13')
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    customerId: 'customer1',
    farmerId: '1',
    products: [
      { productId: '1', quantity: 2, price: 800 },
      { productId: '2', quantity: 12, price: 15 }
    ],
    total: 1780,
    status: 'delivered',
    deliveryAddress: 'Nairobi CBD, Kenya',
    estimatedDelivery: new Date('2024-01-20'),
    createdAt: new Date('2024-01-18')
  },
  {
    id: '2',
    customerId: 'customer2',
    farmerId: '2',
    products: [
      { productId: '3', quantity: 3, price: 750 }
    ],
    total: 2250,
    status: 'shipped',
    deliveryAddress: 'Kisumu, Kenya',
    estimatedDelivery: new Date('2024-01-22'),
    createdAt: new Date('2024-01-19')
  }
];

export const mockTrends: MarketTrend[] = [
  {
    category: 'chicken',
    period: 'January 2024',
    demand: 85,
    averagePrice: 775,
    prediction: {
      nextMonth: 820,
      confidence: 0.87
    }
  },
  {
    category: 'eggs',
    period: 'January 2024',
    demand: 92,
    averagePrice: 14.5,
    prediction: {
      nextMonth: 15.2,
      confidence: 0.91
    }
  },
  {
    category: 'manure',
    period: 'January 2024',
    demand: 68,
    averagePrice: 48,
    prediction: {
      nextMonth: 52,
      confidence: 0.79
    }
  }
];