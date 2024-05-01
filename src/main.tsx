import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.headers.common["Authorization"] =
  "Bearer 3792db84226274a81a6ab12d785d0660";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
);
