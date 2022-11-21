import { createContext, useReducer } from "react";
import TodoReducer, { initState, ACTIONS } from "../components/TodoReducer";

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  const addTodo = (todoContent) => {
    const todoData = todoObj(todoContent);
    const newTodo = state.todoList.concat(todoData);

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const value = {
    todoList: state.todoList,
    addTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const todoObj = (todoContent) => {
  return {
    id: Math.floor(Math.random() * 10000), // 先用這個方式解決對應 id
    todoContent,
    complete: false,
  };
};