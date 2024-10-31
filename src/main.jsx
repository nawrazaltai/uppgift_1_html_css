import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    {/* <App /> */}
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
