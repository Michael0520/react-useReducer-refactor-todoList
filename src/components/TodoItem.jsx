import { useTodo } from "../context/TodoContext";

const Todo = () => {
  const { todoList, toggleTodo, deleteTodo } = useTodo();

  return (
    <>
      {todoList.map((todoItem) => {
        return (
          <div
            className="mb-4 flex w-full items-center justify-center gap-4 rounded border font-bold shadow-md shadow-white"
            key={todoItem.id}
          >
            <span className={`p-6 ${todoItem.complete && "line-through"}`}>
              {todoItem?.todoContent}
            </span>

            <button
              className="rounded  bg-green-400 p-4"
              type="button"
              onClick={() => toggleTodo(todoItem.id)}
            >
              {todoItem.complete ? "Cancel" : "Complete"}
            </button>
            <button
              className="rounded  bg-red-400 p-4"
              type="button"
              onClick={() => deleteTodo(todoItem.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
