import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import "./global.scss";
import { TASKS_MOCK } from './mock/tasks.mock'
import Home from "./views/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={TASKS_MOCK}/>
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
