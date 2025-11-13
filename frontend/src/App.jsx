import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import HeaderSection from "./Components/HeaderSection";
import ScrollingBanner from "./Components/ScrollingBanner";
import WhyFrench from "./Components/WhyFrench";
import WhyChoose from "./Components/WhyChoose";
import FeatureBoxes from "./Components/FeatureBoxes";
import LearningFeatures from "./Components/LearningFeatures";
import Footer from "./Components/Footer";
import ContactSection from "./Components/ContactSection";
import Testimonials from "./Components/Testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <HeaderSection />
      <ScrollingBanner />

     
      <section id="why-french">
        <WhyFrench />
      </section>

      <section id="why-bravo">
        <WhyChoose />
      </section>
       
      <FeatureBoxes />

      <section id="our-programs">
        <LearningFeatures />
      </section>

      <Testimonials />

      <section id="enquiry">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}

export default App;
