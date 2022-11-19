import React, { useEffect, useState, useReducer, useRef } from "react";
import { ACTIONS } from "./Actions";
import TodoItem from "./components/TodoItem";
import logo from "./logo.svg";

/**
 * - ADD: 留存原有的 todoList, 單獨去新增 todoContent 以及 complete 的資料
 * - TOGGLE: 判斷 id 是否 match，有的話，就將 complete = !complete
 * - DELETE: 將 todoList filter match 該點擊的 todoItem ，將沒有 match 到的 item ，return 出來
 */
const reducer = (todoList, action) => {
  const { todoContent, id } = action.payload;

  switch (action.type) {
    case ACTIONS.ADD:
      return [...todoList, newTodo(todoContent)];

    case ACTIONS.TOGGLE:
      return todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE:
      return todoList.filter((todo) => {
        return todo.id !== id;
      });

    default:
      return todoList;
  }
};

const newTodo = (todoContent) => {
  return {
    id: Math.floor(Math.random() * 10000), // 先用這個方式解決對應 id
    todoContent,
    complete: false,
  };
};

function App() {
  const [todoList, dispatch] = useReducer(reducer, []);
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white selection:bg-green-900">
      <header>
        <img
          src={logo}
          className="animate-speed h-60 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
          }
        </style>
      </header>
      {/* form */}
      <main>
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

          {todoList.map((todo, index) => {
            return <TodoItem key={index} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
