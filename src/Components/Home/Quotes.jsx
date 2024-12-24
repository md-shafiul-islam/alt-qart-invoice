import React from "react";
import Quote from "./Quote";

const Quotes = () => {
  return (
    <div className="w-full grid grid-cols-1 font-bold py-8 gap-6">
      <div className="grid grid-cols-12 md:grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 gap-6 mt-5 ">
        <div className="col-span-4 flex flex-col border gap-4 pb-6">
          <Quote
            name="William Burch"
            designation="Architects"
            quote={`“I decided to give outsourcing another try with BetterPros. I was surprised by a simple payment system, fluent English speakers, software alignment, and a stable business model.`}
            profileUrl="https://i.ibb.co.com/HrCvbtF/agent-2.jpg"
          />
        </div>

        <div className="col-span-4 flex flex-col border gap-4 pb-6">
          <Quote
            name="Marcor Platt"
            designation="Expert Network PLLC"
            quote={`“I told my needs and they quickly found three candidates to interview. The professional I selected turned out to be knowledgeable, responsive, and experienced. I was frankly overwhelmed, and now I feel grateful.`}
            profileUrl="https://i.ibb.co.com/6rw37kd/agent-3.jpg"
          />
        </div>

        <div className="col-span-4 flex flex-col border gap-4 pb-6">
          <Quote
            name="Nilcolas Catellier"
            designation="CEO, BIM Pure"
            quote={`“The team quickly delivered a list of high-quality candidates. The interview process is made simple and way more efficient compared to trying to find freelancers individually.`}
            profileUrl="https://i.ibb.co.com/80FGpJP/agent-1.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
