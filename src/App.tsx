import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RoutingModule } from "./RoutingModule";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutingModule />
      </Provider>
    </div>
  );
}

export default App;
