"use client";
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const Button = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(5);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isDownloading) {
      setTimeout(() => {
        if (progress != 100) {
          setProgress(progress + 1);
        } else {
          setIsCompleted(true);

          const downloadLink = document.createElement("a");
          downloadLink.href = "/vercel.svg"; // Replace with the correct file path
          downloadLink.download = "vercel.svg"; // Specify the file name
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      }, 50);
    }
  }, [progress, isDownloading]);

  return (
    <>
      {!isDownloading ? (
        <div
          onClick={() => setIsDownloading(true)}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-all duration-150 rounded-full w-[300px] py-7 text-center"
        >
          <p className="text-2xl font-bold flex items-center justify-center gap-2">
            <FaDownload size={25} /> Download
          </p>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-full h-[20px] w-[300px] p-[2px] overflow-hidden">
            <div
              className="bar-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full h-full transition-all duration-200"
              style={{
                width: `${progress}%`,
              }}
            >
              <p className="text-[10px] text-center">
                {!isCompleted ? `${progress}%` : "Download Completed"}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Button;
