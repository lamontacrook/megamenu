import "./App.css";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Screen from "./screen";
import { ErrorBoundary } from "react-error-boundary";



const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={"/:path"}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              console.log("reset");
            }}
          >
            <Screen />
          </ErrorBoundary>
        </Route>
        <Route path="/">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              console.log("reset");
            }}
          >
            <Screen />
          </ErrorBoundary>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
