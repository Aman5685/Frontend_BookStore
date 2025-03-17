// import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Contact() {
  const navigate = useNavigate();
  const gotoHomePage = () => {
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Call our api using Axios with the help of function onSubmit;
  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    axios
      .post("https://bookstore-bmwf.onrender.com/user/contact", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Message sent successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.err("Error :" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font relative p-5 pt-24 bg-white dark:bg-slate-600 dark:text-white">
        <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md dark:bg-slate-600 dark:text-white">
              <div className="lg:w-1/2 px-6 dark:bg-slate-600 dark:text-white">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 dark:bg-slate-600 dark:text-white">
            <navigate to="/">
              {" "}
              <button
                onClick={gotoHomePage}
                className="px-2 py-2 w-24 bg-indigo-500 hover:bg-indigo-600 text-white mb-2 rounded-md border-[1px] max-md:mt-2"
              >
                Back
              </button>
            </navigate>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font dark:bg-slate-600 dark:text-white">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 dark:bg-slate-600 dark:text-white">
              &quot;Have questions or need{" "}
              <span className="text-blue-600 underline">assistance?</span>{" "}
              We&apos;re here to help! Reach out to us using the form below, and
              we&apos;ll get back to you as soon as possible.&quot;
            </p>
            {/* Form Validation start */}
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <div className="relative mb-4">
                {/* Name */}
                <label className="leading-7 text-sm text-gray-600 dark:bg-slate-600 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-600 dark:text-white"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                {/* Email */}
                <label className="leading-7 text-sm text-gray-600 dark:bg-slate-600 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-600 dark:text-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                {/* Message */}
                <label className="leading-7 text-sm text-gray-600 dark:bg-slate-600 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-slate-600 dark:text-white"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This is your message field
                  </span>
                )}
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
