import React from "react";
import Banner from "../components/Home/Banner";
import ContactUs from "../components/Home/ContactUs";
import About1 from "../components/Home/About";
import Stats from "../components/Home/Stats";
// import BeforeAndAfter from "../components/Home/BeforeAndAfter";
import Testimonials from "../components/Home/Testimonials";
import Map from "../components/Home/Map";
import AcneServices from "../components/Home/AcneServices";
import PigmentationServices from "../components/Home/PigmentationServices";
import AdvanceFacial from "../components/Home/AdvanceFacial";
import AntiAgeing from "../components/Home/AntiAgeing";
import SkinWhitening from "../components/Home/SkinWhitening";
import LaserRemoval from "../components/Home/LaserRemoval";
import AdvanceLaser from "../components/Home/AdvanceLaser";
import BeforeAndAfter from "../components/Home/BeforeAndAfter";

function Home() {
  return (
    <div>
      <Banner />
      <ContactUs />
      <About1 />
      <Stats />
      {/* Services start */}
      <AcneServices />
      <PigmentationServices />
      <AdvanceFacial />
      <AntiAgeing />
      <SkinWhitening />
      <LaserRemoval />
      <AdvanceLaser />
      {/* services end */}
      <BeforeAndAfter />
      <Testimonials />
      <Map />
      {/* <Services />
      <AdvanceServices />
      <BeforeAndAfter />
      <MoreImages />
       */}
    </div>
  );
}

export default Home;
