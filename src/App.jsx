import React, { useEffect, useState, useReducer } from "react";
import Todo from "./components/Todo";
import logo from "./logo.svg";

/**
 * - 留存原有的 todoList, 單獨去新增 todoContent 以及 complete 的資料
 */
const reducer = (todoList, action) => {
  console.log("todoList:", todoList);
  console.log("action:", action);

  const { todoContent } = action.payload;

  switch (action.type) {
    case "ADD":
      return [...todoList, newTodo(todoContent)];

    default:
      break;
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

  const handleSubmit = () => {
    dispatch({ type: "ADD", payload: { todoContent: todoContent } });
  };

  const handleEnterPoint = (e) => {
    e.preventDefault();
    handleSubmit();
  };

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
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="button"
                onClick={handleSubmit}
              >
                ADD IN
              </button>
              <a
                className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                href="#"
              >
                check content?
              </a>
            </div>
          </form>
          <p className="text-center text-xs text-pink-500">{todoContent}</p>

          {todoList.map((todo, index) => {
            console.log("trigger");
            return <Todo key={index} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
