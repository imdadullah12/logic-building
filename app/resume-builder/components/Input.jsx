import React from "react";

const Input = ({ label, placeholder, type, onChange }) => {
  return (
    <div className="items">
      <label htmlFor="" className="block mb-1">
        {label}
      </label>
      <input
        type={type}
        className="block w-full px-3 py-3 bg-zinc-700 outline-none rounded-lg"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
