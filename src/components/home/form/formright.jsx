import React from "react";

const FormRight = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <>
      <div className="w-full flex justify-center px-4 md:px-0 ">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl md:text-4xl text-blue-100 font-bold my-6 text-center md:text-left">
            Send Us a Message
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* EMAIL */}
            <div>
              {errors.email && (
                <p className="text-red-500 text-sm mb-1">{errors.email}</p>
              )}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />
            </div>

            {/* FIRST + LAST NAME */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                {errors.firstName && (
                  <p className="text-red-500 text-sm mb-1">
                    {errors.firstName}
                  </p>
                )}
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                />
              </div>

              <div className="w-full">
                {errors.lastName && (
                  <p className="text-red-500 text-sm mb-1">{errors.lastName}</p>
                )}
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                />
              </div>
            </div>

            {/* COMPANY */}
            <div>
              {errors.company && (
                <p className="text-red-500 text-sm mb-1">{errors.company}</p>
              )}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Organization"
                className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
              />
            </div>

            {/* DEPARTMENT */}
            <div>
              {errors.department && (
                <p className="text-red-500 text-sm mb-1">{errors.department}</p>
              )}
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
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
                {errors.mobile && (
                  <p className="text-red-500 text-sm mb-1">{errors.mobile}</p>
                )}
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="w-full px-4 py-2 border-2 border-black rounded-md bg-blue-100"
                />
              </div>

              <div className="w-full">
                {errors.phone && (
                  <p className="text-red-500 text-sm mb-1">{errors.phone}</p>
                )}
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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

                {errors.profession && (
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
                          checked={formData.profession.includes(item)}
                          onChange={handleChange}
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

                {errors.role && (
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
                          checked={formData.role.includes(item)}
                          onChange={handleChange}
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
                        checked={formData.graduationSeason === item}
                        onChange={handleChange}
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
                        checked={formData.flexibility === item}
                        onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
        </div>
      </div>
    </>
  );
};

export default FormRight;
