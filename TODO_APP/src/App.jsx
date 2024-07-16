import LogIn from "./componets/Authentication/Login";
import Register from '../src/componets/Authentication/Register'
import NavBar from "./componets/Layout/NavBar";
import "./App.css";
import TodoPage from "./componets/TodoPage";

function App() {
  return (
    <>
      <LogIn />
      <Register />
      <NavBar />
      <TodoPage/>
    </>
  );
}

export default App;
