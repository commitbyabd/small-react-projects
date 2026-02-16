import React from "react";

const FormRight = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <div>
      <h1 className="text-4xl text-blue-100 font-bold my-4 ">
        Send Us a Message
      </h1>
      <form onSubmit={handleSubmit}>
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
            className="w-[80%] px-4 py-2 border-2 border-black rounded-md bg-blue-100"
          />
        </div>
        <div className="flex gap-21">
          <div>
            {errors.firstName && (
              <p className="text-red-500 text-sm mb-1">{errors.firstName}</p>
            )}
            <input
              type="text"
              placeholder="FirstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-[105%] px-4 py-2 mt-3 border-2 border-black rounded-md bg-blue-100"
            />
          </div>

          <div>
            {errors.lastName && (
              <p className="text-red-500 text-sm mb-1">{errors.lastName}</p>
            )}
            <input
              type="text"
              placeholder="LastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-[110%] px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
            />
          </div>
        </div>

        <div>
          {errors.company && (
            <p className="text-red-500 text-sm mb-1">{errors.company}</p>
          )}

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
          {errors.department && (
            <p className="text-red-500 text-sm mb-1">{errors.department}</p>
          )}
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
          <div>
            {errors.mobile && (
              <p className="text-red-500 text-sm mb-1">{errors.mobile}</p>
            )}
            <input
              type="text"
              placeholder="Mobile phone"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-[105%] px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
            />
          </div>

          <div>
            {errors.phone && (
              <p className="text-red-500 text-sm mb-1">{errors.phone}</p>
            )}
            <input
              type="text"
              placeholder="Tele-Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-[110%] px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3"
            />
          </div>
        </div>

        <div className="flex">
          <div>
            <div className="mt-4">
              <p className="text-blue-100 font-semibold mb-2">
                Profession (Select up to 2)
              </p>

              <div className="space-y-2">
                {["Student", "Intern", "Working", "Unemployed"].map((item) => (
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
                ))}
              </div>
            </div>
          </div>

          <div className="mx-30">
            <div className="mt-4">
              <p className="text-blue-100 font-semibold mb-2">
                Intrested Role (Select up to 2)
              </p>

              <div className="space-y-2">
                {["Intern", "front-end", "Backend", "Full-stack"].map(
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
        </div>
        <div>
          <div className="flex">
            <div className="mt-6">
              <p className="text-blue-100 font-semibold mb-2">
                Graduation Season (Select only 1)
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
            <div className="mt-6 mx-17">
              <p className="text-blue-100 font-semibold mb-2">
                Flexibility (Select only 1)
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

          <textarea
            placeholder="Would you like to leave a message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-[80%] min-h-15 px-4 py-2 border-2 border-black rounded-md bg-blue-100 mt-3 "
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
