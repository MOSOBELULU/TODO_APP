import  { useState } from 'react';

export default function TodoPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">TODO</h1>
      <textarea className="w-full p-2 border rounded mb-4" placeholder="Enter your task"></textarea>
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
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownMenu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className="py-1" role="none">
              <div className="dropdownItem text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-blue-100" role="menuitem" tabIndex="-1" onClick={() => setIsDropdownOpen(false)}>Work</div>
              <div className="dropdownItem text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabIndex="-1" onClick={() => setIsDropdownOpen(false)}>Personal</div>
            </div>
          </div>
        )}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Task</button>
    </>
  );
}
