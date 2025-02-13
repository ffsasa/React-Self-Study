const TodoStuff = (props) => {
    console.log(props)
    const a = props.name
    return (
      <div className="todo-stuff">
        <div>My name is {a}</div>
        <div>Learning React </div>
        <div>Watching youtube</div>
      </div>
    );
}

export default TodoStuff;