import React from "react";
import { useField } from "formik";

function CustomInput({ name, type = "text", placeholder, className, format }) {
  const [field, meta, helpers] = useField(name);
  const formatMobilePK = (value) => {
    let raw = value.replace(/\D/g, "");

    let formatted = "";
    if (raw.length > 0) formatted = "+" + raw.slice(0, 2); // +92
    if (raw.length > 2) formatted += "-" + raw.slice(2, 5); // +92-330
    if (raw.length > 5) formatted += "-" + raw.slice(5, 12); // +92-330-1234567

    return formatted;
  };

  const formatTelephone = (value) => {
    let raw = value.replace(/\D/g, "");

    let formatted = "";
    if (raw.length > 0) formatted = "+" + raw.slice(0, 2); // +42
    if (raw.length > 2) formatted += "-" + raw.slice(2, 10); // +42-35967321

    return formatted;
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (format === "mobile") {
      helpers.setValue(formatMobilePK(inputValue));
      return;
    }

    if (format === "telephone") {
      helpers.setValue(formatTelephone(inputValue));
      return;
    }

    field.onChange(e);
  };
  return (
    <div>
      {meta.error && meta.touched && (
        <p className="text-red-500 text-sm mb-1">{meta.error}</p>
      )}

      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
    </div>
  );
}

export default CustomInput;
