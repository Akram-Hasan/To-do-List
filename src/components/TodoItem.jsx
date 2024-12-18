import React, { useState } from "react";

export default function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim() !== "") {
      editTodo(todo.id, editedText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg shadow-md ${
        todo.completed
          ? "bg-green-800 text-green-400 line-through"
          : "bg-gray-800 text-white"
      } transition transform hover:scale-105`}
    >
      <div className="flex items-center gap-4 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-6 h-6 text-blue-500"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-grow p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleEdit}
          className={`px-3 py-2 rounded-lg text-white ${
            isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
          } transition`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
