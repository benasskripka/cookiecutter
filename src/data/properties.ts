export interface Property {
  id: string | number;
  title: string;
  type: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  guests: number;
  highlight: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number | null;
  discount: string | null;
  totalPrice: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  badge: string | null;
  amenities: string[];
}

export interface DBProperty {
  property_id: string;
  name: string;
  property_type: string;
  bedrooms: string;
  beds: number;
  beds_description: string;
  highlights: string;
  long_highlight: string;
  tags: string;
  currency: string;
  nightly_price_usd: number;
  total_price_usd: number;
  discount_percent: number;
  review_count: number;
  review_score_10: number;
  image_urls: string;
  location_area: string;
  latitude: number;
  longitude: number;
  coordinate_accuracy: string;
  source: string;
  source_url: string;
  pricing_notes: string;
  nightly_rate: string;
  cleaning_fee: string;
  taxes_rate: string;
}

const MAUI_IMAGES = [
  "https://images.unsplash.com/photo-1615044841895-9c576f5b5400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwYmVhY2glMjBob3VzZSUyMHZhY2F0aW9uJTIwcmVudGFsfGVufDF8fHx8MTc2ODk3NTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1615343064155-7b4bf070295c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwb2NlYW5mcm9udCUyMGNvbmRvfGVufDF8fHx8MTc2ODk3NTgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1646843133098-feef6167b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwbHV4dXJ5JTIwdmlsbGElMjBwb29sfGVufDF8fHx8MTc2ODk3NTgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1604724708864-afe71d37b772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwcmVzb3J0JTIwYXBhcnRtZW50JTIwYmFsY29ueXxlbnwxfHx8fDE3Njg5NzU4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1633511090164-b43840ea1607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYXdhaWklMjBjb3R0YWdlJTIwdHJvcGljYWwlMjBnYXJkZW58ZW58MXx8fHwxNzY4OTc1ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1710443793899-727b425f7eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwYmVhY2glMjBzdW5zZXQlMjBwYWxtJTIwdHJlZXN8ZW58MXx8fHwxNzY4OTgxMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1511936606692-5e0d73f6b638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwd2F0ZXJmYWxsJTIwbHVzaCUyMHJhaW5mb3Jlc3R8ZW58MXx8fHwxNzY4OTgxMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1655365035208-6061727ba478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwc25vcmtlbGluZyUyMHR1cnRsZSUyMG9jZWFufGVufDF8fHx8MTc2ODk4MTA5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1705868259358-131559d1fff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwdm9sY2FubyUyMGhhbGVha2FsYSUyMGNyYXRlcnxlbnwxfHx8fDE3Njg5ODEwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1597684820843-ea3ae0e85f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwcm9hZCUyMHRvJTIwaGFuYSUyMGNvYXN0bGluZXxlbnwxfHx8fDE3Njg5ODEwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1646843133098-feef6167b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwbHV4dXJ5JTIwcmVzb3J0JTIwcG9vbCUyMHRyb3BpY2FsfGVufDF8fHx8MTc2ODk4MTA5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1743744111594-6c2d1f283c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVpJTIwYmFtYm9vJTIwZm9yZXN0JTIwaGlraW5nfGVufDF8fHx8MTc2ODk4MTA5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
];

const TITLES = [
  "Oceanfront Maui Condo with Stunning Views",
  "Luxury Wailea Villa - Private Pool",
  "Cozy Cottage in Hana Rainforest",
  "Beachfront Kihei Home - Steps to Sand",
  "Modern Kaanapali Resort Studio",
  "Secluded Upcountry Estate",
  "Lahaina Shores Beach Resort",
  "Makena Surf - Direct Ocean Access",
  "Kapalua Golf Villa with Ocean View",
  "Paia Surf Shack - Walk to Beach",
  "Napili Bay Beach House",
  "Grand Wailea Penthouse Suite"
];

const LOCATIONS = [
  "Kihei", "Wailea", "Lahaina", "Kaanapali", "Hana", "Paia", "Kapalua", "Makena", "Napili", "Maalaea"
];

const TYPES = ["Condo", "House", "Villa", "Cottage", "Studio", "Resort"];
const BADGES = ["Premier Host", "Exceptional!", "Guest Favorite", "Rare Find", null, null, null];

const AMENITIES_LIST = [
  "Wifi", "Kitchen", "Free parking", "Pool", "Hot tub", "Air conditioning", 
  "Ocean view", "Beach access", "Washer", "Dryer"
];

// Helper to generate consistent random coordinates around Maui
// Maui center approx: 20.7984, -156.3319
function getRandomCoordinate(baseLat: number, baseLng: number, radiusDeg: number) {
  const r = radiusDeg * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  return {
    lat: baseLat + r * Math.cos(theta),
    lng: baseLng + r * Math.sin(theta)
  };
}

export const PROPERTIES: Property[] = Array.from({ length: 50 }, (_, i) => {
  const title = TITLES[i % TITLES.length];
  const location = LOCATIONS[i % LOCATIONS.length];
  const type = TYPES[i % TYPES.length];
  const bedrooms = (i % 4) + 1;
  const beds = bedrooms * 2;
  const bathrooms = Math.max(1, Math.floor(bedrooms * 0.75));
  const guests = beds + 2;
  
  // Pricing logic
  const basePrice = 200 + (i * 13) % 1000;
  const isDiscounted = i % 3 === 0;
  const originalPrice = isDiscounted ? Math.floor(basePrice * 1.2) : null;
  const price = basePrice;
  const discount = originalPrice ? `${Math.floor((1 - price / originalPrice) * 100)}% off` : null;
  
  // Rating logic
  const rating = 4 + (i % 10) / 10 + (Math.random() * 0.1); // 4.0 to 5.0
  const reviews = 10 + (i * 7) % 300;

  // Images logic - rotate through images, assign multiple per property
  const mainImageIndex = i % MAUI_IMAGES.length;
  const propertyImages = [
    MAUI_IMAGES[mainImageIndex],
    MAUI_IMAGES[(mainImageIndex + 1) % MAUI_IMAGES.length],
    MAUI_IMAGES[(mainImageIndex + 2) % MAUI_IMAGES.length],
    MAUI_IMAGES[(mainImageIndex + 3) % MAUI_IMAGES.length],
  ];

  // Coordinates
  const coords = getRandomCoordinate(20.7984, -156.3319, 0.15);

  return {
    id: i + 1,
    title: `${title} ${i > 10 ? i : ''}`,
    type,
    bedrooms,
    beds,
    bathrooms,
    guests,
    highlight: `${(i % 15) + 1} min walk to ${location} Beach`,
    description: `Experience the best of Maui in this beautiful ${type.toLowerCase()}. Located in ${location}, this property features stunning views, modern amenities, and is just steps away from the beach. Perfect for families or couples looking for a romantic getaway.`,
    rating: Number(rating.toFixed(2)),
    reviews,
    price,
    originalPrice,
    discount,
    totalPrice: `$${price * 6 + 300} for 6 nights`,
    images: propertyImages,
    coordinates: coords,
    badge: BADGES[i % BADGES.length],
    amenities: AMENITIES_LIST.sort(() => 0.5 - Math.random()).slice(0, 6)
  };
});