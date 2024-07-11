// import { useState } from 'react';
// import TaskList from './TaskList';

// export default function Tasks() {
//   const [taskInput, setTaskInput] = useState('');

//   const handleSearch = () => {
//     // Fetching data from JSONPlaceholder API based on the task input
//     fetch(`https://tasks.googleapis.com=${taskInput}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched tasks:', data); // Log fetched tasks to the console
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold mb-4">TODO</h1>
//       <textarea
//         className="w-full p-2 border rounded mb-4"
//         placeholder="Enter your task"
//         value={taskInput}
//         onChange={(e) => setTaskInput(e.target.value)}
//       ></textarea>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={handleSearch}
//       >
//         Search Task
//       </button>
//       <TaskList />
//     </>
//   );
// }
