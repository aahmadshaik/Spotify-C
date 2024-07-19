import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PlayerContextProvider } from "./context/PlayerContext.jsx";
import { TokenProvider } from "./context/TokenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <TokenProvider>
          <App />
        </TokenProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
