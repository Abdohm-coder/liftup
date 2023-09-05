import React from "react";
import { Helmet } from "react-helmet";
import ProcessHero from "./ProcessHero";
import ProcessSteps from "./ProcessSteps";
import ProcessSection from "./ProcessSection";
import ClientReviews from "../ClientReviews";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";

const OurProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Process for Mobile Game Development for Android and iOS</title>
      </Helmet>
      <ProcessHero />
      <ProcessSteps />
      <ProcessSection />
      <ClientReviews />
      <FAQ />
      <ContactUs full={true} />
    </>
  );
};

export default OurProcessPage;
