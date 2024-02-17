import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const Note = ({ darkMode, setDarkMode }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const todoString = localStorage.getItem("todos");
      if (todoString) {
        const todos = JSON.parse(todoString);
        setTodos(todos);
      }
    } catch (error) {
      console.error("Error retrieving todos from localStorage:", error);
    }
  }, []);

  const saveToLocalStorage = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((item) => item.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit.todo);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
    }
  };

  const handleAdd = () => {
    if (todo.length > 3) {
      const updatedTodos = [
        ...todos,
        { id: uuidv4(), todo, isCompleted: false },
      ];
      setTodos(updatedTodos);
      setTodo("");
      saveToLocalStorage(updatedTodos);
    } else {
      alert("Todo must be more than 3 characters long");
    }
  };

  const handleCheckbox = (id, isCompleted) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`w-96 min-h-96 ${
        darkMode ? "bg-gray-700 text-white" : "bg-violet-50"
      } mt-20 mx-auto rounded-md`}
    >
      <div className="flex justify-between mx-2 font-protest-riot">
        <span>Todo App</span>
        <button onClick={handleDarkMode}>
          <span className="material-symbols-outlined">
            {darkMode ? "dark_mode" : "light_mode"}
          </span>
        </button>
      </div>
      <div className="addtodo w-full mx-auto">
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          className="w-64 mx-3 border-2 text-black border-violet-300 rounded-md hover:cursor-pointer hover:border-black p-1"
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
        {todos.map((item, index) => (
          <div
            className="flex justify-between border border-violet-500 rounded p-2 m-3"
            key={index}
          >
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => handleCheckbox(item.id, item.isCompleted)}
            />
            <div
              className={`ml-3 w-72 ${item.isCompleted ? "line-through" : ""}`}
            >
              {item.todo}
            </div>
            <div className="buttons w-20">
              <button className="mx-2" onClick={() => handleEdit(item.id)}>
                <span className="material-symbols-outlined bg-violet-300 rounded-md hover:bg-violet-500 ">
                  edit_note
                </span>
              </button>
              <button onClick={() => handleDelete(item.id)}>
                <span className="material-symbols-outlined bg-red-600 rounded-md hover:bg-red-700">
                  delete
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
