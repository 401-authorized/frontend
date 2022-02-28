import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import AuthContext from "./Components/Context/auth-context";

ReactDOM.render(
  <MantineProvider
    theme={{
      colorScheme: "light",
      colors: {
        indulge: ["#2873ac", "#ddebf8", "#1a609f", "#c0d5ff"],
      },
    }}
  >
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
  </MantineProvider>,
  document.getElementById("root")
);
