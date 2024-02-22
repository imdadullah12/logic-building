import React from "react";

const Canvas = ({ setCanvasData, canvasData }) => {
  console.log(canvasData);
  return (
    <div className="flex-1 p-3">
      <div
        className="rounded-2xl w-full md:w-[600px] relative h-full md:h-[600px] aspect-square flex flex-col p-10 justify-center items-center"
        style={{
          backgroundColor: canvasData.color ?? "red",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backdropFilter: "blur(10px)",
          backgroundImage:
            canvasData.background &&
            `url(${URL.createObjectURL(canvasData.background)})`,
        }}
      >
        <h1 className="text-[50px] font-bold text-center z-[99]">
          {canvasData.quote ?? "If it works, Don't touch it"}
        </h1>
        <h2 className="text-center">~{canvasData.author ?? "Imdadullah"}</h2>
      </div>
    </div>
  );
};

export default Canvas;
