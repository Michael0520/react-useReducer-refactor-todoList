const Todo = ({ todo, dispatch }) => {
  return (
    <div className="mb-4 flex w-full items-center justify-center gap-4 rounded border font-bold shadow-md shadow-white">
      <span className={`p-6 ${todo.complete && "line-through"}`}>
        {todo.todoContent}
      </span>
      <button className="rounded  bg-green-400 p-4" type="button">
        {todo.complete ? "Complete" : "Cancel"}
      </button>
      <button className="rounded  bg-red-400 p-4" type="button">
        Delete
      </button>
    </div>
  );
};

export default Todo;
