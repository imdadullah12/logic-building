import React, { useState } from "react";

const Settings = ({ setCanvasData }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");
  const [background, setBackground] = useState("");
  const [watermark, setWatermark] = useState("");

  const handleChanges = (e) => {
    const canvasData = {
      quote,
      author,
      color,
      background,
      watermark,
    };
    setCanvasData(canvasData);
  };

  return (
    <div className="w-full md:w-[20%] space-y-2 min-h-screen bg-zinc-900 p-3">
      <h1 className="w-full font-bold text-xl text-center py-3 border-b">
        Pen Programmer
      </h1>
      <label htmlFor="" className="block">
        Quote
      </label>
      <textarea
        rows="4"
        className="w-full bg-zinc-800 rounded-lg p-2 text-xl"
        placeholder="Write Quote"
        onChange={(e) => setQuote(e.target.value)}
      >
        {quote}
      </textarea>
      <label htmlFor="" className="block">
        Author
      </label>
      <input
        type="text"
        className="w-full bg-zinc-800 rounded-lg p-2 text-md"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <label htmlFor="" className="block">
        Color
      </label>
      <input
        type="color"
        className="w-full bg-zinc-800 rounded-lg p-2 block h-14 text-md"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <label htmlFor="" className="block">
        Background
      </label>
      <input
        type="file"
        className="w-full bg-zinc-800 rounded-lg p-2 text-md"
        onChange={(e) => setBackground(e.target.files[0])}
      />
      <label htmlFor="" className="block">
        Watermark
      </label>
      <input
        type="file"
        className="w-full bg-zinc-800 rounded-lg p-2 text-md"
        onChange={(e) => setWatermark(e.target.files[0])}
      />
      <button
        onClick={handleChanges}
        className="w-full bg-zinc-800 rounded-lg p-2 text-md"
      >
        Generate Quote
      </button>
    </div>
  );
};

export default Settings;
