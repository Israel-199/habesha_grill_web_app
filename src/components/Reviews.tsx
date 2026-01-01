import { Star, Quote } from "lucide-react";
import food1 from "@/assets/food1.webp";
import food2 from "@/assets/food2.webp";
import food3 from "@/assets/food3.webp";
import food4 from "@/assets/food4.webp";
import food5 from "@/assets/food5.webp";
import food6 from "@/assets/food6.webp";

const reviews = [
  {
    id: 1,
    name: "Shannon Lavender",
    role: "Local Guide · 88 reviews · 15 photos",
    type: "Takeaway | Lunch | $10–20 | 2 years ago",
    content: "I have eaten Ethiopian at two other places in town and Habesha Grill is so, so good. I saw that this place had really good reviews so I stopped in. Unfortunately, the veggie combo with injera was bland and tasted boxed. I wanted it to be good, but it was not. Would not recommend if you've eaten Habesha.",
    image: food3,
    rating: 3,
  },
  {
    id: 2,
    name: "Kira Richards",
    role: "Local Guide · 32 reviews · 10 photos",
    type: "Takeaway | Dinner | $10–20 | 3 years ago",
    content: "Best Ethiopian food I have had in Austin! Portions are generous and the service was great! Will definitely be back!",
    image: food2,
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Shawe",
    role: "Local Guide · 50 reviews | 1 year ago",
    type: "Food: 5/5 | Service: 5/5",
    content: "This place has truly authentic food. The location is legit for the price. So out of the way, but worth it.",
    image: food1,
    rating: 5,
  },
  {
    id: 4,
    name: "Claire",
    role: "Local Guide · 67 reviews · 7 photos | 2 years ago",
    type: "Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
    content: "So tasty! Can't get enough of this place! I get the vegetable variety plate.",
    image: food4,
    rating: 5,
    recommended: "Tibsi Beef",
  },
  {
    id: 5,
    name: "Katherine Bell",
    role: "9 reviews · 2 photos | 3 years ago",
    type: "",
    content: "We've tried about half the menu and loved it all. The injera alone is fabulous.",
    image: food5,
    rating: 5,
  },
  {
    id: 6,
    name: "Miho Minagawa",
    role: "Local Guide · 16 reviews · 1683 photos | 3 years ago",
    type: "",
    content: "Excellent service and food!!!",
    image: food6,
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title mt-2">Customer Reviews</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-4 line-clamp-4">"{review.content}"</p>

              {/* Recommended Dish */}
              {review.recommended && (
                <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Recommended: {review.recommended}
                </div>
              )}

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground truncate">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {review.role}
                  </div>
                  {review.type && (
                    <div className="text-xs text-muted-foreground truncate mt-1">
                      {review.type}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
