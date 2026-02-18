import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import CustomInput from "../../ui/CustomInput";
import Checkbox from "../../ui/Checkbox";
import Radio from "../../ui/Radio";
import Button from "../../ui/Button";

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
    profession: [],
    role: [],
    graduationSeason: "",
    flexibility: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is mandatory")
      .email("Invalid email format"),

    firstName: Yup.string().required("First name is mandatory"),
    lastName: Yup.string().required("Last name is mandatory"),
    company: Yup.string().required("Company is mandatory"),

    mobile: Yup.string().required("Mobile number is mandatory"),
    phone: Yup.string().required("Phone number is mandatory"),

    profession: Yup.array()
      .min(1, "Select at least one profession")
      .max(2, "You can select up to 2 professions"),

    role: Yup.array()
      .min(1, "Select at least one role")
      .max(2, "You can select up to 2 roles"),

    graduationSeason: Yup.string().required("Select graduation season"),
    flexibility: Yup.string().required("Select flexibility option"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Form submitted successfully");
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <CustomInput
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />

          <CustomInput
            name="firstName"
            placeholder="First Name"
            className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />

          <CustomInput
            name="lastName"
            placeholder="Last Name"
            className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />

          <CustomInput
            name="company"
            placeholder="Company / Organization"
            className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />

          <CustomInput
            name="mobile"
            format="mobile"
            placeholder="Mobile"
            className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />

          <CustomInput
            name="phone"
            format="telephone"
            placeholder="Telephone"
            className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-100 font-semibold mb-2 text-lg">
                Profession (Select up to 2)
              </p>

              <Checkbox
                name="profession"
                options={["Student", "Intern", "Working", "Unemployed"]}
                containerClass=""
                labelClass="flex items-center gap-2 text-white"
                inputClass="accent-blue-500"
              />
            </div>

            <div>
              <p className="text-blue-100 font-semibold mb-2 text-lg">
                Interested Role (Select up to 2)
              </p>

              <Checkbox
                name="role"
                options={["Intern", "Front-end", "Backend", "Full-stack"]}
                labelClass="flex items-center gap-2 text-white"
                inputClass="accent-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Graduation Season */}
            <div>
              <p className="text-blue-100 font-semibold mb-2 text-lg">
                Graduation Season
              </p>

              <Radio
                name="graduationSeason"
                options={["Spring", "Fall", "Graduated"]}
                labelClass="flex items-center gap-2 text-white"
                inputClass="accent-blue-500"
              />
            </div>

            {/* Flexibility */}
            <div>
              <p className="text-blue-100 font-semibold mb-2 text-lg">
                Flexibility
              </p>

              <Radio
                name="flexibility"
                options={["Remote", "On-site", "Hybrid"]}
                labelClass="flex items-center gap-2 text-white"
                inputClass="accent-blue-500"
              />
            </div>
          </div>

          <Button
            text="Submit"
            loading={isSubmitting}
            className="bg-blue-600 text-white rounded-full px-6 py-2 font-bold hover:bg-blue-500 transition-all disabled:opacity-50"
          />
        </form>
      )}
    </Formik>
  );
};

export default FormRight;
