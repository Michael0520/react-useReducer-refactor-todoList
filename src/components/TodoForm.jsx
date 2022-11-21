import { useContext, useEffect, useRef, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  console.log(addTodo);

  const [todoContent, setTodoContent] = useState("");

  const input = useRef(null);

  const handleSubmit = () => {
    dispatch({ type: ACTIONS.ADD, payload: { todoContent: todoContent } });
    setTodoContent("");
  };

  const handleEnterPoint = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleInputFocus = (target) => {
    if (todoContent.length === 0) {
      target.current.focus();
    }
  };

  /**
   * 判斷
   */
  useEffect(() => {
    handleInputFocus(input);
  }, [todoContent]);

  return (
    <div className="mx-auto w-full min-w-full max-w-md">
      <form
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
        onSubmit={handleEnterPoint}
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="content"
          >
            Content
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="content"
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
            placeholder="content"
            ref={input}
          />
        </div>
        <button
          className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
          onClick={handleSubmit}
        >
          ADD IN
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
