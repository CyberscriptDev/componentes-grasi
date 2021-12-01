import React from "react";
import { Home } from "./pages/Home";
import { History } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

type AppProps = {
  history: History;
};

export default function App({ history }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/componentes">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
