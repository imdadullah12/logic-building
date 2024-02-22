"use client";

import React, { useState } from "react";

// const Task = () => {

//     const [name, setName] = useState("")
//     const [submit, setSubmit] = useState(false);

//     const handleSubmit = () => {
//         setSubmit(true)
//     }

//     return (
//         <div className='m-3'>
//             <input onChange={(e) => setName(e.target.value)} type="text" className='px-3 py-3 w-[300px] bg-zinc-700' placeholder='Your Name' />
//             <button className='px-3 py-3 w-[300px] bg-zinc-700 block mt-2' onClick={handleSubmit}>Submit</button>
//             {submit && <h1>{name}</h1>}
//         </div>
//     )
// }

// export default Task

const Task2 = () => {
  const [color, setColor] = useState("#000");
  const handleChange = () => {
    const colors = ["red", "blue", "green", "yellow", "pink", "skyblue"];
    const length = colors.length;
    const randomValue = Math.trunc(Math.random() * length);
    setColor(colors[randomValue]);
  };

  const handleReset = () => {
    setColor("#fff");
  };

  return (
    <div className="h-screen w-screen p-3" style={{ backgroundColor: color }}>
      <input type="text" />
      <button
        className="px-3 py-3 w-[300px] bg-zinc-700 block"
        onClick={handleChange}
      >
        Change Color
      </button>
      <button
        className="px-3 py-3 w-[300px] mt-2 bg-zinc-700 block"
        onClick={handleReset}
      >
        Reset Color
      </button>
    </div>
  );
};

export default Task2;
