import Sidebar from "./Sidebar";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    // Adds the thin line at the very top of the hero section
    <section className="w-full border-t border-gray-200">
      {/* Flex container:
        - Mobile: Column (Sidebar hidden, Carousel takes full width)
        - Laptop (lg): Row (Sidebar on left, Carousel on right)
      */}
      <div className="container-custom flex flex-col lg:flex-row pb-10">
        <Sidebar />
        <Carousel />
      </div>
    </section>
  );
};

export default HeroSection;