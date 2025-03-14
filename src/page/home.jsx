import FeaturedOn from "../components/FeaturedOn";
import HeroSection from "../components/Hero";
import MedicationDeliveryWebsite from "../components/MedicationDeliveryWebsite";
import StatesWeServe from "../components/StatesWeServe";
import Testimonials from "../components/Testimonials";
import TreatmentSection from "../components/Treament";
import TreatmentProcess from "../components/TreatmentProcess";


const Home = () => {
  return (
    <section>
    <HeroSection />
    <TreatmentSection/>
    <Testimonials/>
    <TreatmentProcess/>
    <FeaturedOn/>
    <StatesWeServe/>
    <MedicationDeliveryWebsite/>
    </section>
  );
};

export default Home;
