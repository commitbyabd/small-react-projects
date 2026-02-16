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
    <div className="h-full  text-black px-12 py-16 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <h2 className="text-4xl font-bold text-pink-500 mb-6">
          Our support team
        </h2>

        <p className="text-sm leading-7 text-gray-900 max-w-md">
          Welcome to our support Hub! Our dedicated team is here to assist you.
          Whether you have questions, feedback, or need technical assistance,
          feel free to reach out. Your satisfaction is our priority.
        </p>

        <div className=" h-[2px] bg-gray-600 mt-8"></div>
      </div>

      {/* Middle Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">San Francisco</h3>

        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-pink-500 mt-1"
            />
            <div>
              <p>123 Tech Boulevard</p>
              <p>San Francisco, CA 94105 - United States</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-pink-500" />
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-pink-500" />
            <p>hello@designsummit.com</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default FormLeft;
