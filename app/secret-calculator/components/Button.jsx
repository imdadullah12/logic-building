import React from "react";
import { MdOutlineBackspace } from "react-icons/md";

const Button = ({
  text,
  color,
  bg,
  input,
  setInput,
  validated,
  setValidated,
}) => {
  return (
    <div
      className="flex items-center justify-center h-[80px] w-[80px] bg-[#2b2f39] rounded-2xl border-b-2 border-t-2 border-t-[#66686f] border-b-[#000] active:scale-95 select-none"
      style={{
        backgroundColor: bg ?? "#2b2f39",
        color: color ?? "#fff",
      }}
      onClick={() => {
        if (text == "Backspace") {
          setInput(input.toString().slice(0, -1));
        } else if (text == "C" || text == "AC") {
          setInput("");
        } else if (text == "X") {
          setInput(input + "*");
        } else if (text == "=") {
          //Check the equation or secret key
          const secretKey = localStorage.getItem("secret_key");
          if (secretKey == input) {
            setValidated(true);
          }
          setInput(eval(input));
        } else {
          setInput(input + text);
        }
      }}
    >
      <p className="text-4xl">
        {text == "Backspace" ? <MdOutlineBackspace /> : text}
      </p>
    </div>
  );
};

export default Button;
