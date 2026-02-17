import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const FormRight = () => {
  const initialValues = {
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
    <div className="w-full flex justify-center px-4 md:px-0 ">
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
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* EMAIL */}
              <div>
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm mb-1">{errors.email}</p>
                )}
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                />
              </div>

              {/* FIRST + LAST NAME */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  {errors.firstName && touched.firstName && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.firstName}
                    </p>
                  )}
                  <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="First Name"
                    className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                  />
                </div>

                <div className="w-full">
                  {errors.lastName && touched.lastName && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.lastName}
                    </p>
                  )}

                  <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                  />
                </div>
              </div>

              {/* COMPANY */}
              <div>
                {errors.company && touched.company && (
                  <p className="text-red-500 text-sm mb-1">{errors.company}</p>
                )}

                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Company / Organization"
                  className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                />
              </div>

              {/* DEPARTMENT */}
              <div>
                {errors.department && touched.department && (
                  <p className="text-red-500 text-sm mb-1">
                    {errors.department}
                  </p>
                )}

                <select
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
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

              {/* MOBILE + PHONE */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  {errors.mobile && touched.mobile && (
                    <p className="text-red-500 text-sm mb-1">{errors.mobile}</p>
                  )}

                  <input
                    type="text"
                    name="mobile"
                    value={values.mobile}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/\D/g, "");

                      let formatted = "";

                      if (raw.length > 0) {
                        formatted = "+" + raw.slice(0, 2);
                      }

                      if (raw.length > 2) {
                        formatted += "-" + raw.slice(2, 5);
                      }

                      if (raw.length > 5) {
                        formatted += "-" + raw.slice(5, 12);
                      }

                      setFieldValue("mobile", formatted);
                    }}
                    placeholder="Mobile"
                    className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                  />
                </div>

                <div className="w-full">
                  {errors.phone && touched.phone && (
                    <p className="text-red-500 text-sm mb-1">{errors.phone}</p>
                  )}

                  <input
                    type="text"
                    name="phone"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/\D/g, "");

                      let formatted = "";

                      if (raw.length > 0) {
                        formatted = "+" + raw.slice(0, 2);
                      }

                      if (raw.length > 2) {
                        formatted += "-" + raw.slice(2, 10);
                      }

                      setFieldValue("phone", formatted);
                    }}
                    placeholder="Telephone"
                    className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                  />
                </div>
              </div>

              {/* CHECKBOXES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-100 font-semibold mb-2 text-lg">
                    Profession (Select up to 2)
                  </p>

                  {errors.profession && touched.profession && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.profession}
                    </p>
                  )}

                  <div className="space-y-2 ">
                    {["Student", "Intern", "Working", "Unemployed"].map(
                      (item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2 text-white"
                        >
                          <input
                            type="checkbox"
                            name="profession"
                            value={item}
                            checked={values.profession.includes(item)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="accent-blue-500"
                          />
                          {item}
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-blue-100 font-semibold mb-2 text-lg">
                    Interested Role (Select up to 2)
                  </p>

                  {errors.role && touched.role && (
                    <p className="text-red-500 text-sm mb-1">{errors.role}</p>
                  )}

                  <div className="space-y-2 ">
                    {["Intern", "Front-end", "Backend", "Full-stack"].map(
                      (item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2 text-white"
                        >
                          <input
                            type="checkbox"
                            name="role"
                            value={item}
                            checked={values.role.includes(item)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="accent-blue-500"
                          />
                          {item}
                        </label>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* RADIOS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-100 font-semibold mb-2 text-lg">
                    Graduation Season
                  </p>
                  {errors.graduationSeason && touched.graduationSeason && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.graduationSeason}
                    </p>
                  )}
                  <div className="space-y-2">
                    {["Spring", "Fall", "Graduated"].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-white"
                      >
                        <input
                          type="radio"
                          name="graduationSeason"
                          value={item}
                          checked={values.graduationSeason === item}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="accent-blue-500"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-blue-100 font-semibold mb-2 text-lg">
                    Flexibility
                  </p>
                  {errors.flexibility && touched.flexibility && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.flexibility}
                    </p>
                  )}

                  <div className="space-y-2">
                    {["Remote", "On-site", "Hybrid"].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-white"
                      >
                        <input
                          type="radio"
                          name="flexibility"
                          value={item}
                          checked={values.flexibility === item}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="accent-blue-500"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Would you like to leave a message?"
                rows={3}
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />

              {/* BUTTON */}
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
