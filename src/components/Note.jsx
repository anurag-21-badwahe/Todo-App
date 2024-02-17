import React from "react";

export const Note = () => {
  return (
    <div className="w-96 min-h-96 bg-violet-50 mt-20 mx-auto rounded-md">
      <div className="flex justify-between mx-2 font-protest-riot">
        <span>Todo App</span>
        <button>
          <span className="material-symbols-outlined">light_mode</span>
        </button>
      </div>
      <div className="addtodo w-full mx-auto">
        <input
          type="text"
          className="w-64 mx-3 border-2 border-b-gray-950 rounded-md hover:cursor-pointer hover:border-black p-1"
        />
        <button className="bg-violet-300 w-16 rounded-md min-h-10 ml-6 hover:font-bold">
          Add
        </button>
      </div>
      <div className="flex justify-center font-bold font-sans">Your Todos</div>
      <div className="notes flex justify-between">
        <p className="w-8/12">Hello this is my todo</p>
        <div className="buttons w-20">
          <button className="mx-2" >
            <span className="material-symbols-outlined bg-violet-300 rounded-md hover:bg-violet- 500 hover:w-8">edit_note</span>
          </button>
          <button>
            <span className="material-symbols-outlined bg-red-600 rounded-md hover:bg-red-700 hover:w-8">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
