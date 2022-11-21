import { createContext, useReducer } from "react";
import TodoReducer, { initState } from "../components/TodoReducer";

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);
};
