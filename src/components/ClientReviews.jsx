import React, { useEffect } from "react";
import flickityInit from "../flickityInit";
import MaleAvatar from "../images/male.png";
import FemaleAvatar from "../images/female.png";
import Star from "../images/Star.svg";

const ClientReviews = () => {
  useEffect(() => {
    flickityInit("review-carousel", 2);
  });

  const reviews = [
    {
      image: MaleAvatar,
      name: "John William",
      company: "",
      stars: 5,
      message:
        "Liftup was a pleasure to work with throughout the development process. Even on our first project together, we quickly developed a strong working relationship.",
    },
    {
      image: MaleAvatar,
      name: "Todd Locher",
      company: "",
      stars: 5,
      message:
        "I am delighted and really appreciate their work on my game application. I appreciate the team's effort and commitment to the project. They delivered exactly what I was expecting at an affordable price. ",
    },
    {
      image: FemaleAvatar,
      name: "Minnie Barksdale",
      company: "",
      stars: 5,
      message:
        "Thank you for your excellent work, it was a pleasure working with Liftup on this project, and I look forward to working with the team again in the future.",
    },
    {
      image: FemaleAvatar,
      name: "Joshua Hill",
      company: "",
      stars: 5,
      message:
        "Liftup developed our game application for iOS and Android. They contribute significantly to the game's graphical appearance, gameplay, and user experience. My team and I are thrilled with their work.",
    },
    {
      image: MaleAvatar,
      name: "David Gardner",
      company: "",
      stars: 5,
      message:
        "The team was very responsive and caring to my needs in this project. They went over and beyond my expectations. Highly recommended! ",
    },
    {
      image: MaleAvatar,
      name: "Steve Nelson",
      company: "",
      stars: 5,
      message:
        "I endorse Liftup and its team of talented professionals as one of the few outstanding game development companies today. Big thanks to all of the team members for successfully building the application. They actually took my plans and ideas and brought them to life. I hope to work with this excellent team in the future. ",
    },
    {
      image: MaleAvatar,
      name: "James Murray",
      company: "",
      stars: 5,
      message:
        "Given the cost, you would not find a better game development company. Mine was an extensive project, and I had my reservations. Communication was never delayed, and I asked as many questions as possible. Professionalism is top-notch; most of all, they care about your success. Highly recommended! ",
    },
    {
      image: MaleAvatar,
      name: "Stephanie Campbell",
      company: "",
      stars: 5,
      message:
        "These guys are great, know what they are doing, and are good at adapting to what you want. Big thanks!",
    },
    {
      image: FemaleAvatar,
      name: "Ana Green",
      company: "",
      stars: 5,
      message:
        "Liftup is a very reliable team of highly qualified and professional developers. I have worked very well with them and have developed a very effective way of working together. Highly recommend it to anyone seeking a reliable and very flexible team.",
    },
    {
      image: MaleAvatar,
      name: "John Taylor",
      company: "",
      stars: 5,
      message:
        "Professional and knowledgeable! They were courteous during our correspondence and asked for frequent feedback. It was a pleasure to work with Liftup. I will work with them in the future and recommend them! Their efforts are highly appreciated.",
    },
  ];

  return (
    <section className="py-5 container text-center">
      <h2>
        What Our{" "}
        <span className="border border-primary shadow-primary rounded px-3">
          Clients
        </span>{" "}
        Say
      </h2>
      <p className="fs-5 container mb-5">
        We are very fortunate to have formed excellent partnerships with many of
        our clients. And we've developed more than just professional
        relationships with them. Here is what they are saying about us.
      </p>
      <div id="review-carousel">
        {reviews.map((review, index) => (
          <div
            className="carousel-cell col-9 col-md-5 col-lg-4 col-xl-3 px-3 my-5"
            key={index}
          >
            <div className="rounded border-primary-light p-3">
              <img
                src={review.image}
                height="70"
                className="rounded-circle mb-2"
              />
              <h5 className="mb-0">{review.name}</h5>
              <p className="text-primary mb-0 small">{review.company}</p>
              {[...Array(review.stars)].map((s) => (
                <img key={s} src={Star} className="px-1" height={14} />
              ))}
              <p className="mt-2 small">{review.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
