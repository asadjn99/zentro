import HeroSection from "@/src/components/Hero/HeroSection";
import FlashSales from "@/src/components/FlashSales/FlashSales";
import CategorySection from "@/src/components/Category/CategorySection"; // Import it
import BestSellingSection from "@/src/components/BestSelling/BestSellingSection";
import MusicExperienceBanner from "@/src/components/Banner/MusicExperienceBanner";
import ExploreProducts from "@/src/components/ExploreProducts/ExploreProducts";
import NewArrival from "@/src/components/NewArrival/NewArrival";
import ServiceFeatures from "@/src/components/Footer/ServiceFeatures";


export default function Home() {
  return (
    <main>

      <HeroSection />
      <FlashSales />
      <CategorySection /> 
      <BestSellingSection />
      <MusicExperienceBanner />
      <ExploreProducts />
      <NewArrival />
      <ServiceFeatures />
      

    </main>
  );
}