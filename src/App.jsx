import "./components/todo/todo.css";
import ToDoNew from "./components/todo/TodoNew";
import TodoStuff from "./components/todo/TodoStuff";
import reactLogo from "./assets/react.svg";
function App() {
  const vu = "vu dep trai";
  const data = {
    address: "mangyang",
    country: "vietnam",
  };
  const addNewTodo = (vu) => {
    alert(`call me ${vu}`);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <ToDoNew addNewTodo={addNewTodo} name={vu} />
      <TodoStuff name={vu} data={data} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
}

export default App;
