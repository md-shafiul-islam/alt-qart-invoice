import React from "react";
import HomeBanner from "../Components/Home/HomeBanner";
import { Helmet } from "react-helmet";
import ContactForm from "../Components/Contact/ContactForm";
import FeatureSection from "../Components/Home/FeatureSection";
import WorkSteps from "../Components/Home/WorkSteps";
import Quotes from "../Components/Home/Quotes";

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Green Architecture | Home</title>
      </Helmet>
      <section className="container mx-auto">
        <HomeBanner />
      </section>

      <section className="container mx-auto">
        <FeatureSection />
      </section>

      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="">
            <h3 className="text-2xl font-bold text-center">
              <span className="py-2 px-5 border-b dark:border-b-teal-50">
                How our process works
              </span>{" "}
            </h3>
          </div>
          <WorkSteps />
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="">
            <h3 className="text-2xl font-bold text-center">
              <span className="py-2 px-5 border-b dark:border-b-teal-50">
                What our clients say about BetterPros
              </span>{" "}
            </h3>
          </div>
          <Quotes />
        </div>
      </section>

      <section className="container mx-auto my-10 border-t pt-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-7">
          <div className="w-full">
            <h2 className="text-2xl font-bold my-6">
              We're here to support you along the way
            </h2>
            <ContactForm />
          </div>
          <div>
            <img src="https://i.ibb.co.com/SJZgXz9/cost-estimation.jpg" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
