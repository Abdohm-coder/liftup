import React from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs";
import FAQ from "../FAQ";
import OurOffice from "./OurOffice";

const ContactUsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Contact Liftup for all your Game Development requirements
        </title>
      </Helmet>
      <ContactUs full={false} />
      <OurOffice />
      <FAQ />
    </>
  );
};

export default ContactUsPage;
