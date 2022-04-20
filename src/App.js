import "./App.css";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Screen from "./screen";
import { ErrorBoundary } from "react-error-boundary";



const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log(error.message);
  return (
    <div role="alert" className="alert">
      <form>
        <h3>Login Here</h3>

        <label for="authorUR">Author URL</label>
        <input type="text" placeholder="https://author-p24020-e217804.adobeaemcloud.com" id="author-url" />

        <label for="token">Token</label>
        <input type="multiline" placeholder="Token" id="token" />

        <button onClick={resetErrorBoundary}>Try again</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={"/:screen"}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              console.log("reset");
            }}
          >
            <Screen />
          </ErrorBoundary>
        </Route>
        <Route exact={true} path={"/:folder/:screen"}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              console.log("reset");
            }}
          >
            <Screen />
          </ErrorBoundary>
        </Route>
        <Route exact={true} path={"/:parent/:folder/:screen"}>
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
