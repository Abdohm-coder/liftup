import React from "react";
import { Helmet } from "react-helmet";
import AboutUsHero from "./AboutUsHero";
import AboutUsTabs from "./AboutUsTabs";
import AboutUsOurValue from "./AboutUsOurValue";
import AboutUsOurSquad from "./AboutUsOurSquad";
import AboutUsIndustries from "./AboutUsIndustries";
import ClientReviews from "../ClientReviews";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>We are Game Development Company</title>
      </Helmet>
      <AboutUsHero />
      <AboutUsTabs />
      <AboutUsOurValue />
      <AboutUsOurSquad />
      <AboutUsIndustries />
      <ClientReviews />
      <FAQ />
      <ContactUs full={true} />
    </>
  );
};

export default AboutUsPage;
