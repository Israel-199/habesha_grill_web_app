import { MapPin, Phone, DollarSign, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tibsi.jpg";
import review3 from "@/assets/review3.webp";
import { Link } from "react-router-dom";

const FeaturedTrailer = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">TOP RESTAURANT</span>
          <h2 className="section-title mt-2">Most Featured Food Trailer</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg animate-fade-in">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={review3}
                  alt="Ethiopian and Eritrean Food Trailer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold text-primary">4.8</span>
                  </div>
                  <span className="text-sm text-muted-foreground">(120+ Reviews)</span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Ethiopian and Eritrean Food Trailer
                </h3>

                <p className="text-muted-foreground mb-6">
                  We serve Meat and vegetarian dishes inspired by traditional Ethiopian 
                  and Eritrean cuisine. Experience authentic flavors prepared with love.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Address</div>
                      <div className="text-sm text-muted-foreground">
                        5011 E Cesar Chavez St, Austin, TX 78702, United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+1 737-202-8238</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Price per Person</div>
                      <div className="text-sm text-muted-foreground">$10 – $20</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Hours</div>
                      <div className="text-sm text-muted-foreground">Mon-Sat: 11am - 8pm</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={"/order"}>
                  <Button className="btn-golden flex-1">
                    Order Now
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrailer;
