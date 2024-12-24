import React from "react";
import ContactForm from "../Components/Contact/ContactForm";
import { Helmet } from "react-helmet";
import EsHeaderTitle from "../Components/Utils/EsHeaderTitle";

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <EsHeaderTitle page="Contact Us" />
      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 my-14 gap-6">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-5xl my-2">Contact</h2>
          <h3 className="text-2xl font-semibold">
            We're here to help you find the talent you need
          </h3>
          <p>
            Whether you’re looking for remote architecture and engineering
            professionals or have questions about how BetterPros can meet your
            production needs, we’re here to assist.
          </p>
          <div>
            <ContactForm />
          </div>
          <h3>
            <span className="font-bold text-xl">Email Us:</span>{" "}
            shafiul2014bd@gamil.com
          </h3>
        </div>

        <div className="flex flex-col items-center  xs:order-first sm:order-first md:order-none">
          <img
            src="https://i.ibb.co.com/fdSKqHZ/AI-Generated-Image-2024-09-16-464173877022201.jpg"
            alt="U-Learn"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
