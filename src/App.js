import "./App.css";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Screen from "./screen";
import ErrorBoundary from "./components/ErrorBoundary";


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={"/:path"}>
          <ErrorBoundary><Screen /></ErrorBoundary>
        </Route>
        <Route path="/">
        <ErrorBoundary><Screen /></ErrorBoundary>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
