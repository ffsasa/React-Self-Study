const TodoStuff = (props) => {
  
    const {todoList} = props;
    console.log(todoList);
    return (
      <div className="todo-stuff">
        {todoList.map((item, index)=> {
            return(
            <div className="todo-item">
              <div>{item.name}</div>
              <button>Delete</button>
            </div>)
        })}
        <div>Learning React </div>
        <div>Watching youtube</div>
        <div>
          {JSON.stringify(props.todoList)}
        </div>
      </div>
    );
}

export default TodoStuff;