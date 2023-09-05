import React, { useState, useEffect } from "react";
import ContactUsImage from "../images/ContactUsBg.png";
import ContactFormImage from "../images/ContactForm.png";
import AndroidIcon from "../images/android2.png";

const ContactUs = ({ full }) => {
  const [showmsg, setShowmsg] = useState(null);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    Contact: "",
    description: "",
  });

  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }
  function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  }

  const setfield = (e) => {
    if (e.target.name == "name") {
      setformData({ ...formData, name: e.target.value });
    } else if (e.target.name == "email") {
      setformData({ ...formData, email: e.target.value });
    } else if (e.target.name == "contactNumber") {
      if (isNaN(e.target.value)) {
        setShowmsg("Invalid Phone");
        setTimeout(() => {
          setShowmsg(null);
        }, 3000);
      } else {
        setformData({ ...formData, Contact: e.target.value });
      }
    } else if (e.target.name == "description") {
      setformData({ ...formData, description: e.target.value });
    }
  };

  const SubmitData = (e) => {
    e.preventDefault();
    if (
      formData.name != "" &&
      formData.email != "" &&
      formData.Contact == "" &&
      formData.description != ""
    ) {
      setShowmsg("Enter Phone");
      setTimeout(() => {
        setShowmsg(null);
      }, 3000);
      return;
    }
    if (
      formData.name != "" &&
      formData.email != "" &&
      formData.Contact != "" &&
      formData.description != ""
    ) {
      if (ValidateEmail(formData.email)) {
        // if (phonenumber(formData.Contact)) {
        var formdata = new FormData();
        formdata.append("name", formData.name);
        formdata.append("contact", formData.Contact);
        formdata.append("email", formData.email);
        formdata.append("message", formData.description);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch("https://liftup.studio/contact.php", requestOptions)
          .then((response) => {
            if (response.status == 200) {
              setShowmsg(
                "Thank you for your msg. we have received it. One of our Rep will get back to you in 2 hours"
              );
              setTimeout(() => {
                setShowmsg(null);
              }, 3000);
              setformData({
                name: "",
                email: "",
                Contact: "",
                description: "",
              });
            }
          })
          .catch((error) => console.log("error", error));
        // } else {
        //   setShowmsg("Invalid Phone");
        //   setTimeout(() => {
        //     setShowmsg(null);
        //   }, 3000);
        // }
      } else {
        setShowmsg("Invalid Email");
        setTimeout(() => {
          setShowmsg(null);
        }, 3000);
      }
    } else {
      setShowmsg("All fields required");
      setTimeout(() => {
        setShowmsg(null);
      }, 3000);
    }
  };

  useEffect(() => {
    // console.log(formData);
  }, [formData]);
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
            full && ContactUsImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="container">
                <h1 className="display-3">Let's Talk</h1>
                <p className="fs-5">
                  We have worked with clients ranging from young startups to
                  mature Fortune companies who are very impressed with our
                  service offerings. Brief us of your requirements, and we’ll
                  get started on it right away.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="container">
                <div
                  className="translucent border border-2 border-secondary rounded-3 mx-lg-5"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
                      full || ContactFormImage
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h5 className="text-center border-2 border-secondary border-bottom p-2">
                    Fill the form
                  </h5>
                  <form className="p-4">
                    <div className="row mb-3">
                      <div className="col-6">
                        <label htmlFor="nameInput ">
                          Your Name{" "}
                          <span className="text-danger fw-bold fs-5">*</span>
                        </label>
                        <input
                          value={formData.name}
                          onChange={setfield}
                          name="name"
                          type="text"
                          id="nameInput"
                          className="form-control bg-transparent text-light"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="contactInput">Phone Number</label>
                        <input
                          value={formData.Contact}
                          onChange={setfield}
                          name="contactNumber"
                          type="text"
                          id="contactInput"
                          className="form-control bg-transparent text-light"
                          placeholder="Enter your contact number"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="emailInput">
                        Your Email{" "}
                        <span className="text-danger fw-bold fs-5">*</span>
                      </label>
                      <input
                        value={formData.email}
                        onChange={setfield}
                        name="email"
                        type="text"
                        id="emailInput"
                        className="form-control bg-transparent text-light"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="messageInput">
                        Tell Us About your Project
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={setfield}
                        name="description"
                        id="messageInput"
                        className="form-control bg-transparent text-light"
                        placeholder="Write message"
                        rows={5}
                      ></textarea>
                    </div>
                    <button
                      onClick={SubmitData}
                      type="submit"
                      className="btn btn-primary w-100  text-white"
                    >
                      Send
                    </button>
                    {showmsg && <span style={{ color: "red" }}>{showmsg}</span>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {full && (
        <section className="container">
          <div className="d-flex flex-wrap gap-3 gap-lg-5 py-5">
            <div className="rounded border-primary-light p-2 flex-fill d-flex gap-3 align-items-center shadow-primary">
              <img src={AndroidIcon} height="90" />
              <div>
                <h5 className="mb-1">20+</h5>
                <p className="m-0">Team Members</p>
              </div>
            </div>
            <div className="rounded border-primary-light p-2 flex-fill d-flex gap-3 align-items-center shadow-primary">
              <img src={AndroidIcon} height="90" />
              <div>
                <h5 className="mb-1">10+</h5>
                <p className="m-0">Games</p>
              </div>
            </div>
            <div className="rounded border-primary-light p-2 flex-fill d-flex gap-3 align-items-center shadow-primary">
              <img src={AndroidIcon} height="90" />
              <div>
                <h5 className="mb-1">50%</h5>
                <p className="m-0">Growth Rate</p>
              </div>
            </div>
            <div className="rounded border-primary-light p-2 flex-fill d-flex gap-3 align-items-center shadow-primary">
              <img src={AndroidIcon} height="90" />
              <div>
                <h5 className="mb-1">85%</h5>
                <p className="m-0">Repeat Client</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactUs;
