import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const FormLeft = ({ firstName }) => {
  return (
    <>
      <div className="h-full my-15  text-white px-12  flex flex-col  font-[arial]">
        {/* Top Section */}
        <div>
          <h2 className="text-4xl font-bold text-blue-100 mb-6">
            Our support team
          </h2>

          <p className="text-md leading-7 max-w-xl">
            Welcome to our Support Hub! Our dedicated team is here to assist you
            every step of the way. Whether you have questions about our
            services, need technical support, or simply want to share your
            feedback, we’re always ready to listen.No matter how big or small
            your concern may be, feel free to reach out with confidence.
          </p>

          <div
            className="h-[2px] bg-gradient-to-r 
from-pink-500 via-purple-500 to-blue-500 
mt-8 animate-pulse"
          ></div>
        </div>

        {/* Middle Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-semibold  text-blue-100 ">
            San Francisco
          </h3>

          <div className=" text-md mt-5">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-blue-300 mt-1"
              />
              <div>
                <p>123 Tech Boulevard</p>
                <p>San Francisco, CA 94105 - United States</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-300" />
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-300" />
              <p>hello@designsummit.com</p>
            </div>
            <div className="  text-sm text-gray-300 py-10">
              <p>✔ 24/7 Customer Support</p>
              <p>✔ 0 Wait Time</p>
              <p>✔ On Call Agents Available </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLeft;
