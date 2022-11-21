import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-usereducer-refactor-todolist/",
  plugins: [react()],
  base: "/react-useReducer-refactor-todoList/",
  server: {
    open: true,
  },
});
