import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store/store.ts";
import React from "react";

axios.defaults.headers.common["Authorization"] =
  "Bearer ad1ed9bb086203b90ba24327abb22bac";
axios.defaults.headers.common["Accept"] = "application/json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
