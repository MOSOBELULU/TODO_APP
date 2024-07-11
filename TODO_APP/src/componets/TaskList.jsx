// import { useState, useEffect } from 'react';

// export default function TaskList() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     // Fetch all tasks from JSONPlaceholder API when the component mounts
//     fetch('https://tasks.googleapis.com')
//       .then(response => response.json())
//       .then(data => {
//         console.log('All tasks:', data); // Log all tasks to the console
//         setTasks(data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="mt-4">
//       <h2 className="text-lg font-semibold mb-2">All Tasks:</h2>
//       {tasks.length > 0 ? (
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id} className="mb-2">
//               <p>Title: {task.title}</p>
//               <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No tasks found.</p>
//       )}
//     </div>
//   );
// }
