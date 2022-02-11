import "./App.css";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/home";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
