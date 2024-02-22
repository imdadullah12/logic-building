"use client";

import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Resume from "../resume/page";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [personalInfoForm, setPersonalInfoForm] = useState({
    name: "",
    co: "",
    email: "",
    phone: "",
    dob: "",
    profilePicture: null,
    address: "",
    aboutYourself: "",
  });

  // Educational Information
  const [educationForm, setEducationForm] = useState({
    hslc: {
      instituteName: "",
      percentage: "",
      year: "",
      boardName: "",
    },
    hs: {
      instituteName: "",
      percentage: "",
      year: "",
      boardName: "",
    },
    graduation: {
      instituteName: "",
      cgpa: "",
      year: "",
      university: "",
    },
    others: {
      instituteName: "",
      courseName: "",
      year: "",
    },
  });

  // Work Experience
  const [workExperienceForm, setWorkExperienceForm] = useState({
    0: {
      companyName: "",
      designation: "",
      startDate: "",
      endDate: "",
    },
    1: {
      companyName: "",
      designation: "",
      startDate: "",
      endDate: "",
    },
    2: {
      companyName: "",
      designation: "",
      startDate: "",
      endDate: "",
    },
    3: {
      companyName: "",
      designation: "",
      startDate: "",
      endDate: "",
    },
  });

  // Skills
  const [skillsForm, setSkillsForm] = useState({
    skills: "",
  });

  // Known Languages
  const [languagesForm, setLanguagesForm] = useState({
    languages: "",
  });

  const handleSubmit = () => {
    const resumeData = {
      personalInfo: personalInfoForm,
      education: educationForm,
      workExperience: workExperienceForm,
      skills: skillsForm,
      languages: languagesForm,
    };
    console.log(resumeData);
    setSubmittedData(resumeData);
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="space-y-4 p-4">
          <div className="w-full h-full bg-zinc-800 p-5 rounded-xl">
            <h1 className="text-2xl font-bold mb-3 block">
              Personal Information
            </h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your name"}
                label={"Your Name"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    name: e.target.value,
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your C/O"}
                label={"Your C/O"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    co: e.target.value,
                  })
                }
              />
              <Input
                type={"email"}
                placeholder={"Enter your email"}
                label={"Your Email"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type={"number"}
                placeholder={"Enter your phone"}
                label={"Your Phone"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    phone: e.target.value,
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"Enter your DOB"}
                label={"Your DOB"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    dob: e.target.value,
                  })
                }
              />
              {/* <Input
                type={"file"}
                label={"Your Profile Picture"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    profilePicture: e.target.files[0],
                  })
                }
              /> */}
              <TextArea
                placeholder={"Enter your address"}
                label={"Your Address"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    address: e.target.value,
                  })
                }
              />
              <TextArea
                placeholder={"About Yourself"}
                label={"About Yourself"}
                onChange={(e) =>
                  setPersonalInfoForm({
                    ...personalInfoForm,
                    aboutYourself: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="w-full h-full bg-zinc-800 p-5 rounded-xl">
            <h1 className="text-2xl font-bold mb-3 block">
              Educational Information
            </h1>
            <h2 className="text-lg font-bold mb-3">
              HSLC (Matriculation / 10<sup>th</sup>)
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your institute name"}
                label={"Institute Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hslc: {
                      ...educationForm.hslc,
                      instituteName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your percentage"}
                label={"Percentage"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hslc: { ...educationForm.hslc, percentage: e.target.value },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your passout year"}
                label={"Year"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hslc: { ...educationForm.hslc, year: e.target.value },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your board name"}
                label={"Board Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hslc: { ...educationForm.hslc, boardName: e.target.value },
                  })
                }
              />
            </div>
            <h2 className="text-lg font-bold my-3">
              HS (Higher Secondary / 12<sup>th</sup>)
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your institute name"}
                label={"Institute Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hs: { ...educationForm.hs, instituteName: e.target.value },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your percentage"}
                label={"Percentage"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hs: { ...educationForm.hs, percentage: e.target.value },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your passout year"}
                label={"Year"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hs: { ...educationForm.hs, year: e.target.value },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your board name"}
                label={"Board Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    hs: { ...educationForm.hs, boardName: e.target.value },
                  })
                }
              />
            </div>
            <h2 className="text-lg font-bold my-3">Graduation</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your institute name"}
                label={"Institute Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    graduation: {
                      ...educationForm.graduation,
                      instituteName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your CGPA"}
                label={"CGPA"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    graduation: {
                      ...educationForm.graduation,
                      cgpa: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your passout year"}
                label={"Year"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    graduation: {
                      ...educationForm.graduation,
                      year: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your university"}
                label={"University Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    graduation: {
                      ...educationForm.graduation,
                      boardName: e.target.value,
                    },
                  })
                }
              />
            </div>
            <h2 className="text-lg font-bold my-3">Others</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your institute name"}
                label={"Institute Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    others: {
                      ...educationForm.others,
                      instituteName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter course name"}
                label={"Course Name"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    others: {
                      ...educationForm.others,
                      courseName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your passout year"}
                label={"Year"}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    others: { ...educationForm.others, year: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <div className="w-full h-full bg-zinc-800 p-5 rounded-xl">
            <h1 className="text-2xl font-bold mb-3 block">Work Experience</h1>
            <div className="mb-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your company name"}
                label={"Company Name"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [0]: {
                      ...workExperienceForm[0],
                      companyName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your designation"}
                label={"Designation"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [0]: {
                      ...workExperienceForm[0],
                      designation: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"Start Date"}
                label={"Start Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [0]: {
                      ...workExperienceForm[0],
                      startDate: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"End Date"}
                label={"End Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [0]: {
                      ...workExperienceForm[0],
                      endDate: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="mb-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your company name"}
                label={"Company Name"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [1]: {
                      ...workExperienceForm[1],
                      companyName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your designation"}
                label={"Designation"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [1]: {
                      ...workExperienceForm[1],
                      designation: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"Start Date"}
                label={"Start Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [1]: {
                      ...workExperienceForm[1],
                      startDate: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"End Date"}
                label={"End Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [1]: {
                      ...workExperienceForm[1],
                      endDate: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="mb-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your company name"}
                label={"Company Name"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [2]: {
                      ...workExperienceForm[2],
                      companyName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your designation"}
                label={"Designation"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [2]: {
                      ...workExperienceForm[2],
                      designation: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"Start Date"}
                label={"Start Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [2]: {
                      ...workExperienceForm[2],
                      startDate: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"End Date"}
                label={"End Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [2]: {
                      ...workExperienceForm[2],
                      endDate: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="mb-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Input
                type={"text"}
                placeholder={"Enter your company name"}
                label={"Company Name"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [3]: {
                      ...workExperienceForm[3],
                      companyName: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"text"}
                placeholder={"Enter your designation"}
                label={"Designation"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [3]: {
                      ...workExperienceForm[3],
                      designation: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"Start Date"}
                label={"Start Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [3]: {
                      ...workExperienceForm[3],
                      startDate: e.target.value,
                    },
                  })
                }
              />
              <Input
                type={"date"}
                placeholder={"End Date"}
                label={"End Date"}
                onChange={(e) =>
                  setWorkExperienceForm({
                    ...workExperienceForm,
                    [3]: {
                      ...workExperienceForm[3],
                      endDate: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="w-full h-full bg-zinc-800 p-5 rounded-xl">
            <h1 className="text-2xl font-bold mb-3 block">Skills</h1>
            <div className="mb-3">
              <TextArea
                label={"Skills"}
                placeholder={"Enter your skills with comma separated"}
                size={"text-[20px]"}
                onChange={(e) =>
                  setSkillsForm({
                    ...skillsForm,
                    skills: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="w-full h-full bg-zinc-800 p-5 rounded-xl">
            <h1 className="text-2xl font-bold mb-3 block">Known Languages</h1>
            <div className="mb-3">
              <TextArea
                label={"Languages"}
                placeholder={"Enter your known languages with comma separated"}
                size={"text-[20px]"}
                onChange={(e) =>
                  setLanguagesForm({
                    ...languagesForm,
                    languages: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>
              Credit:{" "}
              <a
                href="https://penprogrammer.com"
                target="_blank"
                className="text-sky-500"
              >
                Pen Programmer
              </a>
            </p>
            <button
              className="px-6 py-3 bg-white rounded-lg text-black"
              onClick={handleSubmit}
            >
              Build Resume
            </button>
          </div>
        </div>
      ) : (
        <Resume data={submittedData} />
      )}
    </>
  );
};

export default Form;
