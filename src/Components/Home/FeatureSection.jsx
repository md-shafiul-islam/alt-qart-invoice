import React from "react";
import FeatureItem from "./FeatureItem";

const FeatureSection = ({ ...props }) => {
  return (
    <div className="w-full grid grid-cols-1 font-bold py-8 gap-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-center py-4 py-6">
          <span className="px-8 border-b border-gray-400 ">
            Our Architectural Solutions
          </span>
        </h2>
        <p>
          We offer trusted professionals to support every phase of design,
          visualization, and construction.
        </p>
      </div>
      <div className="grid grid-cols-12 md:grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 gap-6 mt-5 ">
        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/qprnLWh/Frame-1-6.webp"
            title="BIM Modeling (Revit)"
            description="We master the use of Revit and add-ins to design and model
          architectural projects precisely, making the design process
          collaborative and real-time."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/rkKp9VS/Frame-1-7.webp"
            title="BIM Project Management"
            description="We use BIM methodology to offer solutions for construction projects, facilitating coordination and decision-making throughout the project lifecycle."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/hgLNxC2/Frame-1-1-1.webp"
            title="CAD Drafting"
            description="We provide expert drafting and design solutions using CAD software, delivering accurate technical drawings for various industries."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/TKWkxT3/Frame-1-2-1.webp"
            title="Visualization"
            description="We create 3D visualizations, animations, and virtual reality experiences to allow clients to explore and understand projects before getting to the building phase."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/tYQB1bL/Frame-1-3-1.webp"
            title="Interior Design"
            description="We blend creativity and functionality to create personalized and inspiring interior spaces that reflect our clients’ vision, lifestyle, and brand identity."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/fX5C7ZG/Frame-1-4-1.webp"
            title="Landscape Design"
            description="We provide landscape design support that aims to create beautiful and sustainable outdoor spaces, maximizing the natural beauty of landscapes while meeting the needs of users."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/M8HVMdp/i-Stock-1395053030.jpg"
            title="Consultation on Fire safety changes to the local Building Regulations"
            description="Residential buildings and in particular domestic multi-residential buildings, to provide assurance and additional safety measures to residents."
          />
        </div>

        <div className="col-span-3 flex flex-col border gap-4 rounded-3xl pb-6">
          <FeatureItem
            url="https://i.ibb.co.com/4j5Y3L1/shutterstock-2009875304-jpg.webp"
            title="Energy-Efficiency Assessments"
            description="Review of building components, insulation levels, heating and lighting systems, and operational features to assess current performance levels and opportunities for energy savings."
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
