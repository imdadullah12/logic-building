import { stringify } from "postcss";
import React, { useState } from "react";

const UploadForm = ({ refresh, setRefresh }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("destination", "secret");
    formData.append("validation", ["jpg", "png", "pdf"]);
    const request = await fetch(
      "http://localhost/php-crud-rest-api/file-upload.php",
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await request.json();
    const request2 = await fetch(
      "http://localhost/php-crud-rest-api/create.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: "secret",
          validation: [
            {
              title: "required",
              image: "required",
            },
          ],
          data: [
            {
              title: title,
              image: result.file,
            },
          ],
        }),
      }
    );
    const result2 = await request2.json();
    setRefresh(!refresh);
    console.log(result2);
  };
  return (
    <div className="w-full p-5 rounded-2xl bg-slate-800">
      <h1 className="mb-1 text-xl text-center font-black">Upload your Image</h1>
      <label htmlFor="" className="mb-2 block">
        Title
      </label>
      <input
        type="text"
        className="px-4 py-3 rounded-2xl block w-full bg-slate-600"
        placeholder="Type your title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="" className="my-2 block">
        File
      </label>
      <input
        type="file"
        className="px-4 py-3 rounded-2xl block w-full bg-slate-600"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        className="px-4 py-3 mt-4 hover:bg-slate-700 transition-all duration-150 rounded-2xl block w-full bg-slate-600"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadForm;
