import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, Award, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-tibsi.jpg";
import review3 from "@/assets/review3.webp";
import vegetarian from "@/assets/vegetarian.jpg";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with passion and care, using traditional recipes passed down through generations.",
  },
  {
    icon: Utensils,
    title: "Authentic Recipes",
    description: "We stay true to our Ethiopian and Eritrean roots, using traditional spices and cooking methods.",
  },
  {
    icon: Users,
    title: "Family Tradition",
    description: "Our family has been sharing these beloved recipes for over 30 years, bringing joy to every table.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We source the freshest ingredients daily to ensure every bite is as delicious as possible.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 hero-gradient overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Ethiopian cuisine"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-hero-bg via-hero-bg/95 to-hero-bg/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
                OUR STORY
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
                About <span className="text-gradient-golden">Habesha Grill</span>
              </h1>
              <p className="text-xl text-card/80 leading-relaxed">
                Bringing the authentic flavors of Ethiopia and Eritrea to Austin, Texas since 2018.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">WHO WE ARE</span>
                <h2 className="section-title mt-2 mb-6">Our Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Habesha Grill was born from a deep love for our homeland's cuisine and a desire 
                    to share it with the Austin community. What started as cooking for friends and 
                    family gatherings has grown into a beloved food trailer that serves hundreds of 
                    happy customers every week.
                  </p>
                  <p>
                    Our founder grew up in a kitchen filled with the aromas of berbere spice, 
                    freshly baked injera, and simmering stews. These childhood memories inspired 
                    the creation of Habesha Grill, where every dish tells a story of tradition, 
                    family, and love.
                  </p>
                  <p>
                    We take pride in preparing everything from scratch using authentic recipes 
                    and the freshest ingredients. Our injera is fermented for three days to achieve 
                    that perfect tangy flavor, and our spice blends are hand-mixed using imported 
                    Ethiopian spices.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                <img
                  src={review3}
                  alt="Traditional Ethiopian meal"
                  className="relative rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="section-label">WHAT DRIVES US</span>
              <h2 className="section-title mt-2">Our Values</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethiopian Cuisine */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                <img
                  src={vegetarian}
                  alt="Vegetarian Ethiopian platter"
                  className="relative rounded-3xl shadow-xl w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="section-label">DISCOVER</span>
                <h2 className="section-title mt-2 mb-6">Ethiopian & Eritrean Cuisine</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ethiopian and Eritrean cuisine is one of the world's most unique and flavorful 
                    culinary traditions. Central to every meal is injera, a spongy, tangy flatbread 
                    made from teff flour that serves as both plate and utensil.
                  </p>
                  <p>
                    Our dishes feature bold spices like berbere (a warm blend of chili, fenugreek, 
                    and cardamom) and mitmita (a fiery spice mix). We offer both meat-based dishes 
                    like our famous Tibsi Beef and a wide variety of vegetarian options, reflecting 
                    the Ethiopian Orthodox fasting traditions.
                  </p>
                  <p>
                    Dining Ethiopian-style is a communal experience. Food is served on a large 
                    platter of injera, and everyone eats together, tearing off pieces of bread 
                    to scoop up the delicious stews and vegetables. It's not just a meal—it's 
                    a celebration of togetherness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
