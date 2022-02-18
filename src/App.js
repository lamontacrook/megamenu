import "./App.css";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Screen from "./screens/screen";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={"/magazine:path"}>
          <Screen name="magazine" />
        </Route>
        <Route path="/">
          <Screen name="home" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
