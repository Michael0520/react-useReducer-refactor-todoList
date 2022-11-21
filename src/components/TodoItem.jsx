import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

/**
 *
 * @param {Object} todo - 資料內容
 * @param {Object} dispatch - patch event
 * @returns
 */
const Todo = () => {
  const { todoList } = useContext(TodoContext);
  console.log(todoList);

  return (
    <>
      {todoList.map((todoItem) => {
        console.log(todoItem);
        return (
          <div
            className="mb-4 flex w-full items-center justify-center gap-4 rounded border font-bold shadow-md shadow-white"
            key={todoItem.id}
          >
            <span className={`p-6 ${todoItem.complete && "line-through"}`}>
              {todoItem?.todoContent}
            </span>

            <button className="rounded  bg-green-400 p-4" type="button">
              {todoItem.complete ? "Complete" : "Cancel"}
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
