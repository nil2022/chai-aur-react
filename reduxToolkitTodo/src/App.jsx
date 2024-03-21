import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  

  return (
    <>
      <h1 className="text-3xl font-bold text-center items-center ">React Redux Toolkit Todo</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
