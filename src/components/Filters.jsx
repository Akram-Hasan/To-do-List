import React from "react";

export default function Filters({ filter, setFilter }) {
  const filters = ["All", "Completed", "Pending"];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-full text-white font-semibold ${
            filter === f
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
          } transition`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
