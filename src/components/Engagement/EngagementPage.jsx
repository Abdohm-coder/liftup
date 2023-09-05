import React from "react";
import { Helmet } from "react-helmet";
import EngagementHero from "./EngagementHero";
import EngagementModel from "./EngagementModel";
import ClientReviews from "../ClientReviews";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";

const EngagementPage = () => {
  return (
    <>
      <Helmet>
        <title>Hire Dedicated Resources for Android & iOS Development</title>
      </Helmet>
      <EngagementHero />
      <EngagementModel />
      <ClientReviews />
      <FAQ />
      <ContactUs full={true} />
    </>
  );
};

export default EngagementPage;
