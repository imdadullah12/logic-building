import React from "react";
import {
  MdOutlineCalculate,
  MdHistory,
  MdOutlineMoreVert,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-end gap-3">
      <MdOutlineCalculate size={30} />
      <MdHistory size={30} />
      <MdOutlineMoreVert size={30} />
    </div>
  );
};

export default Header;
