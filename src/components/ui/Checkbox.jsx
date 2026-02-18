import React from "react";
import { useField } from "formik";

function Checkbox({ name, options, containerClass, inputClass, labelClass }) {
  const [field, meta, helpers] = useField(name);

  const handleChange = (value) => {
    const currentValues = field.value || [];

    if (currentValues.includes(value)) {
      helpers.setValue(currentValues.filter((item) => item !== value));
    } else {
      helpers.setValue([...currentValues, value]);
    }
  };

  return (
    <div className={containerClass}>
      {meta.error && meta.touched && (
        <p className="text-red-500 text-sm mb-1">{meta.error}</p>
      )}

      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className={labelClass}>
            <input
              type="checkbox"
              checked={field.value.includes(option)}
              onChange={() => handleChange(option)}
              className={inputClass}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Checkbox;
