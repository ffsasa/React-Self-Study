const ToDoNew = (props) => {
  console.log(props);
  const { addNewTodo, name } = props;
  addNewTodo(name);

  const handleClick = () => {
    alert("click");
  };
  const handleOnChange = (name) => {
    console.log("change", name);
  };
  return (
    <div>
      <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default ToDoNew;
