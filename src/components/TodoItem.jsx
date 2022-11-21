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
            <div
              className={`p-4 text-2xl text-pink-500 ${
                todoItem.complete && "line-through decoration-4	"
              }`}
            >
              <span className="text-[#5CC9E8]">{todoItem?.todoContent}</span>
            </div>

            <div className="ml-auto flex items-end justify-end gap-4 p-4">
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
          </div>
        );
      })}
    </>
  );
};

export default Todo;
