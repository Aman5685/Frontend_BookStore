// import React from 'react'
import banner from"../../public/banner.jpg";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col and md:flex-row my-13 mt-67">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
       <div className="space-y-12">
       <marquee direction="left ">
       <h1 className="text-4xl font-bold">Hello, welcomes here to learn something 
       <span className="text-pink-500"> new everyday!!!</span></h1>
       </marquee>
        <p className="text-xl">
            What motive me to create this book store web-app was a deep desire 
            to help people understand the importance of learning and 
            how it can be a powerful tool for personal <span className="text-blue-700">Growth.</span>
            <br />
           <br /> I have tried to explain the great fundamentals truth 
            of your mind in the <span className="text-pink-500">simplest language.!</span>

        </p>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
       </div>
       <button className=" mt-6 btn btn-secondary">Get started</button>

        </div>
        <div className="order-1 w-full md:w-1/2">
        <img className="bg-red-800 border-[10px] rounded-full mt-20 ml-[5px]" src={banner}  alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner
