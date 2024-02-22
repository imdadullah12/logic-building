"use client";
import React, { useEffect, useRef, useState } from "react";
import { TbReload } from "react-icons/tb";
import { toast } from "react-toastify";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const inputRef = useRef(null);

  const createCaptcha = () => {
    const randomText = (Math.random() * 99999).toString(36).substring(7);
    setCaptchaText(randomText);
    setCaptcha("");
    setTimeout(() => {
      inputRef.current.focus();
    }, 500);
  };

  const handleSubmit = () => {
    if (captchaText === captcha) {
      toast.success("Login Successful");
    } else {
      toast.error("Invalid Captcha");
    }
  };

  useEffect(() => {
    createCaptcha();
  }, []);

  return (
    <div className="w-screen h-screen bg-zinc-800 flex justify-center items-center">
      <div className="w-[400px] bg-zinc-700 rounded-2xl p-4">
        <h1 className="text-center text-2xl font-bold mb-4">
          Login your account
        </h1>
        <div className="mb-2">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 rounded-lg bg-zinc-800"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded-lg bg-zinc-800"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <hr className="mb-2 opacity-50" />
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <label className="block mb-1">Fill the captcha</label>
            <button
              className="mb-2 focus:rotate-[180deg] transition-all duration-500"
              onClick={createCaptcha}
            >
              <TbReload size={20} />
            </button>
          </div>
          <div className="w-full captcha-field flex justify-center text-center select-none text-2xl tracking-[20px] px-3 py-2 mb-2 rounded-lg bg-zinc-800">
            {captchaText.split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Enter captcha"
            className="w-full px-3 py-2 rounded-lg bg-zinc-800"
            onChange={(e) => setCaptcha(e.target.value)}
            value={captcha}
            ref={inputRef}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-zinc-600 py-2 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Form;
