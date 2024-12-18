import React from "react";

export default function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg shadow-md ${
        todo.completed
          ? "bg-green-800 text-green-400 line-through"
          : "bg-gray-800 text-white"
      } transition transform hover:scale-105`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-6 h-6 text-blue-500"
        />
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </div>
  );
}
