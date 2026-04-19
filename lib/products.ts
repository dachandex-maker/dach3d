export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "premade" | "custom";
  image: string;
  tags: string[];
};

export const products: Product[] = [
  {
    id: "dragon-statue",
    name: "Dragon Statue",
    description: "A highly detailed articulated dragon, perfect for display or gifting. Printed in PETG for durability.",
    price: 34.99,
    category: "premade",
    image: "/images/dragon.jpg",
    tags: ["fantasy", "figurine", "display"],
  },
  {
    id: "geometric-vase",
    name: "Geometric Vase",
    description: "A modern low-poly vase with clean angular facets. Watertight and functional.",
    price: 19.99,
    category: "premade",
    image: "/images/vase.jpg",
    tags: ["home decor", "modern", "functional"],
  },
  {
    id: "skull-planter",
    name: "Skull Planter",
    description: "An artistic skull-shaped planter for succulents and small plants. Drainage hole included.",
    price: 24.99,
    category: "premade",
    image: "/images/skull-planter.jpg",
    tags: ["home decor", "planter", "gothic"],
  },
  {
    id: "cable-organizer",
    name: "Cable Management Clip Set",
    description: "A set of 6 customizable cable clips that mount to any desk or surface. Clean up your setup.",
    price: 9.99,
    category: "premade",
    image: "/images/cable-clips.jpg",
    tags: ["functional", "desk", "organizer"],
  },
  {
    id: "articulated-fish",
    name: "Articulated Flexi Fish",
    description: "A fully articulated flexible fish printed in one piece. Mesmerizing to play with.",
    price: 14.99,
    category: "premade",
    image: "/images/flexi-fish.jpg",
    tags: ["fidget", "gift", "flexible"],
  },
  {
    id: "name-keychain",
    name: "Custom Name Keychain",
    description: "A bold, clean keychain with any name or short text. Choose your color.",
    price: 7.99,
    category: "premade",
    image: "/images/keychain.jpg",
    tags: ["personalized", "gift", "keychain"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
