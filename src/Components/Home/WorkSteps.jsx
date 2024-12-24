import React from "react";
import WorkStep from "./WorkStep";

const WorkSteps = ({ ...props }) => {
  return (
    <div className="w-full grid grid-cols-1 font-bold py-8 gap-6">
      <div className="grid grid-cols-12 md:grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 gap-6 mt-5 ">
        <div className="col-span-3 flex flex-col border gap-4 pb-6">
          <WorkStep
            count={1}
            title="Understanding your needs"
            description="We start by listening to your specific requirements and understanding the type of professional you’re looking for. This helps us tailor our search to find the best candidates for your business."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 pb-6">
          <WorkStep
            count={2}
            title="Tailored recommendations"
            description="Based on your requirements, we send you three top portfolios from our pool of professionals. Each professional is carefully selected to match the skills, experience, and expertise you need."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 pb-6">
          <WorkStep
            count={3}
            title="Review and interview"
            description="Once you find the best fit for your company, we have a kickoff meeting to further the onboarding."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 pb-6">
          <WorkStep
            count={4}
            title="Hire"
            description="Get an assigned Account Manager to coordinate all the details and start your remote journey with your selected professional."
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSteps;
