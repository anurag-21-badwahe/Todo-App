import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Note = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(item => item.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit.todo);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };
  

  const handleAdd = () => {
    if (todo.length > 3) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
    } else {
      alert("Todo must be size of more than 3 character");
    }
    // console.log(todos);
  };

  const handleCheckbox = (id, isCompleted) => {
    // console.log(id);
    // console.log(isCompleted);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    //it just exclude the item
  };

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
          onChange={handleChange}
          value={todo}
          className="w-64 mx-3 border-2 border-violet-300 rounded-md hover:cursor-pointer hover:border-black p-1"
        />
        <button
          className="bg-violet-300 w-16 rounded-md min-h-10 ml-6 hover:font-bold"
          onClick={handleAdd}
        >
          Save
        </button>
      </div>
      <div>
        <div className="text-center font-protest-riot">Your Todos</div>
        {todos.map((item, index) => {
          return (
            <div className="flex justify-between border border-violet-500 rounded p-2 m-3">
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleCheckbox(item.id, item.isCompleted)}
              />
              <div
                className={`ml-3 w-72 ${
                  item.isCompleted ? "line-through" : ""
                }`}
                key={index}
              >
                {item.todo}
              </div>
              <div className="buttons w-20">
                <button className="mx-2" onClick={() => handleEdit(item.id)}>
                  <span className="material-symbols-outlined bg-violet-300 rounded-md hover:bg-violet-500 ">
                    edit_note
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  <span className="material-symbols-outlined bg-red-600 rounded-md hover:bg-red-700">
                    delete
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
