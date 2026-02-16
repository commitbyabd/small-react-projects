import React, { useState } from "react";
import FormLeft from "./formleft";
import FormRight from "./formright";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "Abdullah@gmail.com",
    firstName: "Muhammad",
    lastName: "Abdullah",
    company: "System Heuristics",
    department: "Human Resources",
    mobile: "+92-330-8477994",
    phone: "+42-35967321",
    message: "Hello, I am writing this message to consider",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:flex w-full  ">
      <div className="md:w-1/2 animate-slideDown">
        <FormLeft />
      </div>

      <div className="md:w-1/2 animate-fadeIn">
        <FormRight
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Form;
