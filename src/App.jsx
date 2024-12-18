import React, { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Filters from "./components/Filters";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const updatedTodos = [...todos, { id: Date.now(), text: newTodo, completed: false }];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Heading at the top */}
      <Header />
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="w-full max-w-3xl p-6">
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Add a new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-grow p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
          <Filters filter={filter} setFilter={setFilter} />
          <div className="space-y-3">
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 font-medium text-white">
      Developed by 🧑‍💻 <span className=" font-semibold text-[#00ff62]">Akram Hasan</span>
      </p>
    </div>
  );
}
