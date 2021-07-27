import "./App.css";
import RouterApp from "./router/RouterApp";
import { ContextProvider } from "./store/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <RouterApp />
      </ContextProvider>
    </div>
  );
}

export default App;
