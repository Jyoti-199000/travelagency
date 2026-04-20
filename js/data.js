// ============================================================
// TravelVista - Data Layer
// All dummy data for destinations, packages, testimonials, team
// ============================================================

const DESTINATIONS = [
  {
    id: 1,
    name: "Bali, Indonesia",
    slug: "bali",
    category: "beach",
    region: "asia",
    description: "Tropical paradise with stunning temples, lush rice terraces, and world-class surfing beaches.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 2340,
    startingPrice: 45999
  },
  {
    id: 2,
    name: "Paris, France",
    slug: "paris",
    category: "city",
    region: "europe",
    description: "The City of Light enchants with iconic landmarks, world-class cuisine, and timeless romance.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 5120,
    startingPrice: 89999
  },
  {
    id: 3,
    name: "Maldives",
    slug: "maldives",
    category: "beach",
    region: "asia",
    description: "Crystal-clear waters, overwater bungalows, and pristine white-sand beaches await you.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 3890,
    startingPrice: 125000
  },
  {
    id: 4,
    name: "Swiss Alps",
    slug: "swiss-alps",
    category: "mountain",
    region: "europe",
    description: "Majestic snow-capped peaks, charming villages, and thrilling adventure sports.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 1980,
    startingPrice: 112000
  },
  {
    id: 5,
    name: "Santorini, Greece",
    slug: "santorini",
    category: "beach",
    region: "europe",
    description: "Iconic blue-domed churches, dramatic caldera views, and legendary sunsets.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 4210,
    startingPrice: 95000
  },
  {
    id: 6,
    name: "Tokyo, Japan",
    slug: "tokyo",
    category: "city",
    region: "asia",
    description: "Where ancient traditions blend seamlessly with futuristic innovation and vibrant nightlife.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 3670,
    startingPrice: 78000
  },
  {
    id: 7,
    name: "Dubai, UAE",
    slug: "dubai",
    category: "city",
    region: "asia",
    description: "Ultra-modern architecture, luxury shopping, and desert adventures in the golden city.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    rating: 4.6,
    reviews: 4580,
    startingPrice: 65000
  },
  {
    id: 8,
    name: "Manali, India",
    slug: "manali",
    category: "mountain",
    region: "asia",
    description: "Snow-covered Himalayan peaks, adventure trails, and serene valley views.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop",
    rating: 4.5,
    reviews: 6230,
    startingPrice: 15999
  },
  {
    id: 9,
    name: "New York, USA",
    slug: "new-york",
    category: "city",
    region: "americas",
    description: "The city that never sleeps — Broadway, Central Park, Times Square, and endless energy.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 7890,
    startingPrice: 99000
  },
  {
    id: 10,
    name: "Goa, India",
    slug: "goa",
    category: "beach",
    region: "asia",
    description: "Sun-kissed beaches, vibrant nightlife, Portuguese heritage, and tropical vibes.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop",
    rating: 4.4,
    reviews: 8900,
    startingPrice: 12999
  },
  {
    id: 11,
    name: "London, UK",
    slug: "london",
    category: "city",
    region: "europe",
    description: "Royal palaces, world-class museums, iconic landmarks, and rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    rating: 4.6,
    reviews: 5430,
    startingPrice: 85000
  },
  {
    id: 12,
    name: "Leh Ladakh, India",
    slug: "leh-ladakh",
    category: "mountain",
    region: "asia",
    description: "Breathtaking high-altitude desert landscapes, ancient monasteries, and thrilling roads.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 3210,
    startingPrice: 22999
  }
];

const PACKAGES = [
  {
    id: 1,
    title: "Bali Bliss Getaway",
    destination: "Bali, Indonesia",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    price: 45999,
    originalPrice: 59999,
    rating: 4.8,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&h=400&fit=crop",
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Seminyak Beach", "Spa & Wellness"],
    inclusions: ["Return Flights", "4-Star Hotel", "Daily Breakfast", "Airport Transfer", "Guided Tours"],
    category: "beach"
  },
  {
    id: 2,
    title: "Romantic Paris Escape",
    destination: "Paris, France",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    price: 89999,
    originalPrice: 119999,
    rating: 4.9,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Montmartre Walk"],
    inclusions: ["Return Flights", "5-Star Hotel", "Breakfast & Dinner", "City Tour", "Museum Pass"],
    category: "city"
  },
  {
    id: 3,
    title: "Maldives Luxury Retreat",
    destination: "Maldives",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    price: 125000,
    originalPrice: 165000,
    rating: 4.9,
    reviews: 670,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop",
    highlights: ["Overwater Villa", "Snorkeling", "Sunset Cruise", "Underwater Dining"],
    inclusions: ["Return Flights", "5-Star Resort", "All Meals", "Speedboat Transfer", "Water Sports"],
    category: "beach"
  },
  {
    id: 4,
    title: "Swiss Alps Adventure",
    destination: "Swiss Alps",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    price: 112000,
    originalPrice: 145000,
    rating: 4.7,
    reviews: 430,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=400&fit=crop",
    highlights: ["Jungfrau Peak", "Interlaken", "Lucerne Lake", "Glacier Express"],
    inclusions: ["Return Flights", "4-Star Chalet", "Breakfast", "Swiss Rail Pass", "Guided Hikes"],
    category: "mountain"
  },
  {
    id: 5,
    title: "Enchanting Santorini",
    destination: "Santorini, Greece",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    price: 95000,
    originalPrice: 125000,
    rating: 4.8,
    reviews: 920,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop",
    highlights: ["Oia Sunset", "Caldera Cruise", "Wine Tasting", "Black Sand Beach"],
    inclusions: ["Return Flights", "Boutique Hotel", "Breakfast", "Island Tour", "Ferry Transfers"],
    category: "beach"
  },
  {
    id: 6,
    title: "Tokyo Explorer",
    destination: "Tokyo, Japan",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    price: 78000,
    originalPrice: 98000,
    rating: 4.7,
    reviews: 780,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=400&fit=crop",
    highlights: ["Shibuya Crossing", "Mt. Fuji Day Trip", "Akihabara", "Traditional Tea Ceremony"],
    inclusions: ["Return Flights", "3-Star Hotel", "JR Rail Pass", "Guided City Tour", "Airport Transfer"],
    category: "city"
  },
  {
    id: 7,
    title: "Dubai Dazzle",
    destination: "Dubai, UAE",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    price: 65000,
    originalPrice: 82000,
    rating: 4.6,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"],
    inclusions: ["Return Flights", "4-Star Hotel", "Breakfast", "Desert Safari", "City Tour"],
    category: "city"
  },
  {
    id: 8,
    title: "Magical Manali",
    destination: "Manali, India",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    price: 15999,
    originalPrice: 22999,
    rating: 4.5,
    reviews: 2340,
    image: "https://images.unsplash.com/photo-1585136917246-22502f4f1dfb?w=600&h=400&fit=crop",
    highlights: ["Rohtang Pass", "Solang Valley", "Old Manali", "Hadimba Temple"],
    inclusions: ["AC Volvo Bus", "3-Star Hotel", "All Meals", "Sightseeing", "Bonfire Night"],
    category: "mountain"
  },
  {
    id: 9,
    title: "New York City Break",
    destination: "New York, USA",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    price: 99000,
    originalPrice: 135000,
    rating: 4.7,
    reviews: 1120,
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&h=400&fit=crop",
    highlights: ["Statue of Liberty", "Times Square", "Central Park", "Broadway Show"],
    inclusions: ["Return Flights", "4-Star Hotel", "Breakfast", "City Pass", "Airport Transfer"],
    category: "city"
  },
  {
    id: 10,
    title: "Goa Beach Carnival",
    destination: "Goa, India",
    duration: "3 Nights / 4 Days",
    durationDays: 4,
    price: 12999,
    originalPrice: 18999,
    rating: 4.4,
    reviews: 3450,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    highlights: ["Baga Beach", "Dudhsagar Falls", "Old Goa Churches", "Casino Night"],
    inclusions: ["Return Flights", "3-Star Resort", "Breakfast", "North Goa Tour", "Water Sports"],
    category: "beach"
  },
  {
    id: 11,
    title: "London Royal Tour",
    destination: "London, UK",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    price: 85000,
    originalPrice: 110000,
    rating: 4.6,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?w=600&h=400&fit=crop",
    highlights: ["Big Ben", "Buckingham Palace", "Tower of London", "London Eye"],
    inclusions: ["Return Flights", "4-Star Hotel", "Breakfast", "London Pass", "Thames Cruise"],
    category: "city"
  },
  {
    id: 12,
    title: "Ladakh Expedition",
    destination: "Leh Ladakh, India",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    price: 22999,
    originalPrice: 32999,
    rating: 4.8,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?w=600&h=400&fit=crop",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Magnetic Hill"],
    inclusions: ["Return Flights", "Guesthouse Stay", "All Meals", "Bike/SUV Tour", "Permits"],
    category: "mountain"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Our Bali trip was absolutely magical! TravelVista planned everything perfectly — from the temple visits to the sunset dinners. Couldn't have asked for a better honeymoon experience.",
    trip: "Bali Bliss Getaway"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Swiss Alps package exceeded all expectations. The Glacier Express ride alone was worth the entire trip. TravelVista's attention to detail is remarkable.",
    trip: "Swiss Alps Adventure"
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Bangalore, India",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    text: "Paris was a dream come true. The Seine River cruise at sunset was unforgettable. Great value for money and the hotel was perfectly located near the Champs-Élysées.",
    trip: "Romantic Paris Escape"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Ladakh was life-changing! The team arranged everything from permits to oxygen cylinders. The Pangong Lake sunrise is something I'll never forget. Highly recommended!",
    trip: "Ladakh Expedition"
  },
  {
    id: 5,
    name: "Sneha Reddy",
    location: "Hyderabad, India",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Maldives retreat was pure luxury. Waking up in an overwater villa and swimming with manta rays — TravelVista made it all happen seamlessly.",
    trip: "Maldives Luxury Retreat"
  },
  {
    id: 6,
    name: "Arjun Nair",
    location: "Chennai, India",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    text: "Goa trip with friends was a blast! Great resort, awesome water sports, and the casino night was cherry on top. Will definitely book with TravelVista again.",
    trip: "Goa Beach Carnival"
  }
];

const TEAM = [
  {
    id: 1,
    name: "Aditya Kapoor",
    role: "Founder & CEO",
    bio: "15+ years in the travel industry. Passionate about making world travel accessible to everyone.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Meera Joshi",
    role: "Head of Operations",
    bio: "Expert in crafting seamless travel experiences. Visited 40+ countries across 6 continents.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Ravi Krishnan",
    role: "Chief Technology Officer",
    bio: "Tech visionary building the future of travel booking with AI and data-driven personalization.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Kavitha Rao",
    role: "Customer Experience Lead",
    bio: "Dedicated to ensuring every traveler has a 5-star experience from booking to return.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
  }
];

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop",
    title: "Discover Your Dream Destination",
    subtitle: "Explore 500+ handpicked destinations worldwide"
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop",
    title: "Beach Getaways Await",
    subtitle: "Crystal clear waters and white sandy beaches"
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop",
    title: "Conquer Majestic Mountains",
    subtitle: "Adventure, thrills, and breathtaking views"
  }
];

const STATS = {
  happyCustomers: "50,000+",
  destinations: "500+",
  packages: "1,200+",
  yearsExperience: "12+"
};

// Utility function to format currency
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

// Utility function to generate star rating HTML
function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  if (hasHalf) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}
