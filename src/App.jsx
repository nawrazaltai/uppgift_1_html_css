import Features from "./components/Features/Features";
import HeroSection from "./components/Hero/HeroSection";
import Brands from "./components/Brands/Brands";
import HowDoesItWork from "./components/HowItWorks/HowDoesItWork";
import BankBenefits from "./components/Benefits/BankBenefits";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <main>
      <HeroSection />
      <Brands />
      <Features />
      <HowDoesItWork />
      <BankBenefits />
      <Testimonials />
    </main>
  );
};

export default App;
