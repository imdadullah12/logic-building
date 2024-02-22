import Image from "next/image";
import React from "react";

const ResumeLeft = ({ data }) => {
  return (
    <div className="left w-[25%] bg-slate-700 ps-12 pb-[130px]">
      <div className="h-[300px] bg-slate-700 flex items-center justify-start">
        <div className="w-[200px] h-[200px] bg-blue-400 rounded-full flex justify-center items-center">
          <Image
            src={"/saidur.png"}
            height={150}
            width={150}
            alt="photo"
            className="w-[200px] h-[200px] rounded-full"
          />
        </div>
      </div>
      <div>
        <h1 className=" font-bold text-3xl  text-white">Contact</h1>
        <div className="border-b mt-2"></div>
        <div className="mt-5">
          <p className="font-bold text-lg text-white">Phone</p>
          <p className="text-white text-[12px]">{data.personalInfo.phone}</p>
        </div>
        <div className="mt-5">
          <p className="font-bold text-lg text-white">Email</p>
          <p className="text-white text-[12px]">{data.personalInfo.email}</p>
        </div>
        <div className="mt-5">
          <p className="font-bold text-lg text-white">Address</p>
          <p className="text-white text-[12px]">{data.personalInfo.address}</p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className=" font-bold text-3xl text-white">Education</h1>
        <div className="border-b mt-2"></div>
        {Object.keys(data.education).map((level) => {
          console.log(data.education[level]);
          return (
            <div className="mt-5">
              <p className="text-white">
                {data.education[level]["instituteName"]}
              </p>
              <p className="font-bold text-white">
                Percentage:{" "}
                {data.education[level]["percentage"] ??
                  data.education[level]["cgpa"] ??
                  "N/A"}
                {data.education[level]["percentage"] && "%"}
              </p>
              <p className="text-white">
                {data.education[level]["boardName"] ??
                  data.education[level]["courseName"]}{" "}
                | {data.education[level]["year"]}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-white font-bold">
        <h1 className="text-3xl ">Expertise</h1>
        <div className="border-b mt-2"></div>
        {data.skills.skills.split(", ").map((item, index) => (
          <li className="mt-4">{item}</li>
        ))}
      </div>
      <div className="mt-10 text-white font-bold">
        <h1 className="text-3xl ">Language</h1>
        <div className="border-b mt-2"></div>
        {data.languages.languages.split(", ").map((item, index) => (
          <p className="mt-4">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ResumeLeft;
