import React, { useEffect, useState, useReducer } from "react";
import logo from "./logo.svg";

const reducer = (todos, action) => {
  console.log(todos, action);

  switch (action.type) {
    case "ADD":
      return [...todos, { todoContent: handleEnterPoint }];

      break;

    default:
      break;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todoContent, setTodoContent] = useState("");

  const handleSubmit = () => {
    dispatch({ type: "ADD", payload: { todoContent: todoContent } });
  };

  const handleEnterPoint = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] selection:bg-green-900">
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
        <div className="mx-auto w-full max-w-xs">
          <form
            className="mb-4 w-96 rounded bg-white px-8 pt-6 pb-8 shadow-md"
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
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
