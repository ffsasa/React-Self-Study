import "./components/todo/todo.css";
import ToDoNew from "./components/todo/TodoNew";
import TodoStuff from "./components/todo/TodoStuff";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "1" },
    { id: 1, name: "12" },
    { id: 1, name: "123" },
  ]);

  const vu = "vu dep trai";
  const data = {
    address: "mangyang",
    country: "vietnam",
  };
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1,10000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);

  };
    
    const randomIntFromInterval = (min, max) => {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <ToDoNew addNewTodo={addNewTodo} name={vu} />
      <TodoStuff name={vu} data={data} todoList={todoList} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
}

export default App;
