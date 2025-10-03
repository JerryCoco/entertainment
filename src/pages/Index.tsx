import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategorySection from "@/components/CategorySection";
import TrendingSection from "@/components/TrendingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <CategorySection />
        <TrendingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
