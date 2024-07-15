import LogIn from "./componets/Authentication/Login";
import NavBar from "./componets/Layout/NavBar";
import "./App.css";
import TodoPage from "./componets/TodoPage";

function App() {
  return (
    <>
      <Auth />
      <NavBar />
      <TodoPage/>
    </>
  );
}

export default App;
