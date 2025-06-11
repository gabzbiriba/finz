import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RotaProvider } from "./contexts/RotaContext.jsx";
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RotaProvider>
      <App />
    </RotaProvider>
  </React.StrictMode>,
)