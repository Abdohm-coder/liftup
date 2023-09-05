import React from "react";
import { Helmet } from "react-helmet";
import InfrastructureHero from "./InfrastructureHero";
import InfrastructureTabs from "./InfrastructureTabs";
import InfrastructureSection from "./InfrastructureSection";
import InfrastructureSteps from "./InfrastructureSteps";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";

const InfrastructurePage = () => {
  return (
    <>
      <Helmet>
        <title>Infrastructure for Mobile Game Development for Android and iOS</title>
      </Helmet>
      <InfrastructureHero />
      <InfrastructureTabs />
      <InfrastructureSection />
      <InfrastructureSteps />
      <FAQ />
      <ContactUs full={true} />
    </>
  );
};

export default InfrastructurePage;
