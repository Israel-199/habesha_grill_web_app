import tibsiBeef from "@/assets/tibsi-beef.jpg";
import injera from "@/assets/injera.jpg";
import { Star } from "lucide-react";

const popularFoods = [
  {
    id: 1,
    name: "Tibsi Beef",
    description: "Juicy sautéed beef cubes cooked with onions, jalapeño peppers, rosemary, garlic, and traditional Ethiopian spices.",
    price: "$15.99",
    rating: 4.9,
    image: tibsiBeef,
  },
  {
    id: 2,
    name: "Injera",
    description: "Traditional spongy fermented flatbread, the foundation of Ethiopian cuisine, served with berbere sauce.",
    price: "$3.00",
    rating: 4.8,
    image: injera,
  },
];

const PopularFoods = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">CUSTOMER FAVORITES</span>
          <h2 className="section-title mt-2">Popular Foods</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Popular Foods Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {popularFoods.map((food, index) => (
            <div
              key={food.id}
              className="card-food group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-card px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold">{food.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {food.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">{food.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {food.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFoods;
