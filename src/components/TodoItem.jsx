import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

/**
 *
 * @param {Object} todo - 資料內容
 * @param {Object} dispatch - patch event
 * @returns
 */
const Todo = () => {
  const { todoList, toggleTodo } = useContext(TodoContext);

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
            <button className="rounded  bg-red-400 p-4" type="button">
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
