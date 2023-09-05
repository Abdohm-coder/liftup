import React from "react";
import { Helmet } from "react-helmet";
import CareerHero from "./CareerHero";
import CareerFewThings from "./CareerFewThings";
import CareerFindPosition from "./CareerFindPosition";
import CareerWhoWeAre from "./CareerWhoWeAre";
import CareerGlobalCompany from "./CareerGlobalCompany";
import CareerWhyUs from "./CareerWhyUs";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";

const CareerPage = () => {
  return (
    <>
      <Helmet>
        <title>Hiring Dedicated Staff for Unity and Unreal Engine</title>
      </Helmet>
      <CareerHero />
      <CareerFewThings />
      <CareerFindPosition />
      <CareerWhoWeAre />
      <CareerWhyUs />
      <CareerGlobalCompany />
      <FAQ />
      <ContactUs full={true} />
    </>
  );
};

export default CareerPage;
