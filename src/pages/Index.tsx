import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularFoods from "@/components/PopularFoods";
import Categories from "@/components/Categories";
import FeaturedTrailer from "@/components/FeaturedTrailer";
import Reviews from "@/components/Reviews";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const Index = () => {
  const [menuCategory, setMenuCategory] = useState("meat");

  const handleMenuCategoryClick = (category: string) => {
    setMenuCategory(category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PopularFoods />
        <Categories onCategoryClick={handleMenuCategoryClick} />
        <FeaturedTrailer />
        <Reviews />
        <Menu activeCategory={menuCategory} onCategoryChange={setMenuCategory} />
      </main>
      <Footer onMenuCategoryClick={handleMenuCategoryClick} />
    </div>
  );
};

export default Index;
