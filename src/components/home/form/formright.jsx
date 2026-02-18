import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../ui/CustomInput";

const FormRight = () => {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    department: "Human Resources",
    mobile: "+92-",
    phone: "+42-",
    message: "",
    profession: ["Student"],
    role: ["Intern"],
    graduationSeason: "Spring",
    flexibility: "Remote",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .required("Email is mandatory")
      .email("Invalid email format")
      .test(
        "is-gmail",
        "Email must contain @gmail.com",
        (value) => value && value.endsWith("@gmail.com"),
      ),

    firstName: Yup.string().trim().required("First name is mandatory"),
    lastName: Yup.string().trim().required("Last name is mandatory"),
    company: Yup.string().trim().required("Company is mandatory"),
    department: Yup.string().required("Department is mandatory"),

    mobile: Yup.string()
      .required("Mobile number is mandatory")
      .min(14, "Mobile number is mandatory"),

    phone: Yup.string()
      .required("Phone number is mandatory")
      .min(12, "Phone number is mandatory"),

    profession: Yup.array()
      .min(1, "Select at least one profession")
      .max(2, "You can select up to 2 professions")
      .required("Profession is required"),

    role: Yup.array()
      .min(1, "Select at least one role")
      .max(2, "You can select up to 2 roles")
      .required("Role is required"),

    graduationSeason: Yup.string().required("Select graduation season"),
    flexibility: Yup.string().required("Select flexibility option"),

    message: Yup.string(),
  });

  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl text-blue-100 font-bold my-6 text-center md:text-left">
          Send Us a Message
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            alert("Form submitted successfully");
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* EMAIL */}
              <CustomInput
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* FIRST NAME */}
              <CustomInput
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* LAST NAME */}
              <CustomInput
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* COMPANY */}
              <CustomInput
                name="company"
                type="text"
                placeholder="Company / Organization"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* MOBILE */}
              <CustomInput
                name="mobile"
                type="text"
                placeholder="Mobile"
                format="mobile"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* TELEPHONE */}
              <CustomInput
                name="phone"
                type="text"
                placeholder="Telephone"
                format="telephone"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* MESSAGE */}
              <CustomInput
                name="message"
                type="text"
                placeholder="Would you like to leave a message?"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-full px-6 py-2 font-bold hover:bg-blue-500 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormRight;
