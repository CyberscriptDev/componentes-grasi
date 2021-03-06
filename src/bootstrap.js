import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

//Mount function to start up the app
const mount = (HTMLElement, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, HTMLElement);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

//if we working in isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_components-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
