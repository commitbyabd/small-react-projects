import React from "react";
import  { mycolor } from "./formValues";

const FormRight = ({ formData, handleChange, handleSubmit }) => {
  // console.log(mycolor);

  return (
    <div>
      <h1 className="text-4xl text-pink-500 font-bold my-4">
        Send Us a Message
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-[80%] px-4 py-2 border-2 border-black rounded-md bg-white"
          />
        </div>
        <div className="flex gap-21">
          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[35%] px-4 py-2 mt-3 border-2 border-black rounded-md  bg-white"
          />
          <input
            type="text"
            placeholder="LastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-[35%] px-4 py-2 border-2 border-black rounded-md  bg-white mt-3"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company/Organization"
            name="company"
            value={formData.company}
            onChange={handleChange}style={{
            textOverflow: "ellipsis",
            overflow:"hidden"
          }}
            className="w-[80%] px-4 py-2 border-2 border-black rounded-md bg-white mt-3"
          />
        </div>
        <div>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-[80%] px-4 py-2 border-2 border-black rounded-md bg-white mt-3"
          >
            <option>Computer Science</option>
            <option>Machine Learning</option>
            <option>Artificial Intelligence</option>
            <option>Data Science</option>
            <option>Fintech</option>
            <option>Human Resources</option>
            <option>OnBoarding And training</option>
          </select>
        </div>

        <div className="flex gap-21">
          <input
            type="number"
            placeholder="Mobile phone (optional)"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-[35%] px-4 py-2 border-2 border-black rounded-md bg-white mt-3"
          />
          <input
            type="number"
            placeholder="Phone (optional)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-[35%] px-4 py-2 border-2 border-black rounded-md bg-white mt-3"
          />
        </div>

        <div>
          <textarea
            placeholder="Would you like to leave a message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          style={{
            textOverflow: "ellipsis"
          }}
            rows={3}
            className="w-[80%] min-h-15 px-4 py-2 border-2 border-black rounded-md bg-white mt-3"
          ></textarea>
        </div>

        <button
          className="bg-black text-white rounded-4xl w-[15%] h-10 font-bold mt-6 hover:bg-pink-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRight;
