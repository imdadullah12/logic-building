"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageValidation = () => {
  const [image, setImage] = useState(null);
  const [isValidated, setIsValidated] = useState(null);

  const handleValidate = (e) => {
    setImage(e.target.files[0]);

    const bytes = e.target.files[0].size;
    const kb = Math.floor(bytes / 1000);

    if (kb > 300) {
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center px-3">
      <div className="w-[500px] bg-[#6c6c6c86] rounded-2xl p-5 py-8">
        <h1 className="text-3xl text-center mb-4">Image Validation</h1>
        <label htmlFor="" className="text-lg mb-2 block">
          Select an image of size of maximum 300kb
        </label>
        <input
          type="file"
          onChange={(e) => {
            handleValidate(e);
          }}
          className="w-full py-4 px-3 text-white bg-zinc-600 rounded-xl"
          accept="image/*"
        />

        <div className="flex justify-between">
          <label className="text-lg my-2 block">Preview</label>
          {image && (
            <button
              className="text-lg my-2 block"
              onClick={() => {
                setImage(null);
              }}
            >
              Remove Image
            </button>
          )}
        </div>
        <div className="p-3 border rounded-xl aspect-video flex items-center justify-center border-white">
          {image ? (
            <Image
              src={URL.createObjectURL(image)}
              width={300}
              height={400}
              alt="Image"
              className="w-full h-full object-contain"
            />
          ) : (
            <p>No image is selected</p>
          )}
        </div>
        {isValidated == false ? (
          <div className="bg-red-500 mt-3 px-3 text-white text-center rounded-xl py-2">
            <p>Your selected image is greater than 300 KB</p>
          </div>
        ) : (
          <button className="px-6 py-2 bg-zinc-500 mt-3 rounded-xl float-right">
            Upload Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageValidation;
