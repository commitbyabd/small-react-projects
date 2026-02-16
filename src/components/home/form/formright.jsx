import React from "react";

const FormRight = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1 className="text-4xl text-blue-100 font-bold my-4 ">
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
            className="w-[80%] px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />
        </div>
        <div className="flex gap-21">
          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[33%] px-4 py-2 mt-3 border-2 border-black rounded-md  bg-blue-100"
          />
          <input
            type="text"
            placeholder="LastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-[35%] px-4 py-2 border-2 border-black rounded-md  bg-blue-100 mt-3"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company/Organization"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            className="w-[80%] px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
          />
        </div>
        <div>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-[80%] px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
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
            placeholder="Mobile phone"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-[33%] px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
          />
          <input
            type="number"
            placeholder="TelePhone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-[35%] px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
          />
        </div>

        <div>
          <textarea
            placeholder="Would you like to leave a message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              textOverflow: "ellipsis",
            }}
            rows={3}
            className="w-[80%] min-h-15 px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
          ></textarea>
        </div>

        <button
          className="bg-blue-600 text-white rounded-4xl px-6 py-2 font-bold mt-6 
                     hover:bg-blue-500 hover:scale-105 hover:text-blue-200
                       transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRight;
