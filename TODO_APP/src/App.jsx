import Register from '../src/componets/Authentication/Register'
import NavBar from "./componets/Layout/NavBar";
import "./App.css";
import TodoPage from "./componets/TodoPage";
import { Routes, Route } from "react-router-dom";
import Login from "./componets/Authentication/Login";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
     <Routes>
      <Route path="/register" element={ <Register />} />
     </Routes>
      <NavBar />
      <TodoPage/>
    </>
  );
}

export default App;
