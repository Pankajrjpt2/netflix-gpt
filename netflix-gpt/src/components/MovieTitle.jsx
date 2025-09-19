import React from "react";

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-54 px-16 absolute text-amber-50 bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold w-1/4">{title}</h1>
      <p className="pt-3 w-1/3">{overview}</p>
      <div className="flex w-1/6 justify-between pt-4 text-amber-50">
        <button className="p-3 px-7  bg-red-700 rounded">Play</button>
        <button className="p-3 px-7  bg-red-700 rounded">More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle;
