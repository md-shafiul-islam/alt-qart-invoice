import React from "react";
import { Breadcrumb, Layout } from "antd";
import { NavLink } from "react-router-dom";

const HRFooter = () => {
  return (
    <div className="grid grid-cols-7 gap-6">
      <aside className="col-span-4">
        <span className="text-2xl">
          <i className="fa-solid fa-object-group"></i>
        </span>
        <p className="w-full sm:w-full xs:w-full">
          <span className="py-2 text-lg font-bold">Green Architecture </span>
          <br />
          Rely on experts in design, drafting, modeling, visualization, and
          Project Management to turn your ideas into real results.
        </p>
      </aside>
      <div className="col-span-3 px-5">
        <div className="w-full grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h6 className="footer-title text-xl border-b pb-2">Menu</h6>
            <nav className="font-semibold xs:w-full sm:w-full md:w-full w-full   flex xs:flex-col sm:flex-col justify-center list-none md:items-start xs:items-center sm:items-center">
              <li className="font-semibold border-b border-transparent hover:bg-none hover:border-white">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className=" font-semibold border-b border-transparent hover:bg-none hover:border-white">
                <NavLink to="/assignments"> Assignments</NavLink>
              </li>
              <li className=" active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
                <NavLink to="/create assignments">Create Assignment</NavLink>
              </li>
              <li className=" active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
                <NavLink to="/pending-assignments">
                  {" "}
                  Pending Assignments
                </NavLink>
              </li>
              <li className=" font-semibold border-b border-transparent hover:bg-none hover:border-white">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>

              <NavLink to="/register" className="link link-hover">
                Register
              </NavLink>
              <NavLink to="/login" className="link link-hover">
                Login
              </NavLink>
            </nav>
          </div>

          <div>
            <h6 className="footer-title text-2xl pb-2">Stay with us</h6>
            <nav className="font-semibold xs:w-full sm:w-full md:w-full w-full   flex xs:flex-col sm:flex-col justify-center  md:items-start xs:items-center sm:items-center">
              <NavLink className="link link-hover">Terms of use</NavLink>
              <NavLink className="link link-hover">Privacy policy</NavLink>
              <NavLink className="link link-hover">Cookie policy</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRFooter;
