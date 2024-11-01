// import React from 'react';
 import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);
  return (
   <>
   
   <div className="flex h-screen items-center justify-center md:bg-base-200 dark:bg-slate-600 dark:text-white">
   
   <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    {/*Name */}
   <div className="mt-4 space-y-2 md:bg-base-200 dark:bg-slate-600 dark:text-white">
    <h1 className="font-bold text-xl">Contact us</h1>
    <br />
        <span>Name</span>
        <br />
        <input type="text" 
        placeholder="Enter your name"
        className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("name", { required: true })}
        />
        <br />
        {errors.name &&( <span className="text-sm text-red-500">This field is required</span>)}
       </div>
        {/*E-mail */}
        <div className="mt-4 space-y-2">
        <span>Email</span>
        <br />
        <input type="text" 
        placeholder="Enter your email"
        className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("email", { required: true })}
        />
        <br />
        {errors.email &&( <span className="text-sm text-red-500">This field is required</span>)}
       </div>
       {/*Message */}
       <div className="mt-4 space-y-2">
        <span>Message</span>
        <br />
        <input type="text" 
        placeholder="Type your message"
        className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("Message", { required: true })}
        />
        <br />
        {errors.message &&( <span className="text-sm text-red-500">This field is required</span>)}
       </div>
       {/*Button */}
       <div className="flex justify-around mt-4">
          <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">Submit</button>
        </div>

        <Link/>
   </form>
   </div>
   </>
  )
}

export default Contact
