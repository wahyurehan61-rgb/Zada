export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  sold: number;
  art: string;
  image?: string;
  gallery?: string[];
  category: string;
  badge?: string;
  description: string;
  meaning: string;
  origin: string;
  colors: string[];
  stock: "In Stock" | "Low Stock" | "Made to Order";
};

export const formatIDR = (n: number) =>
  "Rp" + n.toLocaleString("id-ID");

export const categories = [
  { name: "Graduation", art: "mixed", slug: "graduation" },
  { name: "Wedding", art: "peony", slug: "wedding" },
  { name: "Birthday", art: "rose", slug: "birthday" },
  { name: "Anniversary", art: "tulip", slug: "anniversary" },
  { name: "Money Bouquet", art: "money", slug: "money-bouquet" },
  { name: "Snack Bouquet", art: "snack", slug: "snack-bouquet" },
  { name: "Luxury Roses", art: "rose", slug: "luxury-roses" },
  { name: "Peonies", art: "peony", slug: "peonies" },
  { name: "Sunflowers", art: "sunflower", slug: "sunflowers" },
  { name: "Lilies", art: "lily", slug: "lilies" },
  { name: "Tulips", art: "tulip", slug: "tulips" },
  { name: "Baby Breath", art: "baby-breath", slug: "baby-breath" },
] as const;

export const products: Product[] = [
  {
    slug: "luxury-peony-bouquet",
    image: "/images/products/luxury-peony-bouquet.jpg",
    gallery: ["/images/products/luxury-peony-bouquet-1.jpg", "/images/products/luxury-peony-bouquet-2.jpg", "/images/products/luxury-peony-bouquet-3.jpg", "/images/products/luxury-peony-bouquet-4.jpg"],
    name: "Luxury Peony Bouquet",
    price: 325000,
    compareAt: 375000,
    rating: 4.9,
    reviews: 135,
    sold: 215,
    art: "peony",
    category: "Peonies",
    badge: "Best Seller",
    description:
      "An elegant bouquet of premium fresh peonies, symbolizing prosperity and heartfelt love. Hand-tied by our florists in signature black wrap with a champagne ribbon.",
    meaning: "Prosperity, romance, and good fortune.",
    origin: "Sourced from highland peony farms, hand-selected each morning.",
    colors: ["#e9c9c9", "#f4e7d3", "#c23b4a", "#7f8fc9", "#c9a7d6"],
    stock: "In Stock",
  },
  {
    slug: "bouquet-of-seven-roses",
    image: "/images/products/bouquet-of-seven-roses.jpg",
    gallery: ["/images/products/bouquet-of-seven-roses-1.jpg", "/images/products/bouquet-of-seven-roses-2.jpg", "/images/products/bouquet-of-seven-roses-3.jpg", "/images/products/bouquet-of-seven-roses-4.jpg"],
    name: "A Bouquet of Seven Roses",
    price: 185000,
    rating: 4.8,
    reviews: 98,
    sold: 340,
    art: "rose",
    category: "Luxury Roses",
    description:
      "Seven long-stem roses wrapped in cream kraft paper with a blush ribbon — a timeless gesture for the ones who matter most.",
    meaning: "Infatuation and deep affection.",
    origin: "Ecuadorian long-stem roses, flown in weekly.",
    colors: ["#c23b4a", "#f4e7d3", "#eec9d8"],
    stock: "In Stock",
  },
  {
    slug: "sunflower-bouquet",
    image: "/images/products/sunflower-bouquet.jpg",
    gallery: ["/images/products/sunflower-bouquet-1.jpg", "/images/products/sunflower-bouquet-2.jpg", "/images/products/sunflower-bouquet-3.jpg", "/images/products/sunflower-bouquet-4.jpg"],
    name: "Sunflower Bouquet",
    price: 165000,
    rating: 4.7,
    reviews: 61,
    sold: 122,
    art: "sunflower",
    category: "Sunflowers",
    description:
      "A radiant hand-tied arrangement of sunflowers, wrapped in natural linen for a warm, joyful statement.",
    meaning: "Adoration, loyalty, and warmth.",
    origin: "Locally grown, harvested within 24 hours of delivery.",
    colors: ["#e6c76a"],
    stock: "In Stock",
  },
  {
    slug: "luxury-red-rose",
    image: "/images/products/luxury-red-rose.jpg",
    gallery: ["/images/products/luxury-red-rose-1.jpg", "/images/products/luxury-red-rose-2.jpg", "/images/products/luxury-red-rose-3.jpg", "/images/products/luxury-red-rose-4.jpg"],
    name: "Luxury Red Rose",
    price: 275000,
    rating: 4.9,
    reviews: 215,
    sold: 512,
    art: "rose",
    category: "Luxury Roses",
    badge: "Best Seller",
    description:
      "Two dozen velvet red roses finished in black wrap and a hand-tied blush ribbon bow — our most requested statement piece.",
    meaning: "Passion and enduring love.",
    origin: "Premium velvet-petal roses, grown at altitude for deeper colour.",
    colors: ["#c23b4a"],
    stock: "Low Stock",
  },
  {
    slug: "pink-romantic",
    image: "/images/products/pink-romantic.jpg",
    gallery: ["/images/products/pink-romantic-1.jpg", "/images/products/pink-romantic-2.jpg", "/images/products/pink-romantic-3.jpg", "/images/products/pink-romantic-4.jpg"],
    name: "Pink Romantic",
    price: 245000,
    rating: 4.9,
    reviews: 187,
    sold: 301,
    art: "rose",
    category: "Luxury Roses",
    description:
      "A soft blush composition of garden roses and baby's breath, wrapped in champagne tissue with a satin ribbon.",
    meaning: "Gentleness, admiration, and grace.",
    origin: "Garden roses sourced from boutique growers.",
    colors: ["#eec9d8", "#f4e7d3"],
    stock: "In Stock",
  },
  {
    slug: "tulip-embrace",
    image: "/images/products/tulip-embrace.jpg",
    gallery: ["/images/products/tulip-embrace-1.jpg", "/images/products/tulip-embrace-2.jpg", "/images/products/tulip-embrace-3.jpg", "/images/products/tulip-embrace-4.jpg"],
    name: "Tulip Embrace",
    price: 210000,
    rating: 4.6,
    reviews: 44,
    sold: 88,
    art: "tulip",
    category: "Tulips",
    description:
      "Twenty imported tulips in a spiral hand-tie, wrapped in charcoal paper with a soft blush cord.",
    meaning: "Perfect love and new beginnings.",
    origin: "Dutch-imported tulip bulbs, cut fresh weekly.",
    colors: ["#e6c76a", "#c23b4a", "#f4e7d3"],
    stock: "Made to Order",
  },
  {
    slug: "money-bouquet-classic",
    image: "/images/products/money-bouquet-classic.jpg",
    gallery: ["/images/products/money-bouquet-classic-1.jpg", "/images/products/money-bouquet-classic-2.jpg", "/images/products/money-bouquet-classic-3.jpg", "/images/products/money-bouquet-classic-4.jpg"],
    name: "Money Bouquet Classic",
    price: 450000,
    rating: 4.8,
    reviews: 76,
    sold: 140,
    art: "money",
    category: "Money Bouquet",
    description:
      "A striking arrangement folding genuine currency notes among fresh blooms — a favourite graduation and celebration gift.",
    meaning: "Prosperity, celebration, and generosity.",
    origin: "Custom-assembled in-house by our design team.",
    colors: ["#e6c76a"],
    stock: "Made to Order",
  },
  {
    slug: "snack-bouquet-deluxe",
    image: "/images/products/snack-bouquet-deluxe.jpg",
    gallery: ["/images/products/snack-bouquet-deluxe-1.jpg", "/images/products/snack-bouquet-deluxe-2.jpg", "/images/products/snack-bouquet-deluxe-3.jpg", "/images/products/snack-bouquet-deluxe-4.jpg"],
    name: "Snack Bouquet Deluxe",
    price: 195000,
    rating: 4.5,
    reviews: 39,
    sold: 65,
    art: "snack",
    category: "Snack Bouquet",
    description:
      "A playful bouquet pairing fresh blooms with gourmet snacks and chocolates, wrapped for a lighthearted celebration.",
    meaning: "Joy, playfulness, and thoughtfulness.",
    origin: "Assembled fresh to order with premium confections.",
    colors: ["#e6c76a", "#c23b4a"],
    stock: "In Stock",
  },
  {
    slug: "lily-serenade",
    image: "/images/products/lily-serenade.jpg",
    gallery: ["/images/products/lily-serenade-1.jpg", "/images/products/lily-serenade-2.jpg", "/images/products/lily-serenade-3.jpg", "/images/products/lily-serenade-4.jpg"],
    name: "Lily Serenade",
    price: 230000,
    rating: 4.7,
    reviews: 52,
    sold: 97,
    art: "lily",
    category: "Lilies",
    description:
      "Fragrant white lilies arranged with eucalyptus, wrapped in cream linen for an understated, elegant statement.",
    meaning: "Purity, renewal, and devotion.",
    origin: "Greenhouse-grown lilies, opened for peak fragrance.",
    colors: ["#f4e7d3"],
    stock: "In Stock",
  },
  {
    slug: "graduation-blush",
    image: "/images/products/graduation-blush.jpg",
    gallery: ["/images/products/graduation-blush-1.jpg", "/images/products/graduation-blush-2.jpg", "/images/products/graduation-blush-3.jpg", "/images/products/graduation-blush-4.jpg"],
    name: "Graduation Blush",
    price: 260000,
    rating: 4.8,
    reviews: 64,
    sold: 150,
    art: "mixed",
    category: "Graduation",
    description:
      "A celebratory mixed arrangement in blush and cream tones, finished with a personalised congratulatory ribbon.",
    meaning: "Achievement and new horizons.",
    origin: "Seasonal mixed blooms, curated for celebration.",
    colors: ["#e6c76a", "#f4e7d3"],
    stock: "In Stock",
  },
  {
    slug: "anniversary-affair",
    image: "/images/products/anniversary-affair.jpg",
    gallery: ["/images/products/anniversary-affair-1.jpg", "/images/products/anniversary-affair-2.jpg", "/images/products/anniversary-affair-3.jpg", "/images/products/anniversary-affair-4.jpg"],
    name: "Anniversary Affair",
    price: 340000,
    rating: 4.9,
    reviews: 110,
    sold: 201,
    art: "tulip",
    category: "Anniversary",
    badge: "Best Seller",
    description:
      "A refined tulip and rose composition designed to mark milestones, wrapped in black with a champagne bow.",
    meaning: "Devotion sustained through time.",
    origin: "Mixed premium stems, hand-selected for the occasion.",
    colors: ["#c23b4a", "#e6c76a"],
    stock: "In Stock",
  },
  {
    slug: "wedding-white-veil",
    image: "/images/products/wedding-white-veil.jpg",
    gallery: ["/images/products/wedding-white-veil-1.jpg", "/images/products/wedding-white-veil-2.jpg", "/images/products/wedding-white-veil-3.jpg", "/images/products/wedding-white-veil-4.jpg"],
    name: "Wedding White Veil",
    price: 520000,
    rating: 5.0,
    reviews: 41,
    sold: 58,
    art: "peony",
    category: "Wedding",
    description:
      "An heirloom-style bridal composition of white peonies and baby's breath, finished with silk ribbon trailing.",
    meaning: "Union, purity, and new beginnings.",
    origin: "Bridal-grade blooms reserved two weeks in advance.",
    colors: ["#f4e7d3", "#ffffff"],
    stock: "Made to Order",
  },
];

export const bestSellers = products.filter((p) => p.badge === "Best Seller");

export const testimonials = [
  {
    name: "Aline Wardhani",
    text: "Every bouquet from Bloomé feels like a piece of art. The black wrapping and blush ribbon make it impossible to mistake for anything ordinary.",
    rating: 5,
  },
  {
    name: "Raka Pramudya",
    text: "Ordered the Money Bouquet for my sister's graduation — the presentation alone made the room go quiet for a second.",
    rating: 5,
  },
  {
    name: "Naya Kirana",
    text: "Delivery was exactly on time and the peonies were still dewy fresh. This is how flowers should be sent.",
    rating: 5,
  },
];
