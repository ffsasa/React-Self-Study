const ToDoNew = (props) => {
  console.log(props);
  const { addNewTodo, name } = props;
  addNewTodo(name);
  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default ToDoNew;
