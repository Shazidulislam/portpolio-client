import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div className="my-30">
      <h2 className="text-3xl md:text-4xl font-semibold text-center my-10">
        Let's <span className="text-lime-300">Work Together</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {/* from */}
        <div className="px-4 py-10 bg-white/10 rounded-2xl shadow-2xl">
          <p className="text-sm ">
            <span className="text-lg">W</span>elcome! Please fill out the form
            below to get started.
          </p>
          <form onSubmit={()=>{
             toast.success("Your message send successfuly") 
          }} className="pt-3 space-y-3 ">
            <div className="md:flex justify-center space-y-3 md:space-y-0  gap-4 items-center">
              <input
                type="text"
                placeholder="Your Name" required
                className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300"
              />

              <input
                type="text"
                placeholder="contact@emai.com" required
                className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300"
              />
            </div>
           <input
                type="text"
                required
                placeholder="What's on your mind?"
                className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300"
              />
              <textarea required className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300" rows={5} placeholder="Your message" ></textarea>
             <button  type="submit"  className="px-6 py-3 border-2 shadow hover:shadow-lime-100 w-full cursor-pointer rounded">Submit</button>
          </form>
        </div>
        {/* contact */}
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default Contact;
