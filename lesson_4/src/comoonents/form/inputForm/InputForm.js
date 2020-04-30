import React from "react";

export function InputForm({
  handleChange,
  value,
  options: { maxLength, minLength, name, placeholder, type },
}) {
  // console.log("input render");
  return (
    <input
      style={{ width: 400 }}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      value={value}
    />
  );
}
