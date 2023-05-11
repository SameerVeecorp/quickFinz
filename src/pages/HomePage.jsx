import React from "react";
import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";
import About from "../components/About";
import CreditCardSection from "../components/CreditCardSection";
import DownloadApp from "../components/DownloadApp";
import EcoSystem from "../components/EcoSystem";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Insurance from "../components/Insurance";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <About />
      <Process />
      <CreditCardSection />
      <EcoSystem />
      <DownloadApp />
      <Insurance />
      <Testimonials />
    </>
  );
};

export default HomePage;
