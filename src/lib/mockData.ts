export interface Property {
  id: string;
  title: string;
  location: string;
  area: string;
  price: number;
  priceType: 'month' | 'year' | 'night';
  type: 'apartment' | 'house' | 'studio' | 'duplex';
  bedrooms: number;
  bathrooms: number;
  isVerified: boolean;
  images: string[];
  agent: Agent;
  description: string;
  amenities: string[];
  availableFrom: string;
}

export interface Agent {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  isVerified: boolean;
  phone: string;
  email: string;
  properties: number;
  responseRate: number;
  memberSince: string;
}


// Temporary mock data — will be replaced with API responses later

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Adebayo Isreal',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    reviews: 127,
    isVerified: true,
    phone: '+234 803 456 7890',
    email: 'adebayo@rentproof.ng',
    properties: 24,
    responseRate: 98,
    memberSince: '2022',
  },
  {
    id: '2',
    name: 'Chioma Nwankwo',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    reviews: 89,
    isVerified: true,
    phone: '+234 805 123 4567',
    email: 'chioma@rentproof.ng',
    properties: 18,
    responseRate: 95,
    memberSince: '2023',
  },
  {
    id: '3',
    name: 'Emmanuel Adeyemi',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    reviews: 64,
    isVerified: false,
    phone: '+234 808 765 4321',
    email: 'emmanuel@rentproof.ng',
    properties: 12,
    responseRate: 88,
    memberSince: '2023',
  },
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 3-Bedroom Apartment in Lekki Phase 1',
    location: 'Lekki Phase 1, Lagos',
    area: 'Lekki',
    price: 3500000,
    priceType: 'year',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    ],
    agent: mockAgents[0],
    description: 'Luxurious 3-bedroom apartment with modern finishes, 24/7 power supply, swimming pool, and gym access. Located in a serene environment with easy access to major roads.',
    amenities: ['24/7 Power', 'Swimming Pool', 'Gym', 'Security', 'Parking', 'AC'],
    availableFrom: '2024-02-01',
  },
  {
    id: '2',
    title: 'Cozy Studio in Victoria Island',
    location: 'Victoria Island, Lagos',
    area: 'Victoria Island',
    price: 150000,
    priceType: 'month',
    type: 'studio',
    bedrooms: 1,
    bathrooms: 1,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
    ],
    agent: mockAgents[1],
    description: 'Perfect for young professionals. Fully furnished studio with modern kitchen, fast internet, and amazing city views.',
    amenities: ['Furnished', 'WiFi', 'AC', 'Security', 'Gym Access'],
    availableFrom: '2024-01-15',
  },
  {
    id: '3',
    title: 'Spacious 4-Bedroom Duplex in Ikeja GRA',
    location: 'Ikeja GRA, Lagos',
    area: 'Ikeja',
    price: 5000000,
    priceType: 'year',
    type: 'duplex',
    bedrooms: 4,
    bathrooms: 4,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    ],
    agent: mockAgents[0],
    description: 'Executive 4-bedroom duplex with boys quarters, large compound, and modern finishes throughout. Ideal for families.',
    amenities: ['BQ', 'Garage', '24/7 Power', 'Garden', 'Security', 'AC'],
    availableFrom: '2024-03-01',
  },
  {
    id: '4',
    title: '2-Bedroom Flat in Yaba',
    location: 'Yaba, Lagos',
    area: 'Yaba',
    price: 1200000,
    priceType: 'year',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    isVerified: false,
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop',
    ],
    agent: mockAgents[2],
    description: 'Affordable 2-bedroom apartment in the heart of Yaba. Close to tech hubs and universities.',
    amenities: ['Security', 'Parking', 'Water Supply'],
    availableFrom: '2024-01-20',
  },
  {
    id: '5',
    title: 'Luxury Penthouse in Ikoyi',
    location: 'Ikoyi, Lagos',
    area: 'Ikoyi',
    price: 12000000,
    priceType: 'year',
    type: 'apartment',
    bedrooms: 4,
    bathrooms: 5,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    ],
    agent: mockAgents[1],
    description: 'Ultra-luxury penthouse with panoramic views of Lagos lagoon. Premium finishes, private elevator, and exclusive amenities.',
    amenities: ['Private Elevator', 'Rooftop Terrace', 'Smart Home', 'Concierge', 'Pool', 'Gym'],
    availableFrom: '2024-02-15',
  },
  {
    id: '6',
    title: 'Event Space in Surulere',
    location: 'Surulere, Lagos',
    area: 'Surulere',
    price: 50000,
    priceType: 'night',
    type: 'house',
    bedrooms: 0,
    bathrooms: 2,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    ],
    agent: mockAgents[0],
    description: 'Perfect venue for weddings, conferences, and events. Capacity up to 500 guests with catering options available.',
    amenities: ['Catering Available', 'Sound System', 'Projector', 'AC', 'Parking', 'Generator'],
    availableFrom: '2024-01-01',
  },
];

export const areas = ['All Areas', 'Lekki', 'Victoria Island', 'Ikoyi', 'Ikeja', 'Yaba', 'Surulere'];
export const propertyTypes = ['All Types', 'Apartment', 'House', 'Studio', 'Duplex'];
export const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under ₦1M/yr', min: 0, max: 1000000 },
  { label: '₦1M - ₦3M/yr', min: 1000000, max: 3000000 },
  { label: '₦3M - ₦5M/yr', min: 3000000, max: 5000000 },
  { label: 'Above ₦5M/yr', min: 5000000, max: Infinity },
];

export const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    return `₦${(price / 1000000).toFixed(1)}M`;
  }
  return `₦${price.toLocaleString()}`;
};
