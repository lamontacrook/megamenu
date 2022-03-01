import "./App.css";
import React from "react";
import { HashRouter, Switch, Route, useParams } from "react-router-dom";
import Screen from "./screens/screen";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={"/:path"}>
          <Screen />
        </Route>
        <Route path="/">
          <Screen />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
