import { useEffect, useState, useReducer, useRef, useContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoContext, TodoProvider } from "./context/TodoContext";
import logo from "./logo.svg";

function App() {
  const { addTodo } = useContext(TodoContext);
  console.log(addTodo);

  return (
    <TodoProvider>
      <div
        className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white
      selection:bg-green-900
      "
      >
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
        <main className=" max-w-3xl md:min-w-[500px]">
          <TodoForm />
          <TodoItem />
        </main>
      </div>
    </TodoProvider>
  );
}

export default App;
