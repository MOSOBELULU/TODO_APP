import { useState } from "react";

export default function TodoPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      if (editingTaskIndex !== null) {
        const updatedTasks = tasks.map((t, index) =>
          index === editingTaskIndex ? { ...t, text: task } : t
        );
        setTasks(updatedTasks);
        setEditingTaskIndex(null);
      } else {
        setTasks([...tasks, { text: task, completed: false }]);
      }
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setTask(tasks[index].text);
    setEditingTaskIndex(index);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>
        <div className="relative inline-block text-left mb-4">
          <div>
            <button
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Select option
            </button>
          </div>
          {isDropdownOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownMenu"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <div
                  className="dropdownItem text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-blue-100"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Work
                </div>
                <div
                  className="dropdownItem text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Personal
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          onClick={handleAddTask}
        >
          {editingTaskIndex !== null ? "Update Task" : "Add Task"}
        </button>
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="border-b py-2 flex justify-between items-center"
            >
              <span
                className={`flex-grow ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
              <div className="flex space-x-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  onClick={() => handleCompleteTask(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  onClick={() => handleEditTask(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
