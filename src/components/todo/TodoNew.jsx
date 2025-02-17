import { useState } from "react";

const ToDoNew = (props) => {
  // const valueInput = "vu";

  const { addNewTodo, name } = props;

  const [valueInput, setValueInput] = useState("eric");

  const handleClick = () => {
    alert("click");
  };
  const handleOnChange = (name) => {
    console.log("change event", name);
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My text input is = {valueInput}</div>
    </div>
  );
};

export default ToDoNew;
