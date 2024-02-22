import React from "react";

const ResumeRight = ({ data }) => {
  return (
    <div className="right w-[75%] h-full">
      <div className="px-10 py-[80px] h-[380px]">
        <h1 className="font-bold text-8xl">
          {data.personalInfo.name.split(" ")[0]}{" "}
          <span className="text-8xl font-normal">
            {data.personalInfo.name.split(" ")[1]}
          </span>
        </h1>
        <p className="text-[19px]" style={{ textAlign: "justify" }}>
          {data.personalInfo.aboutYourself}
        </p>
      </div>
      <div className="px-10">
        <h1 className=" font-bold text-3xl  text-black">Experience</h1>
        <div className="border-b border-1 border-black mt-2"></div>
      </div>
      {Object.keys(data.workExperience).map((level) => {
        console.log(data.workExperience[level]);
        return (
          <div className="border-left mt-5 px-10 py-6 border-black flex gap-8 ">
            <div className="border-left border-2 border-black relative">
              <div className="h-4 w-4 border-[3px] border-black rounded-full absolute left-[-8px] top-[-14px]"></div>
            </div>

            <div>
              <p className="font-bold mb-1">
                {data.workExperience[level]["startDate"]} |{" "}
                {data.workExperience[level]["endDate"]}
              </p>
              <p>{data.workExperience[level]["companyName"]}</p>
              <p className="font-bold my-1">
                {data.workExperience[level]["designation"]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeRight;
