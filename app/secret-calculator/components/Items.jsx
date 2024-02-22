import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Items = ({ refresh, setRefresh }) => {
  const [files, setFiles] = useState([]);

  const getData = async () => {
    const request = await fetch("http://localhost/php-crud-rest-api/read.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table: "secret",
        select: ["id", "title", "image"],
      }),
    });
    const result = await request.json();
    setFiles(result.data);
    console.log(result);
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className="bg-slate-800 grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 p-5 rounded-2xl gap-4">
      {files.map((item, index) => (
        <div className="p-4 rounded-2xl bg-slate-700" key={index}>
          <Image
            src={"http://localhost/php-crud-rest-api/" + item.image}
            className="w-full h-[300px] object-contain"
            width={300}
            height={300}
            alt="Something"
          />
          <div className="flex mt-5 items-center justify-between">
            <h2 className="text-xl">{item.title}</h2>
            <FaTrash size={25} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
