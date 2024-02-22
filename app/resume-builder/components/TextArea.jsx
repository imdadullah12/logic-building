import clsx from "clsx";
import React from "react";

const TextArea = ({ label, placeholder, className, size, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor="" className="block mb-1">
        {label}
      </label>
      <textarea
        className={clsx(
          "block w-full px-3 py-3 bg-zinc-700 outline-none rounded-lg",
          size
        )}
        rows={3}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
