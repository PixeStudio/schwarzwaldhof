import hero1 from "../assets/rooms/rooms_1.jpg";
import hero2 from "../assets/rooms/rooms_2.jpg";
import hero3 from "../assets/rooms/rooms_3.webp";

export const roomsData = [
  {
    id: "classic-double",
    name: "Classic Double Room",
    description: "A cozy room with forest views, perfect for couples.",
    size: "22 m²",
    guests: 2,
    priceFrom: 120,
    image: hero1
  },
  {
    id: "comfort-suite",
    name: "Comfort Suite",
    description: "Spacious suite with seating area and natural light.",
    size: "35 m²",
    guests: 3,
    priceFrom: 165,
    image: hero2
  },
  {
    id: "family-room",
    name: "Family Room",
    description: "Ideal for families, with extra space and comfort.",
    size: "40 m²",
    guests: 4,
    priceFrom: 195,
    image: hero3
  },
];
