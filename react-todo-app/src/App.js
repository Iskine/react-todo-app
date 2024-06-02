import "./App.css";
import Logo from "./components/Logo";
import Box from "./components/Box";
import AddTasks from "./components/task/AddTasks";
// import Tasks from "./components/task/Tasks";

function App() {
  return (
    <>
      <Logo />
      <Box />
      <AddTasks />
      {/* <Tasks /> */}
    </>
  );
}

export default App;
