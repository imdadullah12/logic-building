import React, { useState } from "react";
import UploadForm from "./UploadForm";
import Items from "./Items";

const Secret = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="flex flex-col md:flex-row-reverse items-start justify-between">
      <div className="right w-full md:w-[500px] p-3">
        <UploadForm refresh={refresh} setRefresh={setRefresh} />
      </div>
      <div className="left p-3 flex-1">
        <Items refresh={refresh} setRefresh={setRefresh} />
      </div>
    </div>
  );
};

export default Secret;
