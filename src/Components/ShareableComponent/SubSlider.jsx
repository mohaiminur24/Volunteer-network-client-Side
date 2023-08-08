import React from "react";

const SubSlider = () => {
  return (
    <div>
        <h1 className="text-3xl mb-5 text-center font-inter font-bold">Instragram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
        <img
        className="w-full h-38"
          src="https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
        className="w-full h-38"
          src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
        className="w-full h-38"
          src="https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
        className="w-full h-38"
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
        className="w-full h-38"
          src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default SubSlider;
