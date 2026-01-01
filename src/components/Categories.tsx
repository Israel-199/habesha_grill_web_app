import tibsiBeef from "@/assets/tibsi-beef.jpg";
import injera from "@/assets/injera.jpg";
import food1 from "@/assets/food1.webp";
import vegetarian from "@/assets/vegetarian.jpg";
import meatDishes from "@/assets/meat-dishes.jpg";
import food6 from "@/assets/food6.webp";
import coffee from "@/assets/coffee.jpg";
import coldDrinks from "@/assets/cold-drinks.jpg";

const categories = [
  { id: 1, name: "Tibsi Beef", count: "5 Items", image: tibsiBeef, menuCategory: "meat" },
  { id: 2, name: "Injera", count: "3 Items", image: injera, menuCategory: "sides" },
  { id: 3, name: "Pasta", count: "8 Items", image: food1, menuCategory: "breakfast" },
  { id: 4, name: "Vegetarian Dishes", count: "10 Items", image: vegetarian, menuCategory: "vegetable" },
  { id: 5, name: "Meat Dishes", count: "12 Items", image: meatDishes, menuCategory: "meat" },
  { id: 6, name: "Sombusa", count: "2 Items", image: food6, menuCategory: "breakfast" },
  { id: 7, name: "Hot Drinks", count: "4 Items", image: coffee, menuCategory: "hot-drinks" },
  { id: 8, name: "Cold Drinks", count: "5 Items", image: coldDrinks, menuCategory: "cold-drinks" },
];

interface CategoriesProps {
  onCategoryClick?: (category: string) => void;
}

const Categories = ({ onCategoryClick }: CategoriesProps) => {
  const handleCategoryClick = (menuCategory: string) => {
    onCategoryClick?.(menuCategory);
    setTimeout(() => {
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">TOP FOODS</span>
          <h2 className="section-title mt-2">Our Categories</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.menuCategory)}
              className="group cursor-pointer text-center animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative mb-4 mx-auto w-32 h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full border-4 border-card shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{category.count}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
