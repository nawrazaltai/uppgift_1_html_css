import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <App />
  </React.StrictMode>
);
