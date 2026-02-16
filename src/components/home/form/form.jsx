import React, { useState, useEffect } from "react";
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
    message: "Hello, I am writing this message to consider...",
    profession: ["Student"],
    role: ["Intern"],
    graduationSeason: "Spring",
    flexibility: "Remote",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    console.log("Updated field:", formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Required text fields
    if (!formData.email.trim()) {
      newErrors.email = "Email is mandatory";
    } else if (!formData.email.includes("@gmail.com")) {
      newErrors.email = "Email must contain @gmail.com";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is mandatory";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is mandatory";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is mandatory";
    }

    if (!formData.department) {
      newErrors.department = "Department is mandatory";
    }

    if (!formData.mobile || formData.mobile.length < 14) {
      newErrors.mobile = "Mobile number is mandatory";
    }

    if (!formData.phone || formData.phone.length < 12) {
      newErrors.phone = "Phone number is mandatory";
    }

    if (formData.profession.length === 0) {
      newErrors.profession = "Select at least one profession";
    }

    if (formData.role.length === 0) {
      newErrors.role = "Select at least one role";
    }

    if (!formData.graduationSeason) {
      newErrors.graduationSeason = "Select graduation season";
    }

    if (!formData.flexibility) {
      newErrors.flexibility = "Select flexibility option";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
      alert("Form has been submitted successfully");
      console.log(formData);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "mobile") {
      let digits = value.replace(/\D/g, "");

      if (digits.startsWith("92")) {
        digits = digits.slice(2);
      }

      digits = digits.slice(0, 10);

      let formatted = "+92";

      if (digits.length > 0) {
        formatted += "-" + digits.slice(0, 3);
      }

      if (digits.length > 3) {
        formatted += "-" + digits.slice(3);
      }

      setFormData((prev) => ({
        ...prev,
        mobile: formatted,
      }));

      return;
    }

    // PHONE
    if (name === "phone") {
      let digits = value.replace(/\D/g, "");

      // remove 42 if user types it manually
      if (digits.startsWith("42")) {
        digits = digits.slice(2);
      }

      // allow only 8 digits
      digits = digits.slice(0, 8);

      const formatted = "+42-" + digits;

      setFormData((prev) => ({
        ...prev,
        phone: formatted,
      }));

      return;
    }

    if (type === "checkbox") {
      if (name === "profession" || name === "role") {
        setFormData((prev) => {
          const currentArray = prev[name];

          const updatedArray = checked
            ? [...currentArray, value]
            : currentArray.filter((item) => item !== value);

          // Max 2 rule
          if (updatedArray.length > 2) return prev;

          return {
            ...prev,
            [name]: updatedArray,
          };
        });
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Form;
