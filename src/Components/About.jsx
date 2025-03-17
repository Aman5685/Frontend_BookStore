//import React from 'react'
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import rightimg from "../../public/Images/about-page-team-img.avif";
import Navbar from "./Navbar";
function About() {
  const whatappNumber = "7800080638";
  const message = "Hello ! I need some help";
  const whatappLink = `https://wa.me/${whatappNumber}?text=${encodeURIComponent(
    message
  )}`;
  const navigate = useNavigate();
  const gotoHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto">
        <Navbar />
        {/* Button Container */}
        <div className="flex items-center justify-center p-20 ">
          {" "}
          <button
            onClick={gotoHomePage}
            className="px-3 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white border-[1px] hover:shadow-md"
          >
            Back to home
          </button>
        </div>
        {/* Main Content */}
        <div className="flex max-md:flex-col dark:border-[1px] dark:border-[#64FFDA]">
          <div className="w-1/2 mt-5 p-5 max-md:w-full">
            <strong className="flex gap-4 items-center text-2xl font-bold">
              Join our team{" "}
              <span>
                <GoArrowRight className="text-2xl font-bold" />
              </span>
            </strong>
            <h1 className="text-4xl font-bold mt-5 text-black dark:text-white">
              We are just getting started
            </h1>
            <p className="text-[#757575] mt-5 text-xl">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <a href={whatappLink} target="_blank">
              <button className="px-4 py-2 bg-black hover:bg-slate-800 rounded-md text-white mt-5 font-bold hover:shadow-md dark:bg-slate-600">
                Join Now
              </button>
            </a>
          </div>
          <div className="w-1/2 p-5 bg-transparent rounded-full max-md:w-full">
            <img src={rightimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
