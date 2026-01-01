import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/tibsi-beef.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tibsi Beef on Injera"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg via-hero-bg/90 to-hero-bg/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[700px] py-12">
          {/* Left Content */}
          <div className="max-w-xl animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
              AUTHENTIC ETHIOPIAN & ERITREAN CUISINE
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 leading-tight">
              Order Authentic{" "}
              <span className="text-gradient-golden">Ethiopian & Eritrean</span>{" "}
              Food Any Time
            </h1>
            
            <p className="text-lg text-card/80 mb-8 leading-relaxed">
              We serve fresh meat and vegetarian dishes inspired by traditional 
              Ethiopian and Eritrean cuisine, prepared daily and served with care.
            </p>

            {/* Search Bar */}
            <div className="bg-card rounded-xl p-2 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search Tibsi Beef, Injera, Pasta, Sombusa"
                    className="pl-10 h-12 border-0 bg-secondary/50 focus-visible:ring-primary"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <select className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary/50 border-0 text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-primary">
                    <option>Austin, TX</option>
                    <option>Dallas, TX</option>
                    <option>Houston, TX</option>
                  </select>
                </div>
                <Button className="btn-golden h-12 px-8">
                  Search
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-card/70">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-card/70">Menu Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-card/70">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Food Display */}
          <div className="hidden lg:block relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Tibsi Beef - Juicy sautéed beef cubes with onions, jalapeño, and Ethiopian spices on fresh injera"
                className="relative rounded-3xl shadow-2xl w-full object-cover animate-scale-in"
              />
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg animate-fade-in delay-300">
                <div className="font-display font-bold text-foreground">Tibsi Beef</div>
                <p className="text-sm text-muted-foreground mt-1 max-w-[200px]">
                  Juicy sautéed beef cubes with traditional spices on fresh injera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
