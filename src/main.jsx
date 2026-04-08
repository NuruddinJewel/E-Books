import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router";
import BookProvider from "./Context/BookContext";
// import BookContext from "./Context/BookContext";
import { ToastContainer } from 'react-toastify';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BookProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </BookProvider>
);