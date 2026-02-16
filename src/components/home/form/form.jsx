import React, { useState } from "react";
import FormLeft from "./FormLeft";
import FormRight from "./FormRight";

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
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "interests") {
        setFormData((prev) => ({
          ...prev,
          interests: checked
            ? [...prev.interests, value]
            : prev.interests.filter((item) => item !== value),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="grid md:grid-cols-2 w-full min-h-screen">
      <div className=" animate-slideDown">
        <FormLeft />
      </div>

      <div className=" animate-fadeIn">
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
