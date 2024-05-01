import Router from "../router/Router";
import "./App.css";
import NonRenderableComp from "./NonRenderableComp";

function App() {
  return (
    <>
      <NonRenderableComp />
      <Router />
    </>
  );
}

export default App;
