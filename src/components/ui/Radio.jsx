import React from "react";
import { useField } from "formik";

function Radio({ name, options, containerClass, inputClass, labelClass }) {
  const [field, meta, helpers] = useField(name);

  return (
    <div className={containerClass}>
      {meta.error && meta.touched && (
        <p className="text-red-500 text-sm mb-1">{meta.error}</p>
      )}

      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className={labelClass}>
            <input
              type="radio"
              name={field.name}
              value={option}
              checked={field.value === option}
              onChange={() => helpers.setValue(option)}
              className={inputClass}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Radio;
