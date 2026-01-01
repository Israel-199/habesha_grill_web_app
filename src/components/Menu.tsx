import { useState } from "react";
import { Coffee, Beef, Salad, Sunrise, UtensilsCrossed, GlassWater } from "lucide-react";

export const menuCategories = [
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    icon: Coffee,
    items: [
      { name: "Traditional Ethio-Eritrean Tea", price: "$2.00" },
      { name: "Traditional Ethio-Eritrean Coffee", price: "$3.00" },
    ],
  },
  {
    id: "meat",
    name: "Meat Dishes",
    icon: Beef,
    items: [
      { name: "Shekla", price: "$15.99" },
      { name: "Tibs Lamb", price: "$18.00" },
      { name: "Awaze Tibs", price: "$15.99" },
      { name: "Dorho Tsebhi", price: "$15.99" },
      { name: "KTFO", price: "$16.99" },
      { name: "Alcha Beef", price: "$15.00" },
      { name: "Goat Kilkil", price: "$18.00" },
      { name: "Tibs Fitfit", price: "$15.99" },
      { name: "Keyh Tsebhi", price: "$15.99" },
    ],
  },
  {
    id: "vegetable",
    name: "Vegetable Dishes",
    icon: Salad,
    items: [
      { name: "Ater", price: "$13.99" },
      { name: "Rice", price: "$10.00" },
      { name: "Vegetable Fitfit", price: "$14.99" },
      { name: "Shiro", price: "$14.99" },
      { name: "Birsin (Lentils)", price: "$13.99" },
      { name: "Nay Tsom Bebe Aynetu", price: "$17.99" },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    icon: Sunrise,
    items: [
      { name: "Sombusa (2 pieces)", price: "$4.99" },
      { name: "Pasta (Macaroni or Spaghetti)", price: "$7.50" },
      { name: "Ge-At Porridge", price: "$11.50" },
      { name: "Kitcha Fitfit", price: "$13.50" },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    icon: UtensilsCrossed,
    items: [
      { name: "Side of Gluten-Free Injera", price: "$2.00" },
      { name: "Gluten-Free Injera", price: "$3.00" },
    ],
  },
  {
    id: "cold-drinks",
    name: "Cold Drinks",
    icon: GlassWater,
    items: [
      { name: "Water", price: "$0.99" },
      { name: "Soda", price: "$1.49" },
      { name: "Coca-Cola", price: "$2.00" },
    ],
  },
];

interface MenuProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const Menu = ({ activeCategory: externalCategory, onCategoryChange }: MenuProps) => {
  const [internalCategory, setInternalCategory] = useState("meat");
  
  const activeCategory = externalCategory ?? internalCategory;
  
  const handleCategoryChange = (category: string) => {
    setInternalCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <section className="py-16 lg:py-24 bg-background" id="menu">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">DISCOVER</span>
          <h2 className="section-title mt-2">Our Menu</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-golden"
                    : "bg-card text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className={`${activeCategory === category.id ? "block" : "hidden"}`}
            >
              <div className="grid gap-4">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-card rounded-xl hover:shadow-md transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium text-foreground">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:block border-b border-dashed border-border flex-1 min-w-[50px]" />
                      <span className="font-bold text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
