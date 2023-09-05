import React from "react";
import { Helmet } from "react-helmet";
import BestWork from "./BestWork";
import ClientReviews from "../ClientReviews";
import ContactUs from "../ContactUs";
import FAQ from "../FAQ";
import HomeHero from "./HomeHero";
import OurService from "./OurService";
import Technologies from "./Technologies";
import WhyUs from "./WhyUs";
import OurProcess from "./OurProcess";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Best Mobile Game Development Company for your Gaming Requirements</title>
      </Helmet>
      <HomeHero />
      <OurService />
      <OurProcess />
      <BestWork />
      <Technologies />
      <WhyUs />
      <ClientReviews />
      <FAQ />
      <ContactUs full={true} />
    </>
  );
};

export default HomePage;
