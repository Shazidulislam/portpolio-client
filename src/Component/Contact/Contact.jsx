import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const templateParams = Object.fromEntries(fromData.entries());
    // const to_name = "Shazidul Islam"
    // templateParams.push(to_name)
    console.log(templateParams);
    console.log(import.meta.env.VITE_SERVICE_EMAIL_JS);
    const serviceID = "service_a7xdpso";
    const templateID = "template_z83t0bd";
    const publicID = "V8BUWaiGSqFEXcmgj";
    // send email
    emailjs
      .send(serviceID, templateID, templateParams, publicID)
      .then((response) => {
        console.log(response);
        if (response) {
          toast.success("Your message send successfully.")
          from.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-30">
      <h2 className="text-3xl md:text-4xl font-semibold text-center my-10">
        Let's <span className="text-lime-300">Work Together</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {/* from */}
        <div className="px-4 py-10 bg-white/10 rounded-2xl shadow-2xl">
          <p className="text-sm italic">
            <span className="text-lg">W</span>elcome! Please fill out the form
            below to get started.
          </p>
          {/* email from */}
          <form onSubmit={handleEmailSubmit} className="pt-3 space-y-3 ">
            <div className="md:flex justify-center space-y-3 md:space-y-0  gap-4 items-center">
              <input
                type="text"
                placeholder="Your Name"
                name="from-name"
                required
                className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300"
              />

              <input
                type="email"
                placeholder="contact@emai.com"
                name="email"
                required
                className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300"
              />
            </div>
            <input
              type="text"
              name="from-topic"
              required
              placeholder="What's on your mind?"
              className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300"
            />
            <textarea
              required
              name="from-message"
              className="py-3 w-full pl-3 border-b-2  bg-white/5 outline-none hover:border-lime-400 shadow-2xl hover:shadow hover:shadow-lime-300"
              rows={5}
              placeholder="Your message"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 border-2 shadow hover:shadow-lime-100 w-full cursor-pointer rounded"
            >
              Submit
            </button>
          </form>
        </div>
        {/* contact */}
        <div className="border rounded-2xl p-10">
          <h2 className=" font-thin text-sm italic ">
            <span className="text-lg">P</span>lease contact through other means.
          </h2>
          <div className=" ">
            <ul className="space-y-4 text-gray-300 pt-3 ">
              <span className="flex justify-start  gap-2 px-6 py-3 bg-white/10">
                <MdOutlineMail size={24} />
                <p>shazidulislam910@gmail.com</p>
              </span>
              <span className="flex justify-start gap-2 bg-white/10 px-6 py-3">
                <FaWhatsappSquare size={24} />
                <Link
                  className="hover:text-lime-300"
                  target="_blank"
                  to="https://wa.me/8801605199098?text=Hi%20I%20am%20Shazid%0AI%20am%20a%20passionate%20web%20developer"
                >
                  <p className="">+8801605199098</p>
                </Link>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
