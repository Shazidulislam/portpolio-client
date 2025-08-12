import React from "react";
import img1 from "../../assets/project.png"
import img2 from "../../assets/Screenshot (38).png"
import ProjectCard from "../Card/ProjectCard";

const Project = () => {
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
      projectFeatured: {
        "Comprehensive Home Page":
          "Clean, user-friendly homepage with quick district/upazila search, urgent requests, featured donors, and CTAs, built with React.js, React DOM, and styled using Tailwind CSS.",
        "Engaging Banner":
          "Bold slider with 3+ slides promoting blood drives and features, created using React.js and styled with Tailwind CSS for smooth visuals.",
        "Diverse Donors Section":
          "Grid displaying donor cards with info like alias, blood group, and location, dynamically rendered using React.js and data fetched via Axios from MongoDB.",
        "Seamless Register as Donor Page":
          "Protected donor signup form with validation, authentication via Firebase, route protection with React Router, alerts from SweetAlert, data sent using Axios, backend with Node.js and Express.js, storing info in MongoDB.",
        "Accessible All Donors Page":
          "Searchable and filterable donor list rendered in React.js, data managed and cached with React Query, fetched via Axios.",
        "Personalized View Details Page":
          "Private detail pages secured with React Router and JWT, data fetched and cached with React Query and Axios for smooth user experience.",
        "Customizable My Requests & Profile":
          "User dashboard to manage requests and profiles, built with React.js, data handling through React Query and Axios, backed by MongoDB storage.",
        "Fun Donation System":
          "Optional micro-donation feature with secure payment processing using Node.js, Express.js backend, Axios for API calls, React.js UI, and styled by Tailwind CSS.",
      },
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
      projectFeatured: {
        "User-Friendly Navigation":
          "Easy-to-use menu and navigation bar for quick access to all pages and functions.",
        "Browse & Search Marathons":
          "Users can view upcoming marathons, filter by date, location, and category.",
        "Marathon Registration":
          "Streamlined registration process allowing users to sign up for marathons quickly and securely.",
        "Add New Marathons":
          "Authorized users can add marathon events with detailed info—name, date, venue, category, and description.",
        "Personalized User Dashboard":
          "Users can track their registrations, update profiles, and manage participation history.",
        "Secure Authentication":
          "Login and registration protected via Firebase Authentication for safe and secure access.",
        "Protected Routes":
          "Private and admin routes using React Router to restrict access where necessary.",
        "Real-Time Data Handling":
          "Efficient data fetching and caching with React Query for smooth user experience.",
        "CRUD Operations":
          "Users and admins can create, update, and delete marathon events and registrations with confirmation alerts (SweetAlert).",
        "Responsive Design":
          "Mobile-first design using Tailwind CSS ensuring great usability on any device.",
        "Backend API":
          "Built with Node.js and Express.js for robust server-side logic and MongoDB for data storage.",
      },
      technologies: [
        "React.js",
        "React Router",
         "MongoDB",
        "Axios",
        "SweetAlert",
        "Firebase ",
        "React DOM",
        "Node.js",
        "Express.js",
         "React Query",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>Projects</p>
        <h2 className="text-3xl font-semibold">
          My <span className="text-lime-300">Latest Projects</span>
        </h2>
      </div>
      {/* project */}
      <div className="min-h-screen space-y-10 pt-10">
        {
            projectData?.map((data)=>{
                return(
                    <ProjectCard data={data} key={data?.id}></ProjectCard>
                )
            })
        }
      </div>
    </div>
  );
};

export default Project;
