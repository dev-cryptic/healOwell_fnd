import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./context/AppContext.jsx";
import { SocketProvider } from "./context/SocketProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Measuring performance
reportWebVitals();