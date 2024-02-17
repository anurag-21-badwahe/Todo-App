import React from "react";

export const Navbar = ({darkMode}) => {

  return (
    <>
      <div className="container mx-auto w-full">
        <div className={` min-h-20 flex items-center justify-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-violet-300'}`}>
        <h1 className="font-protest-riot text-lg transition-transform hover:scale-110">Todo App</h1>
        </div>
      </div>
    </>
  );
};
