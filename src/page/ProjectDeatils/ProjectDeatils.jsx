import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import img1 from "../../assets/project.png";
import img2 from "../../assets/Screenshot (38).png";
import Loading from "../../Component/Loading/Loading";
import { PiArrowLeftThin } from "react-icons/pi";

const ProjectDeatils = () => {
  const [singleData, setSingledata] = useState();
  const { id } = useParams();
  const projectData = [
    {
      id: 1,
      projectName: "Blood Donation",
      description:
        "This Blood Donation Platform is designed to be highly user-friendly, making it easy for anyone to connect with life-saving resources. Users can search for blood donors based on district and upazila, ensuring quick and location-specific matches.\n\nThe platform allows users to submit blood donation requests, so those in urgent need can find donors directly from posted requests. In addition, it features a fun donation system, enabling users to contribute monetary donations to support blood donation drives and related initiatives.\n\nWith its intuitive interface and powerful search features, this project brings together donors, recipients, and supporters in one place to make the process fast, efficient, and impactful.",
      links: {
        live: "https://dragone-news-breaking.web.app/",
        client: "https://github.com/Shazidulislam/blood-donation-client",
        server:
          "https://github.com/Programming-Hero-Web-Course4/b11a12-server-side-Shazidulislam",
      },
      projectImages: img2,
      projectFeatured:
        "The project offers a comprehensive and user-friendly homepage designed with React.js, React DOM, and Tailwind CSS, featuring quick district/upazila search, urgent requests, featured donors, and clear call-to-action buttons. An engaging banner section showcases a bold slider with multiple slides promoting blood drives and core features, providing smooth visuals styled with Tailwind CSS. The diverse donors section displays donor cards in a clean grid layout, showing details like alias, blood group, and location, with data dynamically fetched via Axios from MongoDB.The seamless “Register as Donor” page is a protected form with input validation, Firebase authentication, and route protection using React Router, along with SweetAlert notifications. Submitted data is handled through Axios and stored in MongoDB via a Node.js and Express.js backend. The accessible “All Donors” page provides a searchable and filterable donor list, with data efficiently managed and cached using React Query and Axios.For a more personalized experience, users have private detail pages secured with React Router and JWT authentication, where data is fetched and cached using React Query for a smooth browsing experience. The customizable “My Requests” and “Profile” pages allow users to manage their information through a React.js interface connected to MongoDB. Additionally, a fun donation system is available, offering optional micro-donations with secure payment processing handled by a Node.js and Express.js backend, Axios API calls, and a responsive React.js + Tailwind CSS front end.",
      technologies: [
        "React.js",
        "React Router",
        "React Query",
        "Axios",
        "SweetAlert",
        "Firebase ",
        "React DOM",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      projectName: "Marathon Hub",
      description:
        "The Marathon Management Project offers a highly intuitive and user-friendly platform designed to streamline the entire marathon experience. With smooth and clear navigation, users can effortlessly browse upcoming marathons, view detailed event information, and register to participate via a quick and efficient registration system.\n\nUsers also have the capability to add new marathons, providing comprehensive details such as event name, date, venue, category, and descriptions through a secure and easy-to-use form. This empowers organizers and community members to contribute and expand the marathon database dynamically.\n\nThe platform features personalized dashboards where users can manage their registrations, track participation history, and update their profiles. Authentication is securely handled via Firebase Authentication, ensuring user data privacy and protected access.\n\nBuilt with React.js and styled with Tailwind CSS, the project boasts a fully responsive design that adapts seamlessly across devices, offering consistent performance on desktop and mobile. Backend services powered by Node.js, Express.js, and MongoDB facilitate efficient data handling and API communication. Additional enhancements include real-time data fetching with React Query, interactive modals for updates and deletions, and confirmation alerts powered by SweetAlert.\n\nThis comprehensive system makes marathon management and participation accessible, efficient, and engaging for runners, organizers, and admins alike.",
      links: {
        live: "https://simple-firbase-auth-d4dd1.web.app/",
        client: "https://github.com/Shazidulislam/marathon-management",
        server:
          "https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-Shazidulislam",
      },
      projectImages: img1,
      projectFeatured:
        "This Marathon Management System offers a smooth and user-friendly experience with an easy-to-use menu and navigation bar for quick access to all features. Users can browse and search upcoming marathons, filtering by date, location, and category, and register quickly through a streamlined and secure process. Authorized users can add new marathons with detailed information such as name, date, venue, category, and description. Each user gets a personalized dashboard to track registrations, update profiles, and manage their participation history. The platform ensures secure authentication using Firebase Authentication and protects sensitive pages with private and admin routes via React Router. Real-time data handling is powered by React Query for fast, seamless updates, while CRUD operations allow creating, updating, and deleting events or registrations with confirmation alerts using SweetAlert. Designed with Tailwind CSS for a fully responsive, mobile-first interface, the backend is built on Node.js and Express.js with MongoDB for reliable data storage.",
      technologies: [
        "React.js",
        "React Router",
        "Axios",
        "SweetAlert",
        "Firebase ",
        "React DOM",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
  ];

  useEffect(() => {
    const fetchData = () => {
      const singleData = projectData?.find((data) => data?.id == id);
      console.log(singleData);
      setSingledata(singleData);
    };

    fetchData();
  }, [id]);
  if (!singleData) return <Loading></Loading>;

  return (
    <div className=" px-4 md:px-12 lg:px-16 2xl:px-24 mx-auto min-h-screen my-10">
      <figure>
        <img
          className="w-full rounded-xl "
          src={singleData?.projectImages}
          alt=""
        />
      </figure>
      <p className="text-3xl md:text-4xl 2xl:text-5xl py-3 font-semibold text-lime-300">
        {singleData?.projectName}
      </p>
      <p>
        <span className="font-semibold">Description : </span>
        <span className="font-thin text-sm">{singleData?.description}</span>
      </p>
      <div>
        <p className="text-2xl font-semibold pt-10">Project Highlights</p>
        <div>
          <p className="text-sm">{singleData?.projectFeatured}</p>
        </div>
      </div>
      {/* Technologies Used */}
      <div>
        <h2 className="text-2xl font-medium pt-10 pb-4">Technologies Used</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
          {singleData?.technologies?.map((info, i) => {
            return (
              <div
                key={i}
                className=" rounded text-center hover:shadow-2xl px-6 md:px-8 py-3 shadow shadow-lime-200"
              >
                {info}
              </div>
            );
          })}
        </div>
      </div>
      {/* link */}
      <h1 className="pt-10 text-3xl font-medium">Project Resources</h1>
      <div className="pt-2 grid grid-cols-2 md:flex justify-start items-center gap-4">
        <Link
          target="_blank"
          className="px-8 py-3 shadow shadow-lime-400  flex justify-center items-center rounded  transition transform duration-300 hover:-translate-y-4"
          to={singleData?.live}
        >
          Live Site
        </Link>
        <Link
          target="_blank"
          className="px-8 py-3 shadow shadow-lime-400 flex justify-center items-center rounded  transition transform duration-300 hover:-translate-y-4"
          to={singleData?.client}
        >
          Client
        </Link>
        <Link
          target="_blank"
          className="px-8 py-3 shadow shadow-lime-400 flex justify-center items-center rounded  transition transform duration-300 hover:-translate-y-4"
          to={singleData?.server}
        >
          Server
        </Link>
      </div>
      <div className="text-center pt-3 flex justify-center items-center">
        <Link to="/" className="px-6 py-3  shadow shadow-lime-300 flex justify-center items-center gap-2"> <PiArrowLeftThin size={24}/><span>Back Home</span></Link>
      </div>
    </div>
  );
};

export default ProjectDeatils;
