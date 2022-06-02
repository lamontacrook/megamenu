import "./App.css";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Screen from "./screen";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div class="error-message">
      <span class="error-text">
        <h1>{error.name}</h1>
        {error.message}
        <pre>{error.stack}</pre>
      </span>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={"/:screen"}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}>
            <Screen />
          </ErrorBoundary>
        </Route>
        <Route exact={true} path={"/:folder/:screen"}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}>
            <Screen />
          </ErrorBoundary>
        </Route>
        <Route exact={true} path={"/:parent/:folder/:screen"}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}>
            <Screen />
          </ErrorBoundary>
        </Route>
        <Route path="/">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}>
            <Screen />
          </ErrorBoundary>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
