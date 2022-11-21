import { createContext, useReducer } from "react";
import { initState } from "../components/TodoReducer";

export const TodoContext = createContext(initState);

export const TodoProvider = () => {};
